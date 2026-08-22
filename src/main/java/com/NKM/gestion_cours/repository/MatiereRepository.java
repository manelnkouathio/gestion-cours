package com.NKM.gestion_cours.repository;

import com.NKM.gestion_cours.entity.Matiere;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatiereRepository extends JpaRepository<Matiere, Long> {

    //Methode permettant de selectionner les matieres en fonction de l'id de la classe
    List<Matiere> findByClassesId(Long classesId);

    //Methode permettant de selectionner les matieres d'une classe pour un appareil donné
    List<Matiere> findByClassesIdAndDeviceId(Long classesId, String deviceId);

    //Methode permettant de selectionner toutes les matieres d'un appareil
    List<Matiere> findByDeviceId(String deviceId);

}
