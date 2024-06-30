package com.uniminuto.registrador_actividades.application;

import com.uniminuto.registrador_actividades.model.Activities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivitiesRepository extends JpaRepository<Activities, Long> {
    List<Activities> findByEmail(String email);
}
