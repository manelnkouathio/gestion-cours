package com.NKM.gestion_cours.controller;

import com.NKM.gestion_cours.dto.TacheDto;
import com.NKM.gestion_cours.service.TacheService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/taches")
public class TacheController {

    private TacheService tacheService;

    // Build Add Tache REST API
    @PostMapping
    public ResponseEntity<TacheDto> createTache(@RequestBody TacheDto tacheDto,
                                                  @RequestHeader("X-Device-Id") String deviceId) {
        TacheDto savedTache = tacheService.createTache(tacheDto, deviceId);
        return new ResponseEntity<>(savedTache, HttpStatus.CREATED);
    }

    // Build Get Tache REST API
    @GetMapping("{tid}")
    public ResponseEntity<TacheDto> getTacheById(@PathVariable("tid") long tacheId,
                                                   @RequestHeader("X-Device-Id") String deviceId) {
        TacheDto tacheDto = tacheService.getTacheById(tacheId, deviceId);
        return ResponseEntity.ok(tacheDto);
    }

    // Build Get All Tache REST API
    @GetMapping
    public ResponseEntity<List<TacheDto>> getAllTaches(@RequestHeader("X-Device-Id") String deviceId) {
        List<TacheDto> taches = tacheService.getAllTaches(deviceId);
        return ResponseEntity.ok(taches);
    }

    //Build Delete Tache REST API
    @DeleteMapping("{tid}")
    public ResponseEntity<String> deleteTache(@PathVariable("tid") long tid,
                                                @RequestHeader("X-Device-Id") String deviceId) {
        tacheService.deleteTache(tid, deviceId);
        return ResponseEntity.ok("Tache deleted");
    }

    @GetMapping("matieres/{matiereId}")
    public ResponseEntity<List<TacheDto>> getTachesByMatieresId(@PathVariable("matiereId") Long matiereId,
                                                                    @RequestHeader("X-Device-Id") String deviceId) {
        List<TacheDto> taches = tacheService.getTachesByMatieresId(matiereId, deviceId);
        return ResponseEntity.ok(taches);
    }
}
