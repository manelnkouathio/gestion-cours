package com.NKM.gestion_cours.mapper;

import com.NKM.gestion_cours.dto.ClassesDto;
import com.NKM.gestion_cours.entity.Classes;

public class ClassesMapper {

    public static ClassesDto mapToClassesDto(Classes classes) {
        return new ClassesDto(
                classes.getId(),
                classes.getName(),
                classes.getDate()
        );
    }

    public static Classes mapToClasses(ClassesDto classesDto) {
        return new Classes(
                classesDto.getId(),
                classesDto.getName(),
                classesDto.getDate()
        );
    }
}
