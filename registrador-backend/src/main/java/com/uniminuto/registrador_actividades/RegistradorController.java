package com.uniminuto.registrador_actividades;

import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registrador")
@Validated
public class RegistradorController {


    @PostMapping("/registrar-usuario")
    public ResponseEntity<String> registerUser(@Validated @RequestBody String dato){
        return new ResponseEntity<>(dato, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@Validated @RequestBody String dato){
        return new ResponseEntity<>(dato, HttpStatus.CREATED);
    }


    @PostMapping("/actividades")
    public ResponseEntity<String> registerActivity(@Validated @RequestBody String dato){
        return new ResponseEntity<>(dato, HttpStatus.CREATED);

    }

    @GetMapping("/actividades/{dato}")
    public ResponseEntity<String> register(@Validated @PathVariable String dato){
        return new ResponseEntity<>("Exitoso: " + dato, HttpStatus.OK);

    }

}
