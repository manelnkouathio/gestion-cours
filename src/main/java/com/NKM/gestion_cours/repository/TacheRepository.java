package com.NKM.gestion_cours.repository;

import com.NKM.gestion_cours.entity.Tache;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TacheRepository extends JpaRepository<Tache,Long> {

    //Methode permettant de selectionner les taches en fonction de l'id de la matiere
    List<Tache> findByMatiereMid(Long matiereId);

    //Methode permettant de selectionner les taches d'une matiere pour un appareil donné
    List<Tache> findByMatiereMidAndDeviceId(Long matiereId, String deviceId);

    //Methode permettant de selectionner toutes les taches d'un appareil
    List<Tache> findByDeviceId(String deviceId);

}
