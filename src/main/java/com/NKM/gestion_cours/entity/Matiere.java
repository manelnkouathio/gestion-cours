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
@Table(name = "matieres")
public class Matiere {

    //Différentes entités
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long mid;

    @Column(name = "name")
    public String name;

    @Column(name ="credit")
    public Integer credit;

    // Identifiant de l'appareil qui a créé cette matière
    @Column(name = "device_id")
    private String deviceId;

    //Relation JPA entre tache et matiere
    @OneToMany(mappedBy = "matiere", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Tache> taches;

    //Relation JPA entre classe et matiere
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "classes_id")
    private Classes classes;

    //creation des getters pour le mappe
    public Matiere(Long mid, String name, Integer credit, String deviceId) {
        this.mid = mid;
        this.name = name;
        this.credit = credit;
        this.deviceId = deviceId;
    }
}
