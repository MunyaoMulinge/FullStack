import { Component, OnInit } from '@angular/core';
import { CustomerDTO } from 'src/app/models/customer-dto';
import { CustomerRegistrationRequest } from 'src/app/models/customer-registration-request';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{

  display = false;
  operation : 'create' | 'update' = 'create';
  customers: Array<CustomerDTO> = [];
  customer: CustomerRegistrationRequest = {};

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.findAllCustomers();
  }

  private findAllCustomers() {
    this.customerService.findAll()
    .subscribe({
      next: (data) => {
        this.customers = data; 
        console.log(data);
      }
    });
  }

  save(customer: CustomerRegistrationRequest) {
      if (customer) {
        this.customerService.registerCustomer(customer)
        .subscribe({
          next: () => {
            this.findAllCustomers();
            this.display = false;
            this.customer = {};
            this.messageService.add({ severity: 'success', summary: 'Customer saved', detail: `Customer ${customer.name} saved` });
          }
        });
      }
  }

  deleteCustomer(customer: CustomerDTO) {
    this.confirmationService.confirm({
      header: 'Delete Customer',
      message: `Are you sure that you want to delete ${customer.name}? You cannot undo this action`,
      accept: () => {
        this.customerService.deleteCustomer(customer.id)
        .subscribe({
          next: () => {
            this.findAllCustomers();
            this.messageService.add(
              { 
                severity: 'success', 
                summary: 'Customer deleted', 
                detail: `Customer ${customer.name} deleted` });
          }
        });
      }
    });
  }

  updateCustomer(customerDTO: CustomerDTO) {
   this.display = true;
   this.customer = customerDTO;
   this.operation = 'update'
  }

  createCustomer() {
    this.display = true;
    this.customer = {};
    this.operation = 'create';
  }
}
