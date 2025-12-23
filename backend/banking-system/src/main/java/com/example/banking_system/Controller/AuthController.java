package com.example.banking_system.Controller;


import com.example.banking_system.DTO.Auth.LoginRequest;
import com.example.banking_system.DTO.Auth.OtpVerifyRequest;
import com.example.banking_system.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        authService.login(request);
        return ResponseEntity.ok("OTP was sent");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody OtpVerifyRequest request){
        String token=authService.verifyOtp(request);
        return ResponseEntity.ok(Map.of("token",token));
    }
}
