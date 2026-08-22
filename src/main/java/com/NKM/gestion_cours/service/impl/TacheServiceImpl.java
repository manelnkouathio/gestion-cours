package com.NKM.gestion_cours.service.impl;

import com.NKM.gestion_cours.dto.TacheDto;
import com.NKM.gestion_cours.entity.Matiere;
import com.NKM.gestion_cours.entity.Tache;
import com.NKM.gestion_cours.exception.ResourceNotFoundException;
import com.NKM.gestion_cours.mapper.TacheMapper;
import com.NKM.gestion_cours.repository.MatiereRepository;
import com.NKM.gestion_cours.repository.TacheRepository;
import com.NKM.gestion_cours.service.TacheService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TacheServiceImpl implements TacheService {

    private TacheRepository tacheRepository;
    private MatiereRepository matiereRepository;

    //fonction de POST
    @Override
    public TacheDto createTache(TacheDto tacheDto, String deviceId) {
        Tache tache = TacheMapper.mapToTache(tacheDto);
        tache.setDeviceId(deviceId);

        if (tacheDto.getMatiereId() != null) {
            Matiere matiere = matiereRepository.findById(tacheDto.getMatiereId())
                    .orElseThrow(() -> new ResourceNotFoundException("Matière non trouvée avec l'ID : " + tacheDto.getMatiereId()));
            tache.setMatiere(matiere);
        }

        Tache savedTache = tacheRepository.save(tache);
        return TacheMapper.mapToTacheDto(savedTache);
    }

    //fonction de GET(Id) — vérifie que la tâche appartient bien à cet appareil
    @Override
    public TacheDto getTacheById(long tacheId, String deviceId) {

        Tache tache = tacheRepository.findById(tacheId)
                .filter(t -> t.getDeviceId() != null && t.getDeviceId().equals(deviceId))
                .orElseThrow(() ->
                        new ResourceNotFoundException("Tache not found with id: " + tacheId));

        return TacheMapper.mapToTacheDto(tache);
    }

    //fonction de GETALL — ne retourne que les taches de cet appareil
    @Override
    public List<TacheDto> getAllTaches(String deviceId) {
        List<Tache> taches = tacheRepository.findByDeviceId(deviceId);
        return taches.stream().map((tache) -> TacheMapper.mapToTacheDto(tache))
                .collect(Collectors.toList());
    }

    //fonction de DELETE — vérifie l'appartenance avant suppression
    @Override
    public void deleteTache(long tacheId, String deviceId) {

        Tache tache = tacheRepository.findById(tacheId)
                .filter(t -> t.getDeviceId() != null && t.getDeviceId().equals(deviceId))
                .orElseThrow(
                () -> new ResourceNotFoundException("Tache not found with id: " + tacheId)
        );

        tacheRepository.deleteById(tacheId);

    }

    //fonction de GET(matiere_Id) — filtre aussi par appareil
    @Override
    public List<TacheDto> getTachesByMatieresId(Long matieresId, String deviceId) {
        List<Tache> taches = tacheRepository.findByMatiereMidAndDeviceId(matieresId, deviceId);
        return taches.stream()
                .map(TacheMapper::mapToTacheDto)
                .collect(Collectors.toList());
    }
}
