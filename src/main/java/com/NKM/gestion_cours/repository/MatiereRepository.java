package com.NKM.gestion_cours.repository;

import com.NKM.gestion_cours.entity.Matiere;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatiereRepository extends JpaRepository<Matiere, Long> {

    //Methode permettant de selectionner les matieres en fonction de l'id de la classe
    List<Matiere> findByClassesId(Long classesId);

}
