package com.etablissement.gestion.controller;

import com.etablissement.gestion.dto.EtudiantDto;
import com.etablissement.gestion.service.EtudiantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/etudiants")
@CrossOrigin(origins = "*")
@Tag(name = "Gestion Etudiant", description = "Endpoints pour les étudiants, supprimer, modifier, recherche par nom, filiere/niveau et bulletins")
public class EtudiantController {
    @Autowired
    private EtudiantService etudiantService;

    @GetMapping("/nom")
    @Operation(summary = "trouver un etudiant grace à son nom", description = "bien remplire le nom de la personne ")
    public ResponseEntity<EtudiantDto> findByNom(@RequestParam String nom) {
        return ResponseEntity.ok(etudiantService.findByNom(nom));
    }

    @GetMapping("/filiere")
    @Operation(summary = "afficher la liste des étudiants par filiere", description = "permet d'afficher tous les étudiants de la meme filiere exemple de filiere: IGL4")
    public ResponseEntity<List<EtudiantDto>> findByFiliere(@RequestParam String filiere) {
        return ResponseEntity.ok(etudiantService.findByFiliere(filiere));
    }

    @GetMapping("/niveau")
    @Operation(summary = "afficher la liste des étudiants par niveau", description = "permet d'afficher tous les étudiants qui sont au meme niveau exemple: MASTER 1")
    public ResponseEntity<List<EtudiantDto>> findByNiveau(@RequestParam String niveau) {
        return ResponseEntity.ok(etudiantService.findByNiveau(niveau));
    }

    @GetMapping
    @Operation(summary = "afficher la liste des étudiants", description = "permet d'afficher tous les étudiants qui frequente dans la meme école")
    public ResponseEntity<List<EtudiantDto>> findAll() {
        return ResponseEntity.ok(etudiantService.findAll());
    }

    @PutMapping("/{id}")
    @Operation(summary = "modifier les informations d'un étudiant", description = "permet de modifier n'importe quelle information d'un étudiant sauf son ID et son MATRICULE")
    public ResponseEntity<EtudiantDto> update(@PathVariable("id") Long id, @RequestBody EtudiantDto etudiantDto) {
        return ResponseEntity.ok(etudiantService.update(id, etudiantDto));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "supprimer un étudiant", description = "supprime l'étudiant ainsi que ses inscriptions et notes associées")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        etudiantService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
