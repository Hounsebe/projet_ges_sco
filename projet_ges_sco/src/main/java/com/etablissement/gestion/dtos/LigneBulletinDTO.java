package com.etablissement.gestion.dto;

import java.util.Map;

public class LigneBulletinDTO {
    private String cours;
    private Integer coefficient;
    private Map<String, Double> notes;
    private Double moyenneCours;

    public LigneBulletinDTO(String cours, Integer coefficient, Map<String, Double> notes, Double moyenneCours) {
        this.cours = cours;
        this.coefficient = coefficient;
        this.notes = notes;
        this.moyenneCours = moyenneCours;
    }

    public String getCours() { return cours; }
    public void setCours(String cours) { this.cours = cours; }
    public Integer getCoefficient() { return coefficient; }
    public void setCoefficient(Integer coefficient) { this.coefficient = coefficient; }
    public Map<String, Double> getNotes() { return notes; }
    public void setNotes(Map<String, Double> notes) { this.notes = notes; }
    public Double getMoyenneCours() { return moyenneCours; }
    public void setMoyenneCours(Double moyenneCours) { this.moyenneCours = moyenneCours; }
}