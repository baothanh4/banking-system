package com.example.banking_system.Service;


import com.example.banking_system.Config.CustomerUserDetails;
import com.example.banking_system.Entity.User;
import com.example.banking_system.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String phone) throws UsernameNotFoundException {
        User user=userRepository.findByPhone(phone);
        if(user==null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new CustomerUserDetails(user);
    }
}
