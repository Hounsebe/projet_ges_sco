package com.etablissement.gestion.controller;

import com.etablissement.gestion.model.Inscription;
import com.etablissement.gestion.model.Note;
import com.etablissement.gestion.repository.InscriptionRepository;
import com.etablissement.gestion.repository.NoteRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PedagogieController {

    @Autowired
    private InscriptionRepository inscriptionRepository;

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping("/inscriptions")
    public ResponseEntity<?> inscrireEtudiant(@RequestBody Inscription inscription) {
        try {
            if (inscription.getDateInscription() == null) {
                inscription.setDateInscription(LocalDate.now());
            }
            Inscription nouvelle = inscriptionRepository.save(inscription);
            return new ResponseEntity<>(nouvelle, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Erreur : Cet étudiant est déjà inscrit à ce cours.");
        }
    }

    @PostMapping("/notes")
    public ResponseEntity<?> saisirNote(@Valid @RequestBody Note note) {
        Note nouvelle = noteRepository.save(note);
        return new ResponseEntity<>(nouvelle, HttpStatus.CREATED);
    }

    @PutMapping("/notes/{id}")
    public ResponseEntity<Note> modifierNote(@PathVariable Long id, @Valid @RequestBody Note noteUpdate) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Note introuvable avec ID = " + id));
        note.setValeur(noteUpdate.getValeur());
        if (noteUpdate.getCommentaire() != null) {
            note.setCommentaire(noteUpdate.getCommentaire());
        }
        if (noteUpdate.getTypeEvaluation() != null) {
            note.setTypeEvaluation(noteUpdate.getTypeEvaluation());
        }
        return ResponseEntity.ok(noteRepository.save(note));
    }

    @GetMapping("/inscriptions")
    public ResponseEntity<List<Inscription>> listerInscriptions() {
        return ResponseEntity.ok(inscriptionRepository.findAll());
    }
}
