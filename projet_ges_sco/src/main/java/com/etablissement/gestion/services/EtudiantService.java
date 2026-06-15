package com.etablissement.gestion.services;

import com.etablissement.gestion.dtos.EtudiantDto;
import com.etablissement.gestion.model.Inscription;
import com.etablissement.gestion.repository.EtudiantRepository;
import com.etablissement.gestion.repository.InscriptionRepository;
import com.etablissement.gestion.services.Impl.EtudiantImpl;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EtudiantService implements EtudiantImpl {

    private final EtudiantRepository etudiantRepository;
    private final InscriptionRepository inscriptionRepository;

    public EtudiantService(EtudiantRepository etudiantRepository,
                           InscriptionRepository inscriptionRepository) {
        this.etudiantRepository = etudiantRepository;
        this.inscriptionRepository = inscriptionRepository;
    }

    @Override
    public EtudiantDto findByNom(String nom) {
        if (nom == null) {
            return null;
        }
        return etudiantRepository.findByNom(nom)
                .map(EtudiantDto::fromEntity)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Aucun étudiant avec NOM = " + nom + " trouvé dans la BDD"
                ));
    }

    @Override
    public List<EtudiantDto> findByFiliere(String filiere) {
        if (filiere == null) {
            return null;
        }
        return etudiantRepository.findByFiliere(filiere).stream()
                .map(EtudiantDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<EtudiantDto> findByNiveau(String niveau) {
        if (niveau == null) {
            return null;
        }
        return etudiantRepository.findByNiveau(niveau).stream()
                .map(EtudiantDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<EtudiantDto> findAll() {
        return etudiantRepository.findAll().stream()
                .map(EtudiantDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public EtudiantDto update(Long id, EtudiantDto etudiantDto) {
        if (id == null) {
            return null;
        }
        com.etablissement.gestion.model.Etudiant etudiant = etudiantRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Aucun étudiant avec ID = " + id + " trouvé dans la BDD"
                ));
        etudiant.setNom(etudiantDto.getNom());
        etudiant.setPrenom(etudiantDto.getPrenom());
        etudiant.setFiliere(etudiantDto.getFiliere());
        etudiant.setNiveau(etudiantDto.getNiveau());
        etudiant.setEmail(etudiantDto.getEmail());
        etudiant.setDateNaissance(etudiantDto.getDateNaissance());
        return EtudiantDto.fromEntity(etudiantRepository.save(etudiant));
    }

    @Override
    public EtudiantDto findById(Long id) {
        if (id == null) {
            return null;
        }
        return etudiantRepository.findById(id)
                .map(EtudiantDto::fromEntity)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Aucun étudiant avec ID = " + id + " trouvé dans la BDD"
                ));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        com.etablissement.gestion.model.Etudiant etudiant = etudiantRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Aucun étudiant avec ID = " + id + " trouvé dans la BDD"
                ));
        List<Inscription> inscriptions = inscriptionRepository.findByEtudiantId(id);
        inscriptionRepository.deleteAll(inscriptions);
        etudiantRepository.delete(etudiant);
    }
}
