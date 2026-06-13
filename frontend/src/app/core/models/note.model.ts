import { Inscription } from './inscription.model';

export interface Note {
  id: number;
  inscription: Inscription;
  valeur: number;
  typeEvaluation: string;
  commentaire: string;
}
