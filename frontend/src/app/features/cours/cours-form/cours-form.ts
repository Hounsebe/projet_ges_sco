import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CoursService } from '../../../core/services/cours.service';
import { Cours } from '../../../core/models/cours.model';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cours-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './cours-form.html',
  styleUrl: './cours-form.css'
})
export class CoursFormComponent {
  coursForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private coursService: CoursService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.coursForm = this.fb.group({
      code: ['', [Validators.required]],
      intitule: ['', [Validators.required]],
      coefficient: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.coursForm.invalid) {
      return;
    }

    this.isLoading = true;
    const newCours: Cours = this.coursForm.value;

    this.coursService.create(newCours).pipe(take(1)).subscribe({
      next: () => {
        this.isLoading = false;
        this.snackBar.open('Cours créé !', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/cours']);
      },
      error: (err) => {
        this.isLoading = false;
        const errMsg = err.message || 'Une erreur est survenue lors de la création du cours.';
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
