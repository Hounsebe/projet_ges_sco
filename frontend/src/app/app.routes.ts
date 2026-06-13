import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'etudiants',
    loadComponent: () => import('./features/etudiants/etudiant-list/etudiant-list').then(m => m.EtudiantListComponent)
  },
  {
    path: 'etudiants/nouveau',
    loadComponent: () => import('./features/etudiants/etudiant-form/etudiant-form').then(m => m.EtudiantFormComponent)
  },
  {
    path: 'cours',
    loadComponent: () => import('./features/cours/cours-list/cours-list').then(m => m.CoursListComponent)
  },
  {
    path: 'cours/nouveau',
    loadComponent: () => import('./features/cours/cours-form/cours-form').then(m => m.CoursFormComponent)
  },
  {
    path: 'inscriptions',
    loadComponent: () => import('./features/inscriptions/inscription-form/inscription-form').then(m => m.InscriptionFormComponent)
  },
  {
    path: 'notes',
    loadComponent: () => import('./features/notes/note-form/note-form').then(m => m.NoteFormComponent)
  },
  {
    path: 'bulletins',
    loadComponent: () => import('./features/bulletin/bulletin-view/bulletin-view').then(m => m.BulletinViewComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
