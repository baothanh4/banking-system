package com.example.banking_system.DTO.Auth;

import lombok.Data;

@Data
public class OtpVerifyRequest {
    private String phone;
    private String otp;
}
