package com.NKM.gestion_cours.repository;

import com.NKM.gestion_cours.entity.Tache;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TacheRepository extends JpaRepository<Tache,Long> {

    //Methode permettant de selectionner les taches en fonction de l'id de la matiere
    List<Tache> findByMatiereMid(Long matiereId);

}
