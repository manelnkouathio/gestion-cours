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
    public ClassesDto createClasses(ClassesDto classesDto, String deviceId) {

        Classes classes = ClassesMapper.mapToClasses(classesDto);
        classes.setDeviceId(deviceId);
        Classes savedClasses = classesRepository.save(classes);
        return ClassesMapper.mapToClassesDto(savedClasses);

    }

    //fonction de GET(Id) — vérifie que la classe appartient bien à cet appareil
    @Override
    public ClassesDto getClassesById(Long classesId, String deviceId) {
       Classes classes =  classesRepository.findById(classesId)
                .filter(c -> c.getDeviceId() != null && c.getDeviceId().equals(deviceId))
                .orElseThrow(() ->
                        new ResourceNotFoundException(" Classes is not exist with given id :" + classesId));

        return ClassesMapper.mapToClassesDto(classes);
    }

    //fonction de GETALL — ne retourne que les classes créées par cet appareil
    @Override
    public List<ClassesDto> getAllClasses(String deviceId) {
        List<Classes> classes1 = classesRepository.findByDeviceId(deviceId);
        return classes1.stream().map((classes) -> ClassesMapper.mapToClassesDto(classes))
                .collect(Collectors.toList());
    }

    //fonction de PUT — vérifie l'appartenance avant modification
    @Override
    public ClassesDto updateClasses(Long classesId, ClassesDto updatedClasses, String deviceId) {


       Classes classes = classesRepository.findById(classesId)
               .filter(c -> c.getDeviceId() != null && c.getDeviceId().equals(deviceId))
               .orElseThrow(
                () -> new ResourceNotFoundException(" Classes is not exist with given id :" + classesId)
        );

       classes.setName(updatedClasses.getName());
       classes.setDate(updatedClasses.getDate());

       Classes updateClassesObj = classesRepository.save(classes);

       return ClassesMapper.mapToClassesDto(updateClassesObj);
    }

    //fonction de DELETE — vérifie l'appartenance avant suppression
    @Override
    public void deleteClasses(Long classesId, String deviceId) {

        Classes classes = classesRepository.findById(classesId)
                .filter(c -> c.getDeviceId() != null && c.getDeviceId().equals(deviceId))
                .orElseThrow(
                () -> new ResourceNotFoundException(" Classes is not exist with given id :" + classesId)
        );

        classesRepository.deleteById(classesId);

    }
}
