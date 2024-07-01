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
    public ResponseEntity<String> registerUser(@Validated @RequestBody User userRequest){
        System.out.println("Registrando usuario " + userRequest);
        try {
            user = userService.createUser(userRequest);
            return new ResponseEntity<>("Registro exitoso!", HttpStatus.CREATED);

        } catch (RuntimeException e) {
            return new ResponseEntity<>("Error al registrar el usuario", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@Validated @RequestBody User userToLogin){
        try {
            String validationResponse = userService.validateUser(userToLogin);
            return new ResponseEntity<>(validationResponse, HttpStatus.CREATED);

        } catch (RuntimeException e) {
            return new ResponseEntity<>("Error al iniciar sesión", HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping("/actividades")
    public ResponseEntity<String> registerActivity(@Validated @RequestBody Activities activityRequest){
        activityResponse = activitiesService.registerActivity(activityRequest);
        return new ResponseEntity<>("Actividad registradas exitosamente.", HttpStatus.CREATED);
    }

    @GetMapping("/actividades/{email}")
    public ResponseEntity<List<Activities>> register(@Validated @PathVariable String email){
        List<Activities> activitiesList = activitiesService.getAllActivities(email);
        return new ResponseEntity<>(activitiesList, HttpStatus.OK);
    }

}
