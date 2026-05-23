package com.sells_teams_management.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sells_teams_management.dto.LoginRequest;
import com.sells_teams_management.dto.RegisterRequest;
import com.sells_teams_management.entity.User;
import com.sells_teams_management.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String register(RegisterRequest request) {

        User user = new User();

        user.setName(request.getName());

        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setRole("USER");

        user.setStatus("ACTIVE");

        user.setParentId(request.getParentId());

        user.setPosition(request.getPosition());

        userRepository.save(user);

        return "User Registered";
    }

    public String login(LoginRequest request) {

        Optional<User> user =
                userRepository.findByEmail(
                        request.getEmail()
                );

        if(user.isPresent()
                &&
                passwordEncoder.matches(
                        request.getPassword(),
                        user.get().getPassword()
                )) {

            return "Login Successful";
        }

        return "Invalid Credentials";
    }
}