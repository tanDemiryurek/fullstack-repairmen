package com.example.demo.service;

import com.example.demo.model.CompanyRequest;
import com.example.demo.model.User;
import com.example.demo.repository.CompanyRequestRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyRequestService {

    @Autowired
    private CompanyRequestRepository companyRequestRepository;

    @Autowired
    private UserRepository userRepository;

    public List<CompanyRequest> getApprovedCompaniesByService(String service) {
        return companyRequestRepository.findByServicesAndApproved(service, true);
    }

    public CompanyRequest submitRequest(CompanyRequest request, Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        request.setUser(user);
        return companyRequestRepository.save(request);
    }

    public List<CompanyRequest> getAllRequests() {
        return companyRequestRepository.findAll();
    }

    public CompanyRequest approveRequest(Long requestId) {
        CompanyRequest request = companyRequestRepository.findById(requestId).orElseThrow(() -> new RuntimeException("Request not found"));
        request.setApproved(true);
        User user = request.getUser();
        user.setRole("COMPANY");
        userRepository.save(user); // Save the updated user with the new role
        return companyRequestRepository.save(request);
    }

    public void rejectRequest(Long requestId) {
        companyRequestRepository.deleteById(requestId);
    }

    public void removeCompany(Long companyId) {
        CompanyRequest company = companyRequestRepository.findById(companyId).orElseThrow(() -> new RuntimeException("Company not found"));
        User user = company.getUser();
        user.setRole("USER");
        userRepository.save(user); // Save the updated user with the new role
        companyRequestRepository.deleteById(companyId); // Remove the company request
    }
}
