import { Component, OnInit } from '@angular/core';
import { CompanyRequestService } from '../service/company-request.service';
import { CompanyRequest } from '../models/company-request.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  companyRequests: CompanyRequest[] = [];
  approvedCompanies: CompanyRequest[] = [];

  constructor(private companyRequestService: CompanyRequestService) {}

  ngOnInit(): void {
    this.loadCompanyRequests();
    this.loadApprovedCompanies();
  }

  loadCompanyRequests() {
    this.companyRequestService.getAllRequests().subscribe(requests => {
      this.companyRequests = requests.filter(request => !request.approved);
    });
  }

  loadApprovedCompanies() {
    this.companyRequestService.getApprovedCompaniesByService('dogalgaz').subscribe(companies => {
      this.approvedCompanies = companies;
    });
  }

  approveRequest(requestId: number) {
    this.companyRequestService.approveRequest(requestId).subscribe(() => {
      // Remove the approved request from the request list
      this.companyRequests = this.companyRequests.filter(request => request.id !== requestId);
      // Reload the approved companies list
      this.loadApprovedCompanies();
    });
  }

  rejectRequest(requestId: number) {
    this.companyRequestService.rejectRequest(requestId).subscribe(() => {
      this.loadCompanyRequests();
    });
  }

  removeCompany(companyId: number) {
    this.companyRequestService.removeCompany(companyId).subscribe(() => {
      this.loadApprovedCompanies();
    });
  }
}
