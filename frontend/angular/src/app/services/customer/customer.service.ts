import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDTO } from 'src/app/models/customer-dto';
import { environment } from 'src/environments/environment';
import { CustomerRegistrationRequest } from 'src/app/models/customer-registration-request';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly customerUrl = `${environment.api.baseUrl}/${environment.api.customerUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<CustomerDTO[]>{
    return this.http.get<CustomerDTO[]>(this.customerUrl);
  }

  registerCustomer(customer: CustomerRegistrationRequest): Observable<void> {
    return this.http.post<void>(this.customerUrl, customer);  
  }
}
