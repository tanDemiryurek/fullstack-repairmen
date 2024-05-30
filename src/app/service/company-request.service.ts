import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyRequest } from '../models/company-request.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyRequestService {
  private baseUrl = 'http://localhost:8080/api/company-requests';

  constructor(private http: HttpClient) {}

  submitRequest(request: CompanyRequest, userId: number): Observable<CompanyRequest> {
    return this.http.post<CompanyRequest>(`${this.baseUrl}/submit/${userId}`, request);
  }

  getAllRequests(): Observable<CompanyRequest[]> {
    return this.http.get<CompanyRequest[]>(`${this.baseUrl}/all`);
  }

  approveRequest(requestId: number): Observable<CompanyRequest> {
    return this.http.post<CompanyRequest>(`${this.baseUrl}/approve/${requestId}`, {});
  }

  rejectRequest(requestId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/reject/${requestId}`, {});
  }

  getApprovedCompaniesByService(service: string): Observable<CompanyRequest[]> {
    return this.http.get<CompanyRequest[]>(`${this.baseUrl}/approved/${service}`);
  }

  removeCompany(companyId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/remove/${companyId}`, {});
  }
}
