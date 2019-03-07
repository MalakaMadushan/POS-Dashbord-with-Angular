import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../dto/customer';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {

  customers: Customer[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadAllCustomers();
  }
  loadAllCustomers(): void {
    this.http.get<Customer[]>('http://localhost:8080/api/v1/customers').subscribe(customers => {
      this.customers = customers;
    });
  }
  deleteCustomer(customer: Customer): void {
    this.http.delete('http://localhost:8080/api/v1/customers/' + customer.id, {observe: 'response'})
      .subscribe(response => {
        if (response.status === 200) {
          this.loadAllCustomers();
        } else {
          alert('failes to delete the customer');
        }
      });
}

saveCustomer(id: string, name: string, address: string): void {
    this.http.post('http://localhost:8080/api/v1/customers', new Customer(id, name , address), { observe: 'response'})
      .subscribe(response => {
        if (response.status === 201) {
          this.loadAllCustomers();
          alert('Customers Has been Saved successfully');
        } else {
          alert('Failed to Save the Customer');
        }
      });
}

}
