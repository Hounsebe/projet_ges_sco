package com.etablissement.gestion.controller;

import com.etablissement.gestion.model.*;
import com.etablissement.gestion.dto.BulletinDTO;
import com.etablissement.gestion.service.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
@Tag(name = "Gestion Académique", description = "Endpoints pour les étudiants, inscriptions et bulletins")
public class ScolariteController {

    @Autowired
    private ScolariteService scolariteService;
    @Autowired
    private BulletinService bulletinService;

    @PostMapping("/etudiants")
    @Operation(summary = "Inscrire un nouvel étudiant", description = "Génère automatiquement un matricule unique au format GL2024-XXX")
    public ResponseEntity<Etudiant> ajouterEtudiant(@RequestBody Etudiant etudiant) {
        Etudiant cree = scolariteService.enregistrerEtudiant(etudiant);
        return new ResponseEntity<>(cree, HttpStatus.CREATED);
    }

    @DeleteMapping("/inscriptions/{id}")
    @Operation(summary = "Désinscrire un étudiant", description = "Bloque la suppression si une note est déjà associée à l'inscription")
    public ResponseEntity<String> supprimerInscription(@PathVariable Long id) {
        try {
            scolariteService.desinscrireEtudiant(id);
            return ResponseEntity.ok("Désinscription effectuée avec succès.");
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/etudiants/{id}/bulletin")
    @Operation(summary = "Générer le bulletin de notes", description = "Calcule les moyennes pondérées et retourne un DTO imbriqué")
    public ResponseEntity<BulletinDTO> obtenirBulletin(@PathVariable Long id) {
        try {
            BulletinDTO bulletin = bulletinService.genererBulletin(id);
            return ResponseEntity.ok(bulletin);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}