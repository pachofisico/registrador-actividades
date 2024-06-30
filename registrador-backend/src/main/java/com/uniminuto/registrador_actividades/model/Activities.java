package com.uniminuto.registrador_actividades.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Activities<A, L extends Number> {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "activity-name")
    private String activityName;

    @Column(name = "email")
    private String email;

    private String time;

}
