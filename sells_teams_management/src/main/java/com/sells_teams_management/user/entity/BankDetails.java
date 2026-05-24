package com.sells_teams_management.user.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="bank_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BankDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String bankName;

    private String accountNumber;

    private String ifscCode;

    private String branchName;

    private String accountHolderName;
}
