package com.NKM.gestion_cours.mapper;

import com.NKM.gestion_cours.dto.MatiereDto;
import com.NKM.gestion_cours.entity.Matiere;

public class MatiereMapper {

    public static MatiereDto mapToMatiereDto(Matiere matiere) {
        if (matiere == null) {
            return null;
        }

        // On vérifie si la relation avec Classes existe avant d'extraire l'ID
        Long classesId = (matiere.getClasses() != null) ? matiere.getClasses().getId() : null;

        return new MatiereDto(
                matiere.getMid(),
                matiere.getName(),
                matiere.getCredit(),
                classesId,
                matiere.getDeviceId()
        );
    }

    public static Matiere mapToMatiere(MatiereDto matiereDto) {
        if (matiereDto == null) {
            return null;
        }

        return new Matiere(
                matiereDto.getMid(),
                matiereDto.getName(),
                matiereDto.getCredit(),
                matiereDto.getDeviceId()
        );
    }
}