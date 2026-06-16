import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoursService } from '../../../core/services/cours.service';
import { Cours } from '../../../core/models/cours.model';
import { CoursStats } from '../../../core/models/cours-stats.model';
import { Etudiant } from '../../../core/models/etudiant.model';

@Component({
  selector: 'app-cours-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './cours-list.html',
  styleUrl: './cours-list.css',
})
export class CoursListComponent implements OnInit {
  displayedColumns: string[] = ['code', 'intitule', 'coefficient', 'expand'];

  cours: Cours[] = [];
  isLoading = true;
  selectedCours: Cours | null = null;
  stats: CoursStats | null = null;
  inscrits: Etudiant[] = [];
  loadingDetails = false;
  detailsError = '';
  statsError = '';

  constructor(
    private coursService: CoursService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadCours();
  }

  loadCours(): void {
    this.isLoading = true;
    this.coursService
      .getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (data) => {
          this.cours = data;
          this.cdr.detectChanges();
        },
        error: () => {
          this.cours = [];
          this.cdr.detectChanges();
        },
      });
  }

  toggleCoursDetails(cours: Cours): void {
    if (this.selectedCours?.id === cours.id) {
      this.selectedCours = null;
      this.stats = null;
      this.inscrits = [];
      this.detailsError = '';
      this.statsError = '';
      this.cdr.detectChanges();
      return;
    }

    this.selectedCours = cours;
    this.stats = null;
    this.inscrits = [];
    this.detailsError = '';
    this.statsError = '';
    this.loadingDetails = true;
    this.cdr.detectChanges();

    forkJoin({
      stats: this.coursService.getStats(cours.id).pipe(
        catchError(() => {
          this.statsError = 'Statistiques indisponibles pour ce cours.';
          return of({ moyenne: null, noteMin: null, noteMax: null, tauxReussite: null } as CoursStats);
        }),
      ),
      inscrits: this.coursService.getInscrits(cours.id).pipe(catchError(() => of([] as Etudiant[]))),
    })
      .pipe(
        finalize(() => {
          this.loadingDetails = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: ({ stats, inscrits }) => {
          this.stats = stats;
          this.inscrits = inscrits ?? [];
          this.cdr.detectChanges();
        },
        error: () => {
          this.detailsError = 'Impossible de charger les détails de ce cours.';
          this.inscrits = [];
          this.cdr.detectChanges();
        },
      });
  }

  isSelected(cours: Cours): boolean {
    return this.selectedCours?.id === cours.id;
  }

  getTauxReussiteClass(taux: number | null): string {
    if (taux === null) return 'stat-value--neutral';
    return taux >= 70 ? 'stat-value--success' : 'stat-value--warning';
  }

  formatNote(value: number | null): string {
    return value !== null ? `${value.toFixed(1)}` : '—';
  }

  formatTaux(value: number | null): string {
    return value !== null ? `${value.toFixed(0)}%` : '—';
  }
}
