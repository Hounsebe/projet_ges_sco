import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Inscription } from '../models/inscription.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl = `${environment.apiUrl}/inscriptions`;

  constructor(private http: HttpClient) {}

  inscrire(data: { etudiant: { id: number }; cours: { id: number } }): Observable<Inscription> {
    return this.http.post<Inscription>(this.apiUrl, data);
  }

  desinscrire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
