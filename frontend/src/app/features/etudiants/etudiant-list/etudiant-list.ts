import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <div class="p-6 max-w-5xl mx-auto flex flex-col gap-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Liste des Étudiants</h1>
          <p class="text-sm text-slate-500">Gérez les étudiants inscrits à l'établissement.</p>
        </div>
        <button mat-flat-button routerLink="/etudiants/nouveau" class="flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-sm text-white font-medium hover:opacity-90 transition-opacity">
          <mat-icon>add</mat-icon>
          Inscrire un étudiant
        </button>
      </div>

      <div class="flex flex-col items-center justify-center p-16 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
        <div class="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mb-4">
          <mat-icon class="text-3xl">people</mat-icon>
        </div>
        <h3 class="text-lg font-bold text-slate-700 mb-1">Module Étudiants</h3>
        <p class="text-sm text-slate-400 max-w-sm mb-6">La liste des étudiants s'affichera ici une fois l'implémentation complète.</p>
      </div>
    </div>
  `
})
export class EtudiantListComponent {}
