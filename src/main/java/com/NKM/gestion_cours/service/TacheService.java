package com.NKM.gestion_cours.service;

import com.NKM.gestion_cours.dto.TacheDto;

import java.util.List;

public interface TacheService {

    //fonction de POST
    TacheDto createTache(TacheDto tacheDto, String deviceId);

    //fonction de GET(Id)
    TacheDto getTacheById(long tid, String deviceId);

    //fonction de GETALL
    List<TacheDto> getAllTaches(String deviceId);

    //fonction de DELETE
    void deleteTache(long tid, String deviceId);

    //fonction de GET(matiere_Id)
    List<TacheDto> getTachesByMatieresId(Long matiereId, String deviceId);
}
