package com.sells_teams_management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")

@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String role;

    private String status;

    private Long parentId;

    private String position;
}