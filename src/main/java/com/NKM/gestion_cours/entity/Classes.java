package com.NKM.gestion_cours.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "classes")

public class Classes {

    //Différentes entités
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "date")
    private String date;

    // Identifiant de l'appareil qui a créé cette classe, pour isoler les
    // données affichées par appareil sans système de compte utilisateur.
    @Column(name = "device_id")
    private String deviceId;

    //Relation JPA entre classe et matiere
    @OneToMany(mappedBy = "classes", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Matiere> matieres;

    //creation des getters pour le mapper
    public Classes(Long id, String name, String date, String deviceId) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.deviceId = deviceId;
    }
}
