package com.NKM.gestion_cours.service;

import com.NKM.gestion_cours.dto.MatiereDto;

import java.util.List;

public interface MatiereService {

    //fonction de POST
    MatiereDto createMatiere(MatiereDto matiereDto, String deviceId);

    //fonction de GET(Id)
    MatiereDto getMatiereById(Long matiereId, String deviceId);

    //fonction de GETALL
    List<MatiereDto> getAllMatieres(String deviceId);

    //fonction de PUT
    MatiereDto updateMatiere(Long matiereId, MatiereDto updateMatiere, String deviceId);

    //fonction de DELETE
    void deleteMatiere(Long matiereId, String deviceId);

    //fonction de GET(classe_Id)
    List<MatiereDto> getMatieresByClassesId(Long classesId, String deviceId);
}
