import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NoteService } from '../../../core/services/note.service';

@Component({
  selector: 'app-note-form',
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
        <p class="text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">
          Saisie des notes
        </p>
        <h1 class="text-3xl font-semibold text-slate-900">Attribuer une note à un étudiant</h1>
        <p class="text-sm text-slate-500">
          Renseignez l'inscription, le type d'évaluation et la note pour enregistrer le résultat.
        </p>
      </div>

      <section class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <form [formGroup]="noteForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="grid gap-6 md:grid-cols-2">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>ID de l'inscription</mat-label>
              <input matInput type="number" formControlName="inscriptionId" placeholder="0001" />
              <mat-error *ngIf="noteForm.get('inscriptionId')?.hasError('required')"
                >L'ID de l'inscription est requis.</mat-error
              >
              <mat-error *ngIf="noteForm.get('inscriptionId')?.hasError('pattern')"
                >Entrez un identifiant valide.</mat-error
              >
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Type d'évaluation</mat-label>
              <mat-select formControlName="typeEvaluation">
                <mat-option value="DS">DS</mat-option>
                <mat-option value="EXAM">EXAM</mat-option>
                <mat-option value="TP">TP</mat-option>
              </mat-select>
              <mat-error *ngIf="noteForm.get('typeEvaluation')?.hasError('required')"
                >Le type d'évaluation est requis.</mat-error
              >
            </mat-form-field>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Note (/20)</mat-label>
              <input
                matInput
                type="number"
                formControlName="valeur"
                placeholder="14.5"
                min="0"
                max="20"
                step="0.1"
              />
              <mat-error *ngIf="noteForm.get('valeur')?.hasError('required')"
                >La note est requise.</mat-error
              >
              <mat-error
                *ngIf="
                  noteForm.get('valeur')?.hasError('min') || noteForm.get('valeur')?.hasError('max')
                "
                >La note doit être comprise entre 0 et 20.</mat-error
              >
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Commentaire</mat-label>
              <textarea
                matInput
                formControlName="commentaire"
                rows="4"
                placeholder="Commentaire optionnel"
              ></textarea>
            </mat-form-field>
          </div>

          <div
            *ngIf="successMessage"
            class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700"
          >
            {{ successMessage }}
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
              [disabled]="noteForm.invalid || isSubmitting"
              class="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Enregistrement...' : 'Enregistrer la note' }}
            </button>
          </div>
        </form>
      </section>
    </div>
  `,
})
export class NoteFormComponent {
  noteForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
  ) {
    this.noteForm = this.fb.group({
      inscriptionId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      typeEvaluation: ['', Validators.required],
      valeur: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
      commentaire: [''],
    });
  }

  onSubmit(): void {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';
    this.isSubmitting = true;

    const payload = {
      inscription: { id: Number(this.noteForm.value.inscriptionId) },
      typeEvaluation: this.noteForm.value.typeEvaluation,
      valeur: Number(this.noteForm.value.valeur),
      commentaire: this.noteForm.value.commentaire || '',
    };

    this.noteService.ajouter(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = 'Note enregistrée avec succès !';
        this.snackBar.open(this.successMessage, 'Fermer', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.noteForm.reset();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.message || "Erreur lors de l'enregistrement de la note.";
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
    this.noteForm.reset();
    this.errorMessage = '';
    this.successMessage = '';
  }
}
