package com.NKM.gestion_cours.service;


import com.NKM.gestion_cours.dto.ClassesDto;

import java.util.List;

public interface ClassesService {

    //fonction de POST
    ClassesDto createClasses(ClassesDto classesDto, String deviceId);

    //fonction de GET(Id)
    ClassesDto getClassesById(Long classesId, String deviceId);

    //fonction de GETALL
    List<ClassesDto> getAllClasses(String deviceId);

    //fonction de PUT
    ClassesDto updateClasses(Long classesId, ClassesDto updatedClasses, String deviceId);

    //fonction de DELETE
    void deleteClasses(Long classesId, String deviceId);
}
