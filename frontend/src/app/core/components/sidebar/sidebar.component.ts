import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navItems = [
    { label: 'Étudiants', path: '/etudiants', icon: 'people' },
    { label: 'Cours', path: '/cours', icon: 'auto_stories' },
    { label: 'Inscriptions', path: '/inscriptions', icon: 'assignment' },
    { label: 'Notes', path: '/notes', icon: 'grade' },
    { label: 'Bulletins', path: '/bulletins', icon: 'description' }
  ];
}
