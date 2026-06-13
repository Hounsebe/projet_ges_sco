package com.etablissement.gestion.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "inscription_id", nullable = false)
    private Inscription inscription;

    @Min(value = 0, message = "La note ne peut pas être inférieure à 0")
    @Max(value = 20, message = "La note ne peut pas dépasser 20")
    @Column(nullable = false)
    private Double valeur;

    @NotBlank(message = "Le type d'évaluation (DS, EXAM, TP) est obligatoire")
    private String typeEvaluation;

    private String commentaire;

    public Note() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Inscription getInscription() { return inscription; }
    public void setInscription(Inscription inscription) { this.inscription = inscription; }
    public Double getValeur() { return valeur; }
    public void setValeur(Double valeur) { this.valeur = valeur; }
    public String getTypeEvaluation() { return typeEvaluation; }
    public void setTypeEvaluation(String typeEvaluation) { this.typeEvaluation = typeEvaluation; }
    public String getCommentaire() { return commentaire; }
    public void setCommentaire(String commentaire) { this.commentaire = commentaire; }
}