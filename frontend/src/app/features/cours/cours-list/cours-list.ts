import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoursService } from '../../../core/services/cours.service';
import { Cours } from '../../../core/models/cours.model';

@Component({
  selector: 'app-cours-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './cours-list.html',
  styleUrl: './cours-list.css'
})
export class CoursListComponent implements OnInit {
  displayedColumns: string[] = ['code', 'intitule', 'coefficient'];
  cours$!: Observable<Cours[]>;

  constructor(private coursService: CoursService) {}

  ngOnInit(): void {
    this.cours$ = this.coursService.getAll();
  }
}
