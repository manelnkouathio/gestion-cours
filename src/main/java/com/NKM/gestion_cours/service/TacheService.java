package com.NKM.gestion_cours.service;

import com.NKM.gestion_cours.dto.TacheDto;

import java.util.List;

public interface TacheService {

    //fonction de POST
    TacheDto createTache(TacheDto tacheDto);

    //fonction de GET(Id)
    TacheDto getTacheById(long tid);

    //fonction de GETALL
    List<TacheDto> getAllTaches();

    //fonction de DELETE
    void deleteTache(long tid);

    //fonction de GET(matiere_Id)
    List<TacheDto> getTachesByMatieresId(Long matiereId);
}
