package com.uniminuto.registrador_actividades.application;


import com.uniminuto.registrador_actividades.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
