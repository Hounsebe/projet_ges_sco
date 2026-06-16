package com.etablissement.gestion.service;

import com.etablissement.gestion.dto.*;
import com.etablissement.gestion.model.*;
import com.etablissement.gestion.repository.InscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class BulletinService {

    @Autowired
    private InscriptionRepository inscriptionRepository;

    public BulletinDTO genererBulletin(Long etudiantId) {
        List<Inscription> inscriptions = inscriptionRepository.findByEtudiantId(etudiantId);
        if (inscriptions.isEmpty()) {
            throw new RuntimeException("Aucune inscription trouvée pour cet étudiant.");
        }

        Etudiant etudiant = inscriptions.get(0).getEtudiant();
        List<LigneBulletinDTO> lignes = new ArrayList<>();
        double sommeMoyennesPonderees = 0;
        int totalCoefficients = 0;

        for (Inscription ins : inscriptions) {
            Map<String, Double> notesMap = new HashMap<>();
            notesMap.put("DS", 0.0);
            notesMap.put("EXAM", 0.0);
            notesMap.put("TP", 0.0);

            for (Note note : ins.getNotes()) {
                notesMap.put(note.getTypeEvaluation().toUpperCase(), note.getValeur());
            }

            double moyenneCours = (notesMap.get("DS") * 0.3) + (notesMap.get("TP") * 0.2) + (notesMap.get("EXAM") * 0.5);
            int coef = ins.getCours().getCoefficient();

            lignes.add(new LigneBulletinDTO(ins.getCours().getIntitule(), coef, notesMap, moyenneCours));

            sommeMoyennesPonderees += (moyenneCours * coef);
            totalCoefficients += coef;
        }

        double moyenneGenerale = totalCoefficients > 0 ? (sommeMoyennesPonderees / totalCoefficients) : 0;
        String decision = (moyenneGenerale >= 10) ? "ADMIS" : "AJOURNÉ";
        String mention = "Passable";
        if (moyenneGenerale >= 14) mention = "Bien";
        else if (moyenneGenerale >= 12) mention = "Assez Bien";

        Map<String, String> infoEtudiant = new HashMap<>();
        infoEtudiant.put("matricule", etudiant.getMatricule());
        infoEtudiant.put("nom", etudiant.getNom());
        infoEtudiant.put("prenom", etudiant.getPrenom());

        BulletinDTO bulletin = new BulletinDTO();
        bulletin.setEtudiant(infoEtudiant);
        bulletin.setMoyenneGenerale(moyenneGenerale);
        bulletin.setMention(mention);
        bulletin.setDecision(decision);
        bulletin.setLignes(lignes);

        return bulletin;
    }
}