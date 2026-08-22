package com.NKM.gestion_cours.repository;

import com.NKM.gestion_cours.entity.Classes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClassesRepository extends JpaRepository<Classes, Long> {

    // Récupère uniquement les classes créées par cet appareil
    List<Classes> findByDeviceId(String deviceId);
}
