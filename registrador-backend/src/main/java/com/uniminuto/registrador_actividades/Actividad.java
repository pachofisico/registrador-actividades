package com.uniminuto.registrador_actividades;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Actividad {


    @Id
    private Long id;

    @Column(name = "actividad-reazada")
    private String actividadRealizada;

    private String tiempo;

}
