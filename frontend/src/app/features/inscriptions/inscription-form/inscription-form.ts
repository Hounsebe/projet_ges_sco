import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CoursService } from '../../../core/services/cours.service';
import { InscriptionService } from '../../../core/services/inscription.service';
import { Cours } from '../../../core/models/cours.model';

@Component({
  selector: 'app-inscription-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
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
          Remplissez les informations ci-dessous pour enregistrer une nouvelle inscription.
        </p>
      </div>

      <section class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <form [formGroup]="inscriptionForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="grid gap-6">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>ID de l'étudiant</mat-label>
              <input matInput type="number" formControlName="etudiantId" placeholder="0001" />
              <p class="mt-2 text-xs text-slate-500">Saisissez l'ID numérique de l'étudiant</p>
              <mat-error *ngIf="inscriptionForm.get('etudiantId')?.hasError('required')"
                >L'ID étudiant est requis.</mat-error
              >
              <mat-error *ngIf="inscriptionForm.get('etudiantId')?.hasError('pattern')"
                >Entrez un ID numérique valide.</mat-error
              >
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Cours</mat-label>
              <mat-select formControlName="coursId">
                <mat-option *ngFor="let cours of coursList" [value]="cours.id"
                  >{{ cours.intitule }} ({{ cours.code }})</mat-option
                >
              </mat-select>
              <mat-error *ngIf="inscriptionForm.get('coursId')?.hasError('required')"
                >Le cours est requis.</mat-error
              >
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
  coursList: Cours[] = [];
  errorMessage = '';
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private coursService: CoursService,
    private inscriptionService: InscriptionService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
  ) {
    this.inscriptionForm = this.fb.group({
      etudiantId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      coursId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.coursService.getAll().subscribe({
      next: (cours) => {
        this.coursList = cours;
        this.cdr.detectChanges();
      },
      error: () => {
        this.coursList = [];
        this.errorMessage = 'Impossible de charger la liste des cours. Veuillez réessayer.';
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
        this.errorMessage = err?.error?.message || "Erreur lors de l'inscription de l'étudiant.";
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
