package com.uniminuto.registrador_actividades.application;

import com.uniminuto.registrador_actividades.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService{
    List<User> getUsers();
    User createUser(User userName);


}
