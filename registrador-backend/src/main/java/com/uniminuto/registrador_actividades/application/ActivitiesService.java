package com.uniminuto.registrador_actividades.application;

import com.uniminuto.registrador_actividades.model.Activities;

import java.util.List;

public interface ActivitiesService{
    List<Activities> getAllActivities(String email);
    Activities registerActivity(Activities activity);
}
