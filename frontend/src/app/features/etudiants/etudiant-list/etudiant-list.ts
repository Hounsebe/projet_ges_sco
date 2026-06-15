import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { finalize } from 'rxjs/operators';
import { EtudiantService } from '../../../core/services/etudiant.service';
import { Etudiant } from '../../../core/models/etudiant.model';
import { EtudiantEditDialogComponent } from '../etudiant-edit-dialog/etudiant-edit-dialog';
import { EtudiantDeleteDialogComponent } from '../etudiant-delete-dialog/etudiant-delete-dialog';

@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  templateUrl: './etudiant-list.html',
  styleUrl: './etudiant-list.css',
})
export class EtudiantListComponent implements OnInit {
  displayedColumns = ['matricule', 'nomPrenom', 'email', 'filiere', 'niveau', 'actions'];

  etudiants: Etudiant[] = [];
  filteredEtudiants: Etudiant[] = [];
  isLoading = true;

  filiereFilter = '';
  niveauFilter = '';

  filiereOptions: string[] = [];
  niveauOptions: string[] = [];

  constructor(
    private etudiantService: EtudiantService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    this.isLoading = true;
    this.etudiantService
      .getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (data) => {
          this.etudiants = data;
          this.buildFilterOptions();
          this.applyFilters();
          this.cdr.detectChanges();
        },
        error: () => {
          this.snackBar.open('Impossible de charger les étudiants.', 'Fermer', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
          this.cdr.detectChanges();
        },
      });
  }

  buildFilterOptions(): void {
    this.filiereOptions = [...new Set(this.etudiants.map((e) => e.filiere).filter(Boolean))].sort();
    this.niveauOptions = [...new Set(this.etudiants.map((e) => e.niveau).filter(Boolean))].sort();
  }

  applyFilters(): void {
    this.filteredEtudiants = this.etudiants.filter((e) => {
      const matchFiliere = !this.filiereFilter || e.filiere === this.filiereFilter;
      const matchNiveau = !this.niveauFilter || e.niveau === this.niveauFilter;
      return matchFiliere && matchNiveau;
    });
  }

  onFilterChange(): void {
    this.applyFilters();
    this.cdr.detectChanges();
  }

  clearFilters(): void {
    this.filiereFilter = '';
    this.niveauFilter = '';
    this.applyFilters();
    this.cdr.detectChanges();
  }

  openBulletin(etudiant: Etudiant): void {
    this.router.navigate(['/bulletins'], { queryParams: { etudiantId: etudiant.id } });
  }

  openEditDialog(etudiant: Etudiant): void {
    const dialogRef = this.dialog.open(EtudiantEditDialogComponent, {
      data: { etudiant },
      panelClass: 'premium-dialog',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((updated: Etudiant | undefined) => {
      if (!updated) return;

      this.etudiantService.update(updated.id, updated).subscribe({
        next: () => {
          this.snackBar.open('Étudiant modifié avec succès.', 'Fermer', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['success-snackbar'],
          });
          this.loadEtudiants();
          this.cdr.detectChanges();
        },
        error: () => {
          this.snackBar.open('Erreur lors de la modification.', 'Fermer', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
          this.cdr.detectChanges();
        },
      });
    });
  }

  openDeleteDialog(etudiant: Etudiant): void {
    const dialogRef = this.dialog.open(EtudiantDeleteDialogComponent, {
      data: { etudiant },
      panelClass: 'premium-dialog',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this.etudiantService.delete(etudiant.id).subscribe({
        next: () => {
          this.snackBar.open('Étudiant supprimé.', 'Fermer', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['success-snackbar'],
          });
          this.loadEtudiants();
          this.cdr.detectChanges();
        },
        error: () => {
          this.snackBar.open('Erreur lors de la suppression.', 'Fermer', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
          this.cdr.detectChanges();
        },
      });
    });
  }
}
