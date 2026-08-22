package com.NKM.gestion_cours.service.impl;

import com.NKM.gestion_cours.dto.MatiereDto;
import com.NKM.gestion_cours.entity.Classes;
import com.NKM.gestion_cours.entity.Matiere;
import com.NKM.gestion_cours.exception.ResourceNotFoundException;
import com.NKM.gestion_cours.mapper.MatiereMapper;
import com.NKM.gestion_cours.repository.ClassesRepository;
import com.NKM.gestion_cours.repository.MatiereRepository;
import com.NKM.gestion_cours.service.MatiereService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MatiereServiceImpl implements MatiereService {

    private MatiereRepository matiereRepository;
    private ClassesRepository classesRepository;

    //fonction de POST
    @Override
    public MatiereDto createMatiere(MatiereDto matiereDto, String deviceId) {

    Matiere matiere = MatiereMapper.mapToMatiere(matiereDto);
        matiere.setDeviceId(deviceId);
        if (matiereDto.getClassesId() != null) {
            Classes classes = classesRepository.findById(matiereDto.getClassesId())
                    .orElseThrow(() -> new ResourceNotFoundException("Classes does not exist with id: " + matiereDto.getClassesId()));
            matiere.setClasses(classes); // Utilise setClasse(classes) si le setter dans Matiere s'appelle setClasse
        }

    Matiere savedMatiere = matiereRepository.save(matiere);
    return MatiereMapper.mapToMatiereDto(savedMatiere);

    }

    //fonction de GET(Id) — vérifie que la matiere appartient bien à cet appareil
    @Override
    public MatiereDto getMatiereById(Long matiereId, String deviceId) {
        Matiere matiere = matiereRepository.findById(matiereId)
                .filter(m -> m.getDeviceId() != null && m.getDeviceId().equals(deviceId))
                .orElseThrow(() -> new ResourceNotFoundException("Matiere is not exist with given id" + matiereId));
        return MatiereMapper.mapToMatiereDto(matiere);
    }

    //fonction de GETALL — ne retourne que les matieres de cet appareil
    @Override
    public List<MatiereDto> getAllMatieres(String deviceId) {
        List<Matiere> matieres = matiereRepository.findByDeviceId(deviceId);
        return matieres.stream().map((matiere) -> MatiereMapper.mapToMatiereDto(matiere))
                .collect(Collectors.toList());
    }

    //fonction de PUT — vérifie l'appartenance avant modification
    @Override
    public MatiereDto updateMatiere(Long matiereId, MatiereDto updateMatiere, String deviceId) {

        Matiere matiere = matiereRepository.findById(matiereId)
                .filter(m -> m.getDeviceId() != null && m.getDeviceId().equals(deviceId))
                .orElseThrow(
                () -> new ResourceNotFoundException("Matiere is not exist with id" + matiereId)
        );
        matiere.setName(updateMatiere.getName());
        matiere.setCredit(updateMatiere.getCredit());

        Matiere updateMatiereObj = matiereRepository.save(matiere);

        return MatiereMapper.mapToMatiereDto(updateMatiereObj);
    }

    //fonction de DELET — vérifie l'appartenance avant suppression
    @Override
    public void deleteMatiere(Long matiereId, String deviceId) {

        Matiere matiere = matiereRepository.findById(matiereId)
                .filter(m -> m.getDeviceId() != null && m.getDeviceId().equals(deviceId))
                .orElseThrow(
                () -> new ResourceNotFoundException("Matiere is not exist with id" + matiereId)
        );

        matiereRepository.deleteById(matiereId);
    }

    //fonction de GET(classe_Id) — filtre aussi par appareil
    @Override
    public List<MatiereDto> getMatieresByClassesId(Long classesId, String deviceId) {
        List<Matiere> matieres = matiereRepository.findByClassesIdAndDeviceId(classesId, deviceId);
        return matieres.stream()
                .map(MatiereMapper::mapToMatiereDto)
                .collect(Collectors.toList());
    }

}
