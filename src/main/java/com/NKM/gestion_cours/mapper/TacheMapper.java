package com.NKM.gestion_cours.mapper;

import com.NKM.gestion_cours.dto.TacheDto;
import com.NKM.gestion_cours.entity.Tache;

public class TacheMapper {

    public static TacheDto mapToTacheDto(Tache tache) {

        Long tacheId = (tache.getMatiere() != null) ? tache.getMatiere().getMid() : null;

        return new TacheDto(

                tache.getTid(),
                tache.getName(),
                tache.getPriority(),
                tacheId
        );
    }

    public static Tache mapToTache(TacheDto tacheDto) {
        return new Tache(
            tacheDto.getTid(),
            tacheDto.getName(),
            tacheDto.getPriority()
        );
    }
}
