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
    public MatiereDto createMatiere(MatiereDto matiereDto) {

    Matiere matiere = MatiereMapper.mapToMatiere(matiereDto);
        if (matiereDto.getClassesId() != null) {
            Classes classes = classesRepository.findById(matiereDto.getClassesId())
                    .orElseThrow(() -> new ResourceNotFoundException("Classes does not exist with id: " + matiereDto.getClassesId()));
            matiere.setClasses(classes); // Utilise setClasse(classes) si le setter dans Matiere s'appelle setClasse
        }

    Matiere savedMatiere = matiereRepository.save(matiere);
    return MatiereMapper.mapToMatiereDto(savedMatiere);

    }

    //fonction de GET(Id)
    @Override
    public MatiereDto getMatiereById(Long matiereId) {
        Matiere matiere = matiereRepository.findById(matiereId)
                .orElseThrow(() -> new ResourceNotFoundException("Matiere is not exist with given id" + matiereId));
        return MatiereMapper.mapToMatiereDto(matiere);
    }

    //fonction de GETALL
    @Override
    public List<MatiereDto> getAllMatieres() {
        List<Matiere> matieres = matiereRepository.findAll();
        return matieres.stream().map((matiere) -> MatiereMapper.mapToMatiereDto(matiere))
                .collect(Collectors.toList());
    }

    //fonction de PUT
    @Override
    public MatiereDto updateMatiere(Long matiereId, MatiereDto updateMatiere) {

        Matiere matiere = matiereRepository.findById(matiereId).orElseThrow(
                () -> new ResourceNotFoundException("Matiere is not exist with id" + matiereId)
        );
        matiere.setName(updateMatiere.getName());
        matiere.setCredit(updateMatiere.getCredit());

        Matiere updateMatiereObj = matiereRepository.save(matiere);

        return MatiereMapper.mapToMatiereDto(updateMatiereObj);
    }

    //fonction de DELET
    @Override
    public void deleteMatiere(Long matiereId) {

        Matiere matiere = matiereRepository.findById(matiereId).orElseThrow(
                () -> new ResourceNotFoundException("Matiere is not exist with id" + matiereId)
        );

        matiereRepository.deleteById(matiereId);
    }

    //fonction de GET(classe_Id)
    @Override
    public List<MatiereDto> getMatieresByClassesId(Long classesId) {
        List<Matiere> matieres = matiereRepository.findByClassesId(classesId);
        return matieres.stream()
                .map(MatiereMapper::mapToMatiereDto)
                .collect(Collectors.toList());
    }

}
