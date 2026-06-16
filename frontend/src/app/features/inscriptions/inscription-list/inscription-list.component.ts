import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InscriptionService } from '../../../core/services/inscription.service';
import { Inscription } from '../../../core/models/inscription.model';

@Component({
  selector: 'app-inscription-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="p-6 max-w-6xl mx-auto flex flex-col gap-8">
      <!-- En-tête -->
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="space-y-2">
          <p class="text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">Inscriptions</p>
          <h1 class="text-3xl font-semibold text-slate-900">Gestion des Inscriptions</h1>
          <p class="text-sm text-slate-500 max-w-2xl">Consultez et administrez les inscriptions des étudiants aux cours.</p>
        </div>
        <a
          routerLink="/inscriptions/nouvelle"
          class="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-700"
        >
          <mat-icon>add</mat-icon>
          Nouvelle inscription
        </a>
      </div>

      <!-- Chargement -->
      <div *ngIf="isLoading" class="flex justify-center py-16">
        <mat-spinner diameter="48"></mat-spinner>
      </div>

      <!-- Erreur -->
      <div
        *ngIf="!isLoading && errorMessage"
        class="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-sm flex items-center gap-3"
      >
        <mat-icon class="text-red-500">error_outline</mat-icon>
        <p class="text-sm font-medium">{{ errorMessage }}</p>
      </div>

      <!-- Table des inscriptions -->
      <section *ngIf="!isLoading && !errorMessage && inscriptions.length > 0"
        class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
      >
        <table class="min-w-full text-left text-sm">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr>
              <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500 text-xs">Nom de l'étudiant</th>
              <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500 text-xs">Matricule</th>
              <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500 text-xs">Cours</th>
              <th class="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-slate-500 text-xs">Date d'inscription</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 bg-white">
            <tr
              *ngFor="let ins of inscriptions"
              class="transition hover:bg-slate-50/60"
            >
              <td class="px-6 py-4">
                <div class="font-semibold text-slate-900">
                  {{ ins.etudiant.prenom }} {{ ins.etudiant.nom }}
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {{ ins.etudiant.matricule }}
                </span>
              </td>
              <td class="px-6 py-4 text-slate-700">
                {{ ins.cours.intitule }}
                <span class="ml-2 text-xs text-slate-400">({{ ins.cours.code }})</span>
              </td>
              <td class="px-6 py-4 text-slate-500 text-xs">
                {{ ins.dateInscription | date: 'dd/MM/yyyy' }}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- État vide -->
      <section
        *ngIf="!isLoading && !errorMessage && inscriptions.length === 0"
        class="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
      >
        <div class="flex flex-col items-center justify-center gap-5 text-center py-12">
          <div class="grid h-20 w-20 place-items-center rounded-full bg-indigo-50 text-indigo-600">
            <mat-icon class="text-3xl">assignment</mat-icon>
          </div>
          <div class="space-y-3 max-w-xl">
            <h2 class="text-2xl font-semibold text-slate-900">Aucune inscription pour le moment</h2>
            <p class="text-sm text-slate-500">Créez une première inscription pour commencer à gérer vos étudiants et cours.</p>
          </div>
          <a
            routerLink="/inscriptions/nouvelle"
            class="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-700"
          >
            Créer une inscription
          </a>
        </div>
      </section>
    </div>
  `,
})
export class InscriptionListComponent implements OnInit {
  inscriptions: Inscription[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private inscriptionService: InscriptionService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.inscriptionService.getAll().subscribe({
      next: (data) => {
        this.inscriptions = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Impossible de charger les inscriptions. Veuillez réessayer plus tard.';
        this.isLoading = false;
        console.error('[InscriptionList] Erreur chargement:', err);
        this.cdr.detectChanges();
      },
    });
  }
}

