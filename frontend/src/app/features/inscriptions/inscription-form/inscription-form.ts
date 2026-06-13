import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inscription-form',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="p-6 max-w-5xl mx-auto flex flex-col gap-6">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Gestion des Inscriptions</h1>
        <p class="text-sm text-slate-500">Inscrivez les étudiants aux différents cours.</p>
      </div>

      <div class="flex flex-col items-center justify-center p-16 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
        <div class="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mb-4">
          <mat-icon class="text-3xl">assignment</mat-icon>
        </div>
        <h3 class="text-lg font-bold text-slate-700 mb-1">Module Inscriptions</h3>
        <p class="text-sm text-slate-400 max-w-sm">Le module pour inscrire et désinscrire les étudiants sera bientôt implémenté.</p>
      </div>
    </div>
  `
})
export class InscriptionFormComponent {}
