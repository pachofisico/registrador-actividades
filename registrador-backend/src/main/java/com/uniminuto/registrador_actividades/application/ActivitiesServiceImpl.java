package com.uniminuto.registrador_actividades.application;

import com.uniminuto.registrador_actividades.model.Activities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivitiesServiceImpl implements ActivitiesService{


    @Autowired
    ActivitiesRepository activitiesRepository;


    @Override
    public List<Activities> getAllActivities(String email) {
        return activitiesRepository.findByEmail(email);
    }

    @Override
    public Activities registerActivity(Activities activity) {
        return activitiesRepository.save(activity);
    }
}
