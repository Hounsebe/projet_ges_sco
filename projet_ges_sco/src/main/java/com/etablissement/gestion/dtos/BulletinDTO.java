package com.etablissement.gestion.dto;

import java.util.List;
import java.util.Map;

public class BulletinDTO {
    private Map<String, String> etudiant;
    private List<LigneBulletinDTO> lignes;
    private Double moyenneGenerale;
    private String mention;
    private String decision;

    public BulletinDTO() {}

    public Map<String, String> getEtudiant() { return etudiant; }
    public void setEtudiant(Map<String, String> etudiant) { this.etudiant = etudiant; }
    public List<LigneBulletinDTO> getLignes() { return lignes; }
    public void setLignes(List<LigneBulletinDTO> lignes) { this.lignes = lignes; }
    public Double getMoyenneGenerale() { return moyenneGenerale; }
    public void setMoyenneGenerale(Double moyenneGenerale) { this.moyenneGenerale = moyenneGenerale; }
    public String getMention() { return mention; }
    public void setMention(String mention) { this.mention = mention; }
    public String getDecision() { return decision; }
    public void setDecision(String decision) { this.decision = decision; }
}