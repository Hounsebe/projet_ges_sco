package com.etablissement.gestion.repository;

import com.etablissement.gestion.model.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    Optional<Etudiant> findByNom(String nom);

    List<Etudiant> findByFiliere(String filiere);

    List<Etudiant> findByNiveau(String niveau);
}