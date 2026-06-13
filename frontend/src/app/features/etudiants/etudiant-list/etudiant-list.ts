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
    <div class="flex flex-col gap-10">
      <!-- Premium Header Section -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div class="space-y-1.5">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded-md bg-zinc-100 text-[10px] font-bold text-zinc-500 uppercase tracking-wider border border-zinc-200/50">Module</span>
            <span class="w-1 h-1 rounded-full bg-zinc-300"></span>
            <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Académique</span>
          </div>
          <h1 class="text-4xl font-extrabold text-zinc-900 tracking-tight leading-none">Liste des Étudiants</h1>
          <p class="text-[15px] text-zinc-500 font-medium max-w-xl">Gérez l'ensemble des dossiers étudiants, consultez leurs inscriptions et suivez leur parcours académique.</p>
        </div>
        
        <button mat-flat-button routerLink="/etudiants/nouveau" 
          class="group flex items-center gap-3 h-14 px-8 rounded-2xl bg-zinc-900 shadow-xl shadow-zinc-900/10 text-white font-bold hover:bg-zinc-800 transition-all active:scale-[0.98]">
          <mat-icon class="scale-90 group-hover:rotate-90 transition-transform duration-500">add</mat-icon>
          Inscrire un étudiant
        </button>
      </div>

      <!-- Empty State / List Container -->
      <div class="relative group">
        <!-- Decorative Background Gradient -->
        <div class="absolute -inset-1 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div class="relative flex flex-col items-center justify-center p-20 bg-white border border-zinc-200/60 rounded-[2rem] shadow-premium text-center">
          <div class="relative mb-8">
            <div class="absolute inset-0 bg-zinc-100 rounded-3xl rotate-6 scale-95 opacity-50"></div>
            <div class="relative w-20 h-20 rounded-3xl bg-zinc-50 border border-zinc-200/50 flex items-center justify-center text-zinc-900 shadow-sm">
              <mat-icon class="text-4xl scale-110">people_outline</mat-icon>
            </div>
          </div>
          
          <h3 class="text-xl font-extrabold text-zinc-900 mb-2 tracking-tight">Aucun étudiant répertorié</h3>
          <p class="text-[15px] text-zinc-400 font-medium max-w-xs mb-8 leading-relaxed">Commencez par ajouter votre premier étudiant pour activer les fonctionnalités de suivi.</p>
          
          <div class="flex items-center gap-4">
            <div class="flex -space-x-3 overflow-hidden">
              <div class="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-100"></div>
              <div class="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200"></div>
              <div class="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-300"></div>
            </div>
            <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider">Prêt pour l'importation</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EtudiantListComponent {}
