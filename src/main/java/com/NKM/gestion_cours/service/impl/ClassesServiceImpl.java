package com.NKM.gestion_cours.service.impl;

import com.NKM.gestion_cours.dto.ClassesDto;
import com.NKM.gestion_cours.entity.Classes;
import com.NKM.gestion_cours.exception.ResourceNotFoundException;
import com.NKM.gestion_cours.mapper.ClassesMapper;
import com.NKM.gestion_cours.repository.ClassesRepository;
import com.NKM.gestion_cours.service.ClassesService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.file.ReadOnlyFileSystemException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ClassesServiceImpl implements ClassesService {

    private ClassesRepository classesRepository;

    //fonction de POST
    @Override
    public ClassesDto createClasses(ClassesDto classesDto) {

        Classes classes = ClassesMapper.mapToClasses(classesDto);
        Classes savedClasses = classesRepository.save(classes);
        return ClassesMapper.mapToClassesDto(savedClasses);

    }

    //fonction de GET(Id)
    @Override
    public ClassesDto getClassesById(Long classesId) {
       Classes classes =  classesRepository.findById(classesId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(" Classes is not exist with given id :" + classesId));

        return ClassesMapper.mapToClassesDto(classes);
    }

    //fonction de GETALL
    @Override
    public List<ClassesDto> getAllClasses() {
        List<Classes> classes1 = classesRepository.findAll();
        return classes1.stream().map((classes) -> ClassesMapper.mapToClassesDto(classes))
                .collect(Collectors.toList());
    }

    //fonction de PUT
    @Override
    public ClassesDto updateClasses(Long classesId, ClassesDto updatedClasses) {


       Classes classes = classesRepository.findById(classesId).orElseThrow(
                () -> new ResourceNotFoundException(" Classes is not exist with given id :" + classesId)
        );

       classes.setName(updatedClasses.getName());
       classes.setDate(updatedClasses.getDate());

       Classes updateClassesObj = classesRepository.save(classes);

       return ClassesMapper.mapToClassesDto(updateClassesObj);
    }

    //fonction de DELETE
    @Override
    public void deleteClasses(Long classesId) {

        Classes classes = classesRepository.findById(classesId).orElseThrow(
                () -> new ResourceNotFoundException(" Classes is not exist with given id :" + classesId)
        );

        classesRepository.deleteById(classesId);

    }
}
