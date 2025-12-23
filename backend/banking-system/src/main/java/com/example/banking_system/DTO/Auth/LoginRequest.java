package com.example.banking_system.DTO.Auth;

import lombok.Data;

@Data
public class LoginRequest {
    private String phone;
    private String password;
}
