package com.NKM.gestion_cours.service;


import com.NKM.gestion_cours.dto.ClassesDto;

import java.util.List;

public interface ClassesService {

    //fonction de POST
    ClassesDto createClasses(ClassesDto classesDto);

    //fonction de GET(Id)
    ClassesDto getClassesById(Long classesId);

    //fonction de GETALL
    List<ClassesDto> getAllClasses();

    //fonction de PUT
    ClassesDto updateClasses(Long classesId, ClassesDto updatedClasses);

    //fonction de DELETE
    void deleteClasses(Long classesId);
}
