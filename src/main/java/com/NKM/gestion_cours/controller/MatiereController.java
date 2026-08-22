package com.NKM.gestion_cours.controller;

import com.NKM.gestion_cours.dto.MatiereDto;
import com.NKM.gestion_cours.service.MatiereService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/matieres")
public class MatiereController {

    private MatiereService matiereService;

    public MatiereController(MatiereService matiereService) {
        this.matiereService = matiereService;
    }

    // Build Add Matiere REST API

    @PostMapping
    public ResponseEntity<MatiereDto> createMatiere(@RequestBody MatiereDto matiereDto,
                                                      @RequestHeader("X-Device-Id") String deviceId) {
        MatiereDto savedMatiere = matiereService.createMatiere(matiereDto, deviceId);
        return new ResponseEntity<>(savedMatiere, HttpStatus.CREATED);
    }

    // Build Get Matiere REST API
    @GetMapping("{mid}")
    public ResponseEntity<MatiereDto> getMatiereById(@PathVariable("mid") Long matiereId,
                                                       @RequestHeader("X-Device-Id") String deviceId) {
        MatiereDto matiereDto = matiereService.getMatiereById(matiereId, deviceId);
        return ResponseEntity.ok(matiereDto);
    }

    //Build Get All Matiere REST API
    @GetMapping
    public ResponseEntity<List<MatiereDto>> getAllMatieres(@RequestHeader("X-Device-Id") String deviceId) {
        List<MatiereDto> matieres = matiereService.getAllMatieres(deviceId);
        return ResponseEntity.ok(matieres);
    }

    //Build Update Matiere REST API
    @PutMapping("{mid}")
    public ResponseEntity<MatiereDto>  updateMatiere(@PathVariable("mid") Long matiereId,
                                                     @RequestBody MatiereDto updateMatiere,
                                                     @RequestHeader("X-Device-Id") String deviceId) {
        MatiereDto matiereDto = matiereService.updateMatiere(matiereId, updateMatiere, deviceId);
        return ResponseEntity.ok(matiereDto);
    }

    //Build Delete Matiere REST API
    @DeleteMapping("{mid}")
    public ResponseEntity<String> deleteMatiere(@PathVariable("mid") Long matiereId,
                                                  @RequestHeader("X-Device-Id") String deviceId) {
        matiereService.deleteMatiere(matiereId, deviceId);
        return ResponseEntity.ok("Matiere deleted");
    }

    @GetMapping("classes/{classesId}")
    public ResponseEntity<List<MatiereDto>> getMatieresByClassesId(@PathVariable("classesId") Long classesId,
                                                                      @RequestHeader("X-Device-Id") String deviceId) {
        List<MatiereDto> matieres = matiereService.getMatieresByClassesId(classesId, deviceId);
        return ResponseEntity.ok(matieres);
    }

}
