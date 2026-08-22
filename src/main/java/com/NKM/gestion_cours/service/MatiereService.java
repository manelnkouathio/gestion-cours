package com.NKM.gestion_cours.service;

import com.NKM.gestion_cours.dto.MatiereDto;

import java.util.List;

public interface MatiereService {

    //fonction de POST
    MatiereDto createMatiere(MatiereDto matiereDto);

    //fonction de GET(Id)
    MatiereDto getMatiereById(Long matiereId);

    //fonction de GETALL
    List<MatiereDto> getAllMatieres();

    //fonction de PUT
    MatiereDto updateMatiere(Long matiereId, MatiereDto updateMatiere);

    //fonction de DELETE
    void deleteMatiere(Long matiereId);

    //fonction de GET(classe_Id)
    List<MatiereDto> getMatieresByClassesId(Long classesId);
}
