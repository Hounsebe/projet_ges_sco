import { Etudiant } from './etudiant.model';
import { Cours } from './cours.model';

export interface Inscription {
  id: number;
  etudiant: Etudiant;
  cours: Cours;
  dateInscription: string; // ou Date
  statut: string;
}
