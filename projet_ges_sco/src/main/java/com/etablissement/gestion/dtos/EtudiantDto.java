package com.etablissement.gestion.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EtudiantDto {

    private Long id;

    private String matricule;

    private String nom;

    private String prenom;

    private String email;

    private LocalDate dateNaissance;

    private String filiere;

    private String niveau;

    public static EtudiantDto fromEntity(com.etablissement.gestion.model.Etudiant etudiants){
        if (etudiants == null){
            return null;
        }
        return EtudiantDto.builder()
                .id(etudiants.getId())
                .matricule(etudiants.getMatricule())
                .nom(etudiants.getNom())
                .prenom(etudiants.getPrenom())
                .filiere(etudiants.getFiliere())
                .niveau(etudiants.getNiveau())
                .email(etudiants.getEmail())
                .dateNaissance(etudiants.getDateNaissance())
                .build();
    }
    public static com.etablissement.gestion.model.Etudiant toEntity(EtudiantDto etudiantDto){
        if (etudiantDto == null){
            return  null;
        }
        com.etablissement.gestion.model.Etudiant etudiants = new com.etablissement.gestion.model.Etudiant();
        etudiants.setId(etudiantDto.getId());
        etudiants.setMatricule(etudiantDto.getMatricule());
        etudiants.setNom(etudiantDto.getNom());
        etudiants.setPrenom(etudiantDto.getPrenom());
        etudiants.setFiliere(etudiantDto.getFiliere());
        etudiants.setNiveau(etudiantDto.getNiveau());
        etudiants.setEmail(etudiantDto.getEmail());
        etudiants.setDateNaissance(etudiantDto.getDateNaissance());
        return etudiants;
    }
}
