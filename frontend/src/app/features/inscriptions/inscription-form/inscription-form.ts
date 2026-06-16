import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CoursService } from '../../../core/services/cours.service';
import { EtudiantService } from '../../../core/services/etudiant.service';
import { InscriptionService } from '../../../core/services/inscription.service';
import { Cours } from '../../../core/models/cours.model';
import { Etudiant } from '../../../core/models/etudiant.model';

@Component({
  selector: 'app-inscription-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="p-6 max-w-3xl mx-auto flex flex-col gap-6">
      <div class="space-y-2">
        <p class="text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">Inscription</p>
        <h1 class="text-3xl font-semibold text-slate-900">Inscrire un étudiant à un cours</h1>
        <p class="text-sm text-slate-500">
          Sélectionnez un étudiant et un cours pour enregistrer une nouvelle inscription.
        </p>
      </div>

      <section class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div *ngIf="isLoadingData" class="text-sm text-slate-400 py-4 text-center">
          Chargement des listes...
        </div>

        <form
          *ngIf="!isLoadingData"
          [formGroup]="inscriptionForm"
          (ngSubmit)="onSubmit()"
          class="space-y-6"
        >
          <div class="grid gap-6">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Étudiant</mat-label>
              <mat-select formControlName="etudiantId">
                <mat-option *ngFor="let etudiant of etudiantsList" [value]="etudiant.id">
                  {{ etudiant.nom }} {{ etudiant.prenom }} ({{ etudiant.matricule }})
                </mat-option>
              </mat-select>
              <mat-error *ngIf="inscriptionForm.get('etudiantId')?.hasError('required')">
                L'étudiant est requis.
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Cours</mat-label>
              <mat-select formControlName="coursId">
                <mat-option *ngFor="let cours of coursList" [value]="cours.id">
                  {{ cours.intitule }} ({{ cours.code }})
                </mat-option>
              </mat-select>
              <mat-error *ngIf="inscriptionForm.get('coursId')?.hasError('required')">
                Le cours est requis.
              </mat-error>
            </mat-form-field>
          </div>

          <div
            *ngIf="errorMessage"
            class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {{ errorMessage }}
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              class="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              (click)="onReset()"
            >
              Annuler
            </button>
            <button
              type="submit"
              [disabled]="inscriptionForm.invalid || isSubmitting"
              class="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Enregistrement...' : "Enregistrer l'inscription" }}
            </button>
          </div>
        </form>
      </section>
    </div>
  `,
})
export class InscriptionFormComponent implements OnInit {
  inscriptionForm: FormGroup;
  etudiantsList: Etudiant[] = [];
  coursList: Cours[] = [];
  errorMessage = '';
  isSubmitting = false;
  isLoadingData = true;

  constructor(
    private fb: FormBuilder,
    private coursService: CoursService,
    private etudiantService: EtudiantService,
    private inscriptionService: InscriptionService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
  ) {
    this.inscriptionForm = this.fb.group({
      etudiantId: ['', Validators.required],
      coursId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    forkJoin({
      etudiants: this.etudiantService.getAll(),
      cours: this.coursService.getAll(),
    })
      .pipe(
        finalize(() => {
          this.isLoadingData = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: ({ etudiants, cours }) => {
          this.etudiantsList = etudiants;
          this.coursList = cours;
          this.cdr.detectChanges();
        },
        error: () => {
          this.etudiantsList = [];
          this.coursList = [];
          this.errorMessage = 'Impossible de charger les listes. Veuillez réessayer.';
          this.cdr.detectChanges();
        },
      });
  }

  onSubmit(): void {
    if (this.inscriptionForm.invalid) {
      this.inscriptionForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;

    const payload = {
      etudiant: { id: Number(this.inscriptionForm.value.etudiantId) },
      cours: { id: Number(this.inscriptionForm.value.coursId) },
    };

    this.inscriptionService.inscrire(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.snackBar.open('Inscription enregistrée avec succès !', 'Fermer', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.onReset();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.message || "Erreur lors de l'inscription de l'étudiant.";
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

  onReset(): void {
    this.inscriptionForm.reset();
    this.errorMessage = '';
  }
}
