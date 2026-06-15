import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Etudiant } from '../../../core/models/etudiant.model';

export interface EtudiantEditDialogData {
  etudiant: Etudiant;
}

@Component({
  selector: 'app-etudiant-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  template: `
    <div class="edit-dialog">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center">
          <mat-icon class="text-zinc-600 scale-90">edit</mat-icon>
        </div>
        <div>
          <h2 class="text-lg font-extrabold text-zinc-900 tracking-tight">Modifier l'étudiant</h2>
          <p class="text-xs text-zinc-500 font-medium">{{ data.etudiant.matricule }}</p>
        </div>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Nom</mat-label>
            <input matInput formControlName="nom" />
          </mat-form-field>
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Prénom</mat-label>
            <input matInput formControlName="prenom" />
          </mat-form-field>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email" />
          </mat-form-field>
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Date de naissance</mat-label>
            <input matInput [matDatepicker]="picker" formControlName="dateNaissance" />
            <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Filière</mat-label>
            <mat-select formControlName="filiere">
              <mat-option *ngFor="let f of filieres" [value]="f">{{ f }}</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Niveau</mat-label>
            <mat-select formControlName="niveau">
              <mat-option *ngFor="let n of niveaux" [value]="n">{{ n }}</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t border-zinc-100">
          <button type="button" mat-stroked-button (click)="onCancel()" class="rounded-xl">
            Annuler
          </button>
          <button
            type="submit"
            mat-flat-button
            [disabled]="form.invalid || isSaving"
            class="rounded-xl bg-zinc-900 text-white"
          >
            {{ isSaving ? 'Enregistrement...' : 'Enregistrer' }}
          </button>
        </div>
      </form>
    </div>
  `,
  styles: `
    .edit-dialog {
      padding: 4px;
      min-width: 480px;
      max-width: 560px;
    }
  `,
})
export class EtudiantEditDialogComponent {
  form: FormGroup;
  isSaving = false;

  filieres = ['Informatique', 'Mathématiques', 'Physique', 'Chimie', 'Biologie'];
  niveaux = ['L1', 'L2', 'L3', 'M1', 'M2'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EtudiantEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EtudiantEditDialogData,
  ) {
    const e = data.etudiant;
    this.form = this.fb.group({
      nom: [e.nom, Validators.required],
      prenom: [e.prenom, Validators.required],
      email: [e.email, [Validators.required, Validators.email]],
      dateNaissance: [e.dateNaissance ? new Date(e.dateNaissance) : null, Validators.required],
      filiere: [e.filiere, Validators.required],
      niveau: [e.niveau, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const value = this.form.value;
    const dateNaissance =
      value.dateNaissance instanceof Date
        ? value.dateNaissance.toISOString().split('T')[0]
        : value.dateNaissance;

    this.dialogRef.close({
      ...this.data.etudiant,
      ...value,
      dateNaissance,
    } as Etudiant);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
