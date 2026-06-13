import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Bulletin } from '../models/bulletin.model';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {
  private apiUrl = `${environment.apiUrl}/etudiants`;

  constructor(private http: HttpClient) {}

  getBulletin(etudiantId: number): Observable<Bulletin> {
    return this.http.get<Bulletin>(`${this.apiUrl}/${etudiantId}/bulletin`);
  }
}
