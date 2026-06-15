import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cours } from '../models/cours.model';
import { CoursStats } from '../models/cours-stats.model';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = `${environment.apiUrl}/cours`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.apiUrl);
  }

  create(cours: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.apiUrl, cours);
  }

  getStats(id: number): Observable<CoursStats> {
    return this.http.get<CoursStats>(`${this.apiUrl}/${id}/statistiques`);
  }

  getInscrits(id: number): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/${id}/etudiants`);
  }
}
