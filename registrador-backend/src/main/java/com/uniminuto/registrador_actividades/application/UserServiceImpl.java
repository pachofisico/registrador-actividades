package com.uniminuto.registrador_actividades.application;

import com.uniminuto.registrador_actividades.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getUsers(){
        return userRepository.findAll();
    }


    public String validateUser(User user) {
        Optional<User> validatedUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());

        if (validatedUser.isPresent()) {
            return "¡Hola " + validatedUser.get().getUserName() + "! Has ingresado exitosamente.";
        } else {
            return "Nombre de usuario o contraseña incorrectos";
        }
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
