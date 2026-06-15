import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Etudiant } from '../../../core/models/etudiant.model';

export interface EtudiantDeleteDialogData {
  etudiant: Etudiant;
}

@Component({
  selector: 'app-etudiant-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="delete-dialog text-center">
      <div class="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4">
        <mat-icon class="text-red-500">delete_outline</mat-icon>
      </div>
      <h2 class="text-lg font-extrabold text-zinc-900 mb-2">Supprimer cet étudiant ?</h2>
      <p class="text-sm text-zinc-500 mb-1">
        <span class="font-semibold text-zinc-800">{{ data.etudiant.prenom }} {{ data.etudiant.nom }}</span>
      </p>
      <p class="text-xs text-zinc-400 mb-6">
        Cette action supprimera également ses inscriptions et notes associées.
      </p>
      <div class="flex justify-center gap-3">
        <button mat-stroked-button (click)="onCancel()" class="rounded-xl px-6">Annuler</button>
        <button mat-flat-button color="warn" (click)="onConfirm()" class="rounded-xl px-6">
          Supprimer
        </button>
      </div>
    </div>
  `,
  styles: `
    .delete-dialog {
      padding: 8px 4px;
      min-width: 360px;
    }
  `,
})
export class EtudiantDeleteDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<EtudiantDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EtudiantDeleteDialogData,
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
