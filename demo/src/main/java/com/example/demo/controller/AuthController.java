package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        System.out.println("Login attempt for email: " + user.getEmail());
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            User foundUser = existingUser.get();
            System.out.println("User found: " + foundUser.getEmail());
            if (foundUser.getPassword().equals(user.getPassword())) {
                System.out.println("Password matched for user: " + foundUser.getEmail());
                return ResponseEntity.ok(foundUser);
            } else {
                System.out.println("Password mismatch for user: " + foundUser.getEmail());
            }
        } else {
            System.out.println("No user found with email: " + user.getEmail());
        }
        return ResponseEntity.status(401).body(null);  // Unauthorized
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(null);  // Email already exists
        }
        user.setRole("USER");  // Set default role to USER
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }
}
