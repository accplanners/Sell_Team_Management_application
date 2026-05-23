package com.sells_teams_management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sells_teams_management.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}