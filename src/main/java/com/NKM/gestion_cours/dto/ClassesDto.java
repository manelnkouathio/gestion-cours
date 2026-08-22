package com.NKM.gestion_cours.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassesDto {

    //Différentes entités
    private Long id;
    private String name;
    private String date;
}
