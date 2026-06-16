package com.etablissement.gestion.service.impl;

import com.etablissement.gestion.dto.EtudiantDto;

import java.util.List;

public interface EtudiantImpl {

    EtudiantDto findByNom(String nom);

    List<EtudiantDto> findByFiliere(String filiere);

    List<EtudiantDto> findByNiveau(String niveau);

    List<EtudiantDto> findAll();

    EtudiantDto update(Long id, EtudiantDto etudiantDto);

    EtudiantDto findById(Long id);

    void delete(Long id);

}
