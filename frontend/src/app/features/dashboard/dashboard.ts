import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { forkJoin } from 'rxjs';
import {
  DashboardStatsComponent,
  StatItem,
} from '../../shared/components/dashboard-stats.component';
import { EtudiantService } from '../../core/services/etudiant.service';
import { CoursService } from '../../core/services/cours.service';
import { InscriptionService } from '../../core/services/inscription.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, DashboardStatsComponent],
  template: `
    <div class="flex flex-col gap-10">
      <!-- Dashboard Header -->
      <div class="space-y-1.5">
        <div class="flex items-center gap-2 mb-1">
          <span
            class="px-2 py-0.5 rounded-md bg-zinc-100 text-[10px] font-bold text-zinc-500 uppercase tracking-wider border border-zinc-200/50"
            >Aperçu</span
          >
          <span class="w-1 h-1 rounded-full bg-zinc-300"></span>
          <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Global</span>
        </div>
        <h1 class="text-4xl font-extrabold text-zinc-900 tracking-tight leading-none">
          Tableau de Bord
        </h1>
        <p class="text-[15px] text-zinc-500 font-medium max-w-xl">
          Bienvenue sur votre espace de gestion. Voici un résumé de l'activité de l'établissement.
        </p>
      </div>

      <!-- Stats Overview -->
      <app-dashboard-stats [stats]="overviewStats"></app-dashboard-stats>

      <!-- Recent Activity / Placeholder -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="p-8 bg-white border border-zinc-200/60 rounded-[2rem] shadow-sm">
          <h3 class="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <mat-icon class="text-zinc-400">history</mat-icon>
            Activités Récentes
          </h3>
          <div class="flex flex-col gap-4">
            @for (i of [1, 2, 3]; track i) {
              <div
                class="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100/50"
              >
                <div
                  class="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500"
                >
                  <mat-icon class="scale-75">update</mat-icon>
                </div>
                <div class="flex-1">
                  <div class="h-4 w-32 bg-zinc-200 rounded animate-pulse mb-2"></div>
                  <div class="h-3 w-48 bg-zinc-100 rounded animate-pulse"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="p-8 bg-white border border-zinc-200/60 rounded-[2rem] shadow-sm">
          <h3 class="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <mat-icon class="text-zinc-400">event_note</mat-icon>
            Événements à venir
          </h3>
          <div
            class="flex flex-col items-center justify-center h-48 text-center border-2 border-dashed border-zinc-100 rounded-2xl"
          >
            <p class="text-zinc-400 font-medium text-sm">Aucun événement prévu pour le moment</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  overviewStats: StatItem[] = [
    { label: 'Total Étudiants', value: '...', icon: 'groups', trend: '', trendUp: true },
    { label: 'Cours Actifs', value: '...', icon: 'auto_stories', trend: '', trendUp: true },
    { label: 'Inscriptions', value: '...', icon: 'how_to_reg', trend: '', trendUp: true },
  ];

  constructor(
    private etudiantService: EtudiantService,
    private coursService: CoursService,
    private inscriptionService: InscriptionService,
  ) {}

  ngOnInit() {
    forkJoin({
      etudiants: this.etudiantService.getAll(),
      cours: this.coursService.getAll(),
      inscriptions: this.inscriptionService.getAll(),
    }).subscribe({
      next: ({ etudiants, cours, inscriptions }) => {
        this.overviewStats = [
          {
            label: 'Total Étudiants',
            value: etudiants.length,
            icon: 'groups',
            trend: '+0.0%',
            trendUp: true,
          },
          {
            label: 'Cours Actifs',
            value: cours.length,
            icon: 'auto_stories',
            trend: '+0.0%',
            trendUp: true,
          },
          {
            label: 'Inscriptions',
            value: inscriptions.length,
            icon: 'how_to_reg',
            trend: '+0.0%',
            trendUp: true,
          },
        ];
      },
      error: () => {
        this.overviewStats = [
          { label: 'Total Étudiants', value: 'N/A', icon: 'groups', trend: '', trendUp: false },
          { label: 'Cours Actifs', value: 'N/A', icon: 'auto_stories', trend: '', trendUp: false },
          { label: 'Inscriptions', value: 'N/A', icon: 'how_to_reg', trend: '', trendUp: false },
        ];
      },
    });
  }
}
