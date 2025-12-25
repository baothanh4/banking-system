package com.example.banking_system.DTO.Auth;


import lombok.Data;

@Data
public class RegisterInitRequest {
    private String phone;
    private String email;
}
