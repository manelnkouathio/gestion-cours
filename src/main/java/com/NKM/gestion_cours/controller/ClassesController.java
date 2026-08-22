package com.NKM.gestion_cours.controller;

import com.NKM.gestion_cours.dto.ClassesDto;
import com.NKM.gestion_cours.service.ClassesService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/classes")
public class ClassesController {

    private ClassesService classesService;

    // Build Add Classes REST API
    @PostMapping
    public ResponseEntity<ClassesDto> createClasses(@RequestBody ClassesDto classesDto) {
        ClassesDto savedClasses = classesService.createClasses(classesDto);
        return new  ResponseEntity<>(savedClasses, HttpStatus.CREATED);
    }

    // Build Get Classes REST API

    @GetMapping("{id}")
    public ResponseEntity<ClassesDto> getClassesById(@PathVariable("id")  Long classesId) {
        ClassesDto classesDto = classesService.getClassesById(classesId);
        return ResponseEntity.ok(classesDto);
    }

    // Build Get All Classes REST API

    @GetMapping
    public ResponseEntity<List<ClassesDto>> getAllClasses(){
        List<ClassesDto> classes1 = classesService.getAllClasses();
        return ResponseEntity.ok(classes1);
    }

    // Build Update Classes REST API

    @PutMapping("{id}")
    public ResponseEntity<ClassesDto> updateClasses(@PathVariable("id")  Long classesId,
                                                    @RequestBody ClassesDto updatedClasses) {
        ClassesDto classesDto = classesService.updateClasses(classesId, updatedClasses);
        return ResponseEntity.ok(classesDto);
    }

    // Build Delete Classes REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteClasses(@PathVariable("id")  Long classesId) {
        classesService.deleteClasses(classesId);
        return ResponseEntity.ok("Classes deleted Successfully");
    }
}
