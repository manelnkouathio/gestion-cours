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
    public ResponseEntity<MatiereDto> createMatiere(@RequestBody MatiereDto matiereDto) {
        MatiereDto savedMatiere = matiereService.createMatiere(matiereDto);
        return new ResponseEntity<>(savedMatiere, HttpStatus.CREATED);
    }

    // Build Get Matiere REST API
    @GetMapping("{mid}")
    public ResponseEntity<MatiereDto> getMatiereById(@PathVariable("mid") Long matiereId) {
        MatiereDto matiereDto = matiereService.getMatiereById(matiereId);
        return ResponseEntity.ok(matiereDto);
    }

    //Build Get All Matiere REST API
    @GetMapping
    public ResponseEntity<List<MatiereDto>> getAllMatieres() {
        List<MatiereDto> matieres = matiereService.getAllMatieres();
        return ResponseEntity.ok(matieres);
    }

    //Build Update Matiere REST API
    @PutMapping("{mid}")
    public ResponseEntity<MatiereDto>  updateMatiere(@PathVariable("mid") Long matiereId,
                                                     @RequestBody MatiereDto updateMatiere) {
        MatiereDto matiereDto = matiereService.updateMatiere(matiereId, updateMatiere);
        return ResponseEntity.ok(matiereDto);
    }

    //Build Delete Matiere REST API
    @DeleteMapping("{mid}")
    public ResponseEntity<String> deleteMatiere(@PathVariable("mid") Long matiereId) {
        matiereService.deleteMatiere(matiereId);
        return ResponseEntity.ok("Matiere deleted");
    }

    @GetMapping("classes/{classesId}")
    public ResponseEntity<List<MatiereDto>> getMatieresByClassesId(@PathVariable("classesId") Long classesId) {
        List<MatiereDto> matieres = matiereService.getMatieresByClassesId(classesId);
        return ResponseEntity.ok(matieres);
    }

}
