package com.example.banking_system.Service;


import com.example.banking_system.Entity.OtpVerification;
import com.example.banking_system.Repository.OtpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OtpService {
    @Autowired
    private OtpRepository otpRepository;

    public void sendOtp(String phone){
        String otp=String.valueOf(new Random().nextInt(900000)+100000);

        OtpVerification entity=new OtpVerification();
        entity.setPhone(phone);
        entity.setOtp_code(otp);
        entity.setExpiredAt(LocalDateTime.now().plusMinutes(3));
        entity.setVerified(false);

        otpRepository.save(entity);
    }

}
