import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inscription-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <div class="p-6 max-w-6xl mx-auto flex flex-col gap-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="space-y-2">
          <p class="text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">Inscriptions</p>
          <h1 class="text-3xl font-semibold text-slate-900">Gestion des Inscriptions</h1>
          <p class="text-sm text-slate-500 max-w-2xl">Consultez et administrez les inscriptions des étudiants aux cours.</p>
        </div>

        <a routerLink="/inscriptions/nouvelle" class="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-700">
          <mat-icon>add</mat-icon>
          Nouvelle inscription
        </a>
      </div>

      <section class="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div class="flex flex-col items-center justify-center gap-5 text-center py-16">
          <div class="grid h-20 w-20 place-items-center rounded-full bg-indigo-50 text-indigo-600 shadow-inner-light">
            <mat-icon class="text-3xl">assignment</mat-icon>
          </div>
          <div class="space-y-3 max-w-xl">
            <h2 class="text-2xl font-semibold text-slate-900">Aucune inscription disponible</h2>
            <p class="text-sm text-slate-500">La liste des inscriptions n'est pas encore disponible côté backend. Créez une nouvelle inscription pour commencer à gérer vos étudiants et vos cours.</p>
          </div>
          <a routerLink="/inscriptions/nouvelle" class="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-700">Créer une inscription</a>
        </div>
      </section>
    </div>
  `
})
export class InscriptionListComponent {}
