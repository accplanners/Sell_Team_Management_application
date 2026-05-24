package com.sells_teams_management.user.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="personal_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PersonalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //logged-in user id
    private Long userId;

    private String firstName;

    private String middleName;

    private String lastName;

    @Column(length = 500)
    private String address;

    @Column(unique = true)
    private String mobile;

    @Column(unique = true)
    private String email;

    private LocalDate dob;

    private String pancard;

    private String nomineeName;

    private String relation;
}