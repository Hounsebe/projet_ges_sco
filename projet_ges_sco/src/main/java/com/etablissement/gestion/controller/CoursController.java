package com.etablissement.gestion.controller;

import com.etablissement.gestion.dto.CoursStatsDTO;
import com.etablissement.gestion.model.Cours;
import com.etablissement.gestion.model.Etudiant;
import com.etablissement.gestion.model.Inscription;
import com.etablissement.gestion.repository.CoursRepository;
import com.etablissement.gestion.repository.InscriptionRepository;
import com.etablissement.gestion.repository.NoteRepository;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cours")
@CrossOrigin(origins = "*")
public class CoursController {

    @Autowired
    private CoursRepository coursRepository;

    @Autowired
    private InscriptionRepository inscriptionRepository;

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping
    @Operation(summary = "Enregistrer un nouveau cours", description = "le code est remplit par vous")
    public ResponseEntity<Cours> creerCours(@Valid @RequestBody Cours cours) {
        Cours nouveauCours = coursRepository.save(cours);
        return new ResponseEntity<>(nouveauCours, HttpStatus.CREATED);
    }

    @GetMapping
    @Operation(summary = "afficher la liste des cours disponible dans un établissement", description = "ces cours sont dispensés")
    public ResponseEntity<List<Cours>> listerCours() {
        return ResponseEntity.ok(coursRepository.findAll());
    }

    @PutMapping("/{id}")
    @Operation(summary = "Modifier un cours existant", description = "Met à jour le code, l'intitulé et le coefficient")
    public ResponseEntity<Cours> modifierCours(@PathVariable Long id, @Valid @RequestBody Cours coursUpdate) {
        Cours cours = coursRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cours introuvable avec ID = " + id));
        cours.setCode(coursUpdate.getCode());
        cours.setIntitule(coursUpdate.getIntitule());
        cours.setCoefficient(coursUpdate.getCoefficient());
        return ResponseEntity.ok(coursRepository.save(cours));
    }

    @DeleteMapping("/{id}")
    @Transactional
    @Operation(summary = "Supprimer un cours", description = "Supprime le cours ainsi que ses inscriptions et notes associées")
    public ResponseEntity<Void> supprimerCours(@PathVariable Long id) {
        Cours cours = coursRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cours introuvable avec ID = " + id));
        List<Inscription> inscriptions = inscriptionRepository.findByCoursId(id);
        inscriptionRepository.deleteAll(inscriptions);
        coursRepository.delete(cours);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/etudiants")
    @Operation(summary = "Lister les étudiants inscrits à un cours")
    public ResponseEntity<List<Etudiant>> listerEtudiantsInscrits(@PathVariable Long id) {
        if (!coursRepository.existsById(id)) {
            throw new EntityNotFoundException("Cours introuvable avec ID = " + id);
        }
        List<Etudiant> etudiants = inscriptionRepository.findByCoursId(id).stream()
                .map(Inscription::getEtudiant)
                .toList();
        return ResponseEntity.ok(etudiants);
    }

    @GetMapping("/{id}/statistiques")
    @Operation(summary = "Obtenir les statistiques d'un cours", description = "Moyenne, note min, note max et taux de réussite")
    public ResponseEntity<CoursStatsDTO> obtenirStatistiques(@PathVariable Long id) {
        if (!coursRepository.existsById(id)) {
            throw new EntityNotFoundException("Cours introuvable avec ID = " + id);
        }
        CoursStatsDTO stats = noteRepository.getStatsByCoursId(id);
        if (stats == null) {
            stats = new CoursStatsDTO(null, null, null, null);
        }
        return ResponseEntity.ok(stats);
    }
}
