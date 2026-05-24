package com.sells_teams_management.user.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Data
public class PersonalDetailsRequest {

    private Long userId;

    private String firstName;

    private String middleName;

    private String lastName;

    private String address;

    private String mobile;

    private String email;

    private String dob;

    private String pancard;

    private String nomineeName;

    private String relation;

}