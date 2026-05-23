package com.sells_teams_management.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private Long parentId;

    private String position;
}