import { Etudiant } from './etudiant.model';
import { Cours } from './cours.model';
import { Note } from './note.model';

export interface CoursDetails {
  cours: Cours;
  notes: Note[];
  moyenneCours: number;
}

export interface Bulletin {
  etudiant: Etudiant;
  coursDetails: CoursDetails[];
  moyenneGenerale: number;
}
