package com.uniminuto.registrador_actividades;

import com.uniminuto.registrador_actividades.application.ActivitiesService;
import com.uniminuto.registrador_actividades.application.UserServiceImpl;
import com.uniminuto.registrador_actividades.model.Activities;
import com.uniminuto.registrador_actividades.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registrador")
@Validated
public class RegistradorController {


    User user;
    Activities activityResponse;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    ActivitiesService activitiesService;

    @PostMapping("/registrar-usuario")
    public ResponseEntity<User> registerUser(@Validated @RequestBody User userRequest){
        System.out.println("Registrando usuario " + userRequest);
        user = userService.createUser(userRequest);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@Validated @RequestBody String dato){
        return new ResponseEntity<>(dato, HttpStatus.CREATED);
    }


    @PostMapping("/actividades")
    public ResponseEntity<Activities> registerActivity(@Validated @RequestBody Activities activityRequest){
        activityResponse = activitiesService.registerActivity(activityRequest);
        return new ResponseEntity<>(activityResponse, HttpStatus.CREATED);

    }

    @GetMapping("/actividades/{email}")
    public ResponseEntity<List<Activities>> register(@Validated @PathVariable String email){
        List<Activities> activitiesList = activitiesService.getAllActivities(email);
        return new ResponseEntity<>(activitiesList, HttpStatus.OK);

    }

}
