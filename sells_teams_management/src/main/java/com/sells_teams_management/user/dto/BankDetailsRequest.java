package com.sells_teams_management.user.dto;

import lombok.Data;

@Data
public class BankDetailsRequest {

    private Long userId;
    private String bankName;
    private String accountNumber;
    private String ifscCode;
    private String branchName;
    private String accountHolderName;
}
