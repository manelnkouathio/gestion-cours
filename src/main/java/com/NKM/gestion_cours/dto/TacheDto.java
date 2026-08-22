package com.NKM.gestion_cours.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TacheDto {

    //Différentes entités
    private Long tid;
    private String name;
    private String priority;
    private Long matiereId;

}
