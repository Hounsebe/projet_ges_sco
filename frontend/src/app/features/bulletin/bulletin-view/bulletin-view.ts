import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { finalize } from 'rxjs/operators';
import { BulletinService } from '../../../core/services/bulletin.service';
import { EtudiantService } from '../../../core/services/etudiant.service';
import { Bulletin } from '../../../core/models/bulletin.model';
import { Etudiant } from '../../../core/models/etudiant.model';

@Component({
  selector: 'app-bulletin-view',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  template: `
    <div class="p-6 max-w-6xl mx-auto flex flex-col gap-8">
      <div class="space-y-2">
        <p class="text-sm uppercase tracking-[0.28em] text-indigo-600 font-semibold">
          Bulletin de notes
        </p>
        <h1 class="text-3xl sm:text-4xl font-semibold text-slate-900">
          Générer le bulletin d'un étudiant
        </h1>
        <p class="max-w-2xl text-sm text-slate-500">
          Saisissez l'identifiant de l'étudiant puis cliquez sur « Générer le bulletin » pour
          afficher sa fiche de notes.
        </p>
      </div>

      <section class="grid gap-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 class="text-xl font-semibold text-slate-900">Sélectionner un étudiant</h2>
            <p class="text-sm text-slate-500">Choisissez un étudiant pour charger son bulletin de notes.</p>
          </div>
          <form
            [formGroup]="searchForm"
            (ngSubmit)="onSubmit()"
            class="flex flex-col gap-3 sm:flex-row sm:items-center w-full sm:w-auto"
          >
            <mat-form-field appearance="outline" class="w-full sm:w-72">
              <mat-label>Étudiant</mat-label>
              <mat-select formControlName="etudiantId" id="etudiant-select">
                <mat-option *ngFor="let et of etudiants" [value]="et.id">
                  {{ et.prenom }} {{ et.nom }} ({{ et.matricule }})
                </mat-option>
              </mat-select>
            </mat-form-field>
            <button
              type="submit"
              [disabled]="searchForm.invalid || isLoading"
              class="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ isLoading ? 'Génération...' : 'Générer le bulletin' }}
            </button>
          </form>
        </div>
      </section>

      <div
        *ngIf="errorMessage"
        class="rounded-3xl border border-red-200 bg-red-50 p-5 text-red-700 shadow-sm"
      >
        <div class="flex items-start gap-3">
          <div class="mt-0.5 rounded-full bg-red-100 p-2 text-red-600">!</div>
          <div>
            <h3 class="text-sm font-semibold">Aucun étudiant trouvé</h3>
            <p class="text-sm text-red-700">{{ errorMessage }}</p>
          </div>
        </div>
      </div>

      <section *ngIf="bulletin" class="space-y-6">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,1fr)]">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div class="space-y-3">
                <p class="text-sm uppercase tracking-[0.24em] text-slate-500">Étudiant</p>
                <h2 class="text-2xl font-semibold text-slate-900">
                  {{ bulletin.etudiant.prenom }} {{ bulletin.etudiant.nom }}
                </h2>
                <p class="text-sm text-slate-500">
                  Matricule :
                  <span class="font-semibold text-slate-900">{{
                    bulletin.etudiant.matricule
                  }}</span>
                </p>
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p class="text-sm uppercase tracking-[0.16em] text-slate-500">Moyenne générale</p>
                  <p class="mt-3 text-3xl font-semibold text-slate-900">
                    {{ bulletin.moyenneGenerale | number: '1.1-1' }} / 20
                  </p>
                </div>
                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p class="text-sm uppercase tracking-[0.16em] text-slate-500">Décision</p>
                  <div
                    class="mt-3 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                    [ngClass]="getDecisionClasses(bulletin.decision)"
                  >
                    {{ bulletin.decision }}
                  </div>
                  <p class="mt-4 text-sm text-slate-600">
                    <span class="font-semibold">Mention :</span> {{ bulletin.mention }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table class="min-w-full text-left text-sm">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Cours
                </th>
                <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Coefficient
                </th>
                <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Notes obtenues
                </th>
                <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Moyenne du cours
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              <tr *ngFor="let ligne of bulletin.lignes">
                <td class="px-6 py-5">
                  <div class="font-semibold text-slate-900">{{ ligne.cours }}</div>
                </td>
                <td class="px-6 py-5 text-slate-600">{{ ligne.coefficient }}</td>
                <td class="px-6 py-5 text-slate-600">
                  DS : {{ ligne.notes['DS'] !== undefined ? ligne.notes['DS'] : '-' }} | EXAM :
                  {{ ligne.notes['EXAM'] !== undefined ? ligne.notes['EXAM'] : '-' }} | TP :
                  {{ ligne.notes['TP'] !== undefined ? ligne.notes['TP'] : '-' }}
                </td>
                <td class="px-6 py-5">
                  <span
                    class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                    >{{ ligne.moyenneCours | number: '1.1-1' }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
})
export class BulletinViewComponent implements OnInit {
  searchForm: FormGroup;
  bulletin: Bulletin | null = null;
  etudiants: Etudiant[] = [];
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private bulletinService: BulletinService,
    private etudiantService: EtudiantService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    this.searchForm = this.fb.group({
      etudiantId: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Charger la liste des étudiants pour le select
    this.etudiantService.getAll().subscribe({
      next: (data) => {
        this.etudiants = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('[BulletinView] Erreur chargement étudiants:', err);
        this.cdr.detectChanges();
      },
    });

    // Pré-sélection via queryParams (navigation depuis la liste étudiants)
    this.route.queryParams.subscribe((params) => {
      const etudiantId = params['etudiantId'];
      if (etudiantId) {
        this.searchForm.patchValue({ etudiantId: Number(etudiantId) });
        this.onSubmit();
      }
      this.cdr.detectChanges();
    });
  }

  onSubmit(): void {
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.bulletin = null;
    this.isLoading = true;

    const etudiantId = Number(this.searchForm.value.etudiantId);
    this.bulletinService
      .getBulletin(etudiantId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (bulletin) => {
          this.bulletin = bulletin;
          this.cdr.detectChanges();
        },
        error: (err) => {
          if (err?.status === 404) {
            this.errorMessage = 'Aucun étudiant trouvé avec cet identifiant';
          } else {
            this.errorMessage = 'Impossible de charger le bulletin. Veuillez réessayer plus tard.';
          }
          this.snackBar.open(this.errorMessage, 'Fermer', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
          this.cdr.detectChanges();
        },
      });
  }

  getDecisionClasses(decision: string): string {
    return decision?.toUpperCase() === 'ADMIS'
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-red-100 text-red-700';
  }

  formatNotes(notes: { [key: string]: number } = {}): string {
    const evaluations = ['DS', 'EXAM', 'TP'];
    return evaluations
      .map((type) => `${type}: ${notes[type] !== undefined ? notes[type].toFixed(1) : '-'}`)
      .join(' | ');
  }
}
