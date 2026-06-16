package com.etablissement.gestion.service;

import com.etablissement.gestion.model.*;
import com.etablissement.gestion.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.UUID;

@Service
public class ScolariteService {

    @Autowired
    private EtudiantRepository etudiantRepository;
    @Autowired
    private InscriptionRepository inscriptionRepository;

    @Transactional
    public Etudiant enregistrerEtudiant(Etudiant etudiant) {
        String uniqueSuffix = UUID.randomUUID().toString().substring(0, 3).toUpperCase();
        etudiant.setMatricule("GL2024-" + uniqueSuffix);
        return etudiantRepository.save(etudiant);
    }

    @Transactional
    public void desinscrireEtudiant(Long inscriptionId) {
        Inscription inscription = inscriptionRepository.findById(inscriptionId)
            .orElseThrow(() -> new RuntimeException("Inscription introuvable"));

        if (inscription.getNotes() != null && !inscription.getNotes().isEmpty()) {
            throw new IllegalStateException("Sécurité : Impossible de désinscrire cet étudiant car des notes ont déjà été saisies");
        }

        inscriptionRepository.delete(inscription);
    }
}