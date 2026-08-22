package com.NKM.gestion_cours.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MatiereDto {

    //Différentes entités
    private Long mid;
    private String name;
    private Integer credit;
    private Long classesId;
}