package com.example.banking_system.DTO.Auth;


import lombok.Data;

import java.time.LocalDate;

@Data
public class ProfileRequest {
    private String fullName;
    private LocalDate dob;
    private String gender;
    private String address;
    private String nationality;
}
