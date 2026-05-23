package com.sells_teams_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sells_teams_management.dto.LoginRequest;
import com.sells_teams_management.dto.RegisterRequest;
import com.sells_teams_management.service.AuthService;

@RestController

@RequestMapping("/auth")

public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")

    public String register(
            @RequestBody RegisterRequest request
    ) {

        return authService.register(request);
    }

    @PostMapping("/login")

    public String login(
            @RequestBody LoginRequest request
    ) {

        return authService.login(request);
    }
}