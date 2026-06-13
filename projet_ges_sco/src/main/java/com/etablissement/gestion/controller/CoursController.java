package com.etablissement.gestion.controller;

import com.etablissement.gestion.model.Cours;
import com.etablissement.gestion.repository.CoursRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cours")
@CrossOrigin(origins = "*")
public class CoursController {

    @Autowired
    private CoursRepository coursRepository;

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
}