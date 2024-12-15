import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CustomerRegistrationRequest } from 'src/app/models/customer-registration-request';
import { CustomerUpdateRequest } from 'src/app/models/customer-update-request';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit{

  ngOnInit(): void {
    if (this.operation === 'update') {
      this.title = 'Update Customer';
  }
}

  @Input()
  customer: CustomerRegistrationRequest = {};

  @Input()
  operation: 'create' | 'update' = 'create';
  title = 'New Customer';

  @Output()
  submit: EventEmitter<CustomerRegistrationRequest> = new EventEmitter<CustomerRegistrationRequest>();

  get isCustomerValid(): boolean {
    return this.hasLength(this.customer.name) &&
      this.hasLength(this.customer.email) &&
      this.hasLength(this.customer.password) &&
      this.hasLength(this.customer.gender) &&
      this.customer.age !== undefined && this.customer.age > 0
  }

  private hasLength(input: string | undefined): boolean {
    return input !== null && input !== undefined && input.length > 0
  }

  onSubmit() {
    this.submit.emit(this.customer);
  }
}