import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyRequestService } from '.././service/company-request.service';
import { AuthService } from '.././service/auth.service';
import { CompanyRequest } from '../models/company-request.model';

@Component({
  selector: 'app-franchising',
  templateUrl: './franchising.component.html',
  styleUrls: ['./franchising.component.css']
})
export class FranchisingComponent implements OnInit {
  constructor(private companyRequestService: CompanyRequestService, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const user = this.authService.getCurrentUser(); // Assuming this method returns the logged-in user

    const companyRequest: CompanyRequest = {
      id: 0,
      companyName: form.value.companyName,
      services: form.value.services,
      email: form.value.email,
      phone: form.value.phone,
      location: form.value.location,
      description: form.value.description,
      approved: false,
      user: user // Corrected from userId to user
    };

    this.companyRequestService.submitRequest(companyRequest, user.id).subscribe(response => {
      console.log('Company request submitted successfully', response);
    }, error => {
      console.error('Error submitting company request', error);
    });

    form.reset();
  }
}
