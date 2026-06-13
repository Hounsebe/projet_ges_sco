package com.etablissement.gestion.controller;

import com.etablissement.gestion.model.Cours;
import com.etablissement.gestion.repository.CoursRepository;
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
    public ResponseEntity<Cours> creerCours(@Valid @RequestBody Cours cours) {
        Cours nouveauCours = coursRepository.save(cours);
        return new ResponseEntity<>(nouveauCours, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Cours>> listerCours() {
        return ResponseEntity.ok(coursRepository.findAll());
    }
}