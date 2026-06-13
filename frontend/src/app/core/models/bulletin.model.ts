export interface Bulletin {
  etudiant: {
    nom: string;
    prenom: string;
    matricule: string;
    filiere: string;
  };
  lignes: Array<{
    cours: string;
    coefficient: number;
    notes: { [key: string]: number };
    moyenneCours: number;
  }>;
  moyenneGenerale: number;
  mention: string;
  decision: string;
}
