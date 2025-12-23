package com.example.banking_system.Service;


import com.example.banking_system.Config.JwtTokenProvider;
import com.example.banking_system.DTO.Auth.LoginRequest;
import com.example.banking_system.DTO.Auth.OtpVerifyRequest;
import com.example.banking_system.Entity.OtpVerification;
import com.example.banking_system.Entity.User;
import com.example.banking_system.Enum.UserStatus;
import com.example.banking_system.Repository.OtpRepository;
import com.example.banking_system.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private OtpService otpService;

    @Autowired
    private JwtTokenProvider jwtProvider;

    @Autowired
    private OtpRepository  otpRepository;

    @Override
    public void login(LoginRequest request) {
        User user = userRepository.findByPhone(request.getPhone());
        if(user == null){
            throw new RuntimeException("Phone not found");
        }

        if(!passwordEncoder.matches(request.getPassword(),user.getPassword())){
            throw new RuntimeException("Password is incorrect");
        }

        if(user.getStatus()!= UserStatus.ACTIVE){
            throw new RuntimeException("This account is locked");
        }

        otpService.sendOtp(user.getPhone());
    }

    @Override
    public String verifyOtp(OtpVerifyRequest request){
        OtpVerification otp=otpRepository.findTopByPhoneOrderByExpiredAtDesc(request.getPhone());
        if(otp==null){
            throw new RuntimeException("Otp not found");
        }

        if(otp.isVerified()){
            throw new RuntimeException("OTP is used to");
        }

        if(otp.getExpiredAt().isBefore(LocalDateTime.now())){
            throw new RuntimeException("OTP has been expired");
        }

        if(!otp.getOtp_code().equals(request.getOtp())){
            throw new RuntimeException("OTP code is incorrect");
        }

        otp.setVerified(true);
        otpRepository.save(otp);

        User user=userRepository.findByPhone(request.getPhone());

        return jwtProvider.generateToken(user);
    }
}
