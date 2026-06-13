package com.etablissement.gestion.repository;

import com.etablissement.gestion.model.Note;
import com.etablissement.gestion.dto.CoursStatsDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

    @Query("""
        SELECT new com.etablissement.gestion.dto.CoursStatsDTO(
            AVG(n.valeur), 
            MIN(n.valeur), 
            MAX(n.valeur),
            SUM(CASE WHEN n.valeur >= 10 THEN 1.0 ELSE 0.0 END) / COUNT(n) * 100
        )
        FROM Note n 
        WHERE n.inscription.cours.id = :coursId
    """)
    CoursStatsDTO getStatsByCoursId(@Param("coursId") Long coursId);
}