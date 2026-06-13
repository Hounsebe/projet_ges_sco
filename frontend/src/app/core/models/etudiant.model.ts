export interface Etudiant {
  id: number;
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string; // ou Date si vous utilisez des objets Date
  filiere: string;
  niveau: string;
}
