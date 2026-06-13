import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { EtudiantService } from '../../../core/services/etudiant.service';
import { Etudiant } from '../../../core/models/etudiant.model';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  templateUrl: './etudiant-form.html',
  styleUrl: './etudiant-form.css'
})
export class EtudiantFormComponent {
  etudiantForm: FormGroup;
  isLoading = false;

  filieres = ['Informatique', 'Mathématiques', 'Physique', 'Chimie', 'Biologie'];
  niveaux = ['L1', 'L2', 'L3', 'M1', 'M2'];

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.etudiantForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateNaissance: ['', [Validators.required]],
      filiere: ['', [Validators.required]],
      niveau: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.etudiantForm.invalid) {
      return;
    }

    this.isLoading = true;
    const newEtudiant: Etudiant = this.etudiantForm.value;

    this.etudiantService.create(newEtudiant).pipe(take(1)).subscribe({
      next: () => {
        this.isLoading = false;
        this.snackBar.open('Étudiant créé avec succès !', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/etudiants']);
      },
      error: (err) => {
        this.isLoading = false;
        const errMsg = err.message || "Une erreur est survenue lors de l'enregistrement de l'étudiant.";
        this.snackBar.open(errMsg, 'Fermer', {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}
