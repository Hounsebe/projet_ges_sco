package com.etablissement.gestion.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "cours")
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String code;

    @NotBlank(message = "L'intitulé du cours est obligatoire")
    private String intitule;

    @Min(value = 1, message = "Le coefficient minimum est de 1")
    private Integer coefficient;

    public Cours() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    public String getIntitule() { return intitule; }
    public void setIntitule(String intitule) { this.intitule = intitule; }
    public Integer getCoefficient() { return coefficient; }
    public void setCoefficient(Integer coefficient) { this.coefficient = coefficient; }
}