package com.example.banking_system.Service;

import com.example.banking_system.DTO.Auth.LoginRequest;
import com.example.banking_system.DTO.Auth.OtpVerifyRequest;

public interface AuthService {
    void login(LoginRequest request);

    String verifyOtp(OtpVerifyRequest request);
}
