package com.etablissement.gestion.dto;

public class CoursStatsDTO {
    private Double moyenne;
    private Double noteMin;
    private Double noteMax;
    private Double tauxReussite;

    public CoursStatsDTO(Double moyenne, Double noteMin, Double noteMax, Double tauxReussite) {
        this.moyenne = moyenne;
        this.noteMin = noteMin;
        this.noteMax = noteMax;
        this.tauxReussite = tauxReussite;
    }

    public Double getMoyenne() { return moyenne; }
    public void setMoyenne(Double moyenne) { this.moyenne = moyenne; }
    public Double getNoteMin() { return noteMin; }
    public void setNoteMin(Double noteMin) { this.noteMin = noteMin; }
    public Double getNoteMax() { return noteMax; }
    public void setNoteMax(Double noteMax) { this.noteMax = noteMax; }
    public Double getTauxReussite() { return tauxReussite; }
    public void setTauxReussite(Double tauxReussite) { this.tauxReussite = tauxReussite; }
}