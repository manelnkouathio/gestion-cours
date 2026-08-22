package com.NKM.gestion_cours.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "taches")
public class Tache {

    //Différentes entités
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long tid;

    @Column(name = "name")
    public String name;

    @Column(name = "priority")
    public String priority;

    //Relation JPA entre classe et matiere
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "matieres_id")
    private Matiere matiere;

    //creation des getters pour le mappe
    public Tache(Long tid, String name, String priority) {
        this.tid = tid;
        this.name = name;
        this.priority = priority;
    }
}
