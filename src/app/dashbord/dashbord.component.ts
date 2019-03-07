import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  customersCount: number = 0;
  itemsCount: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/api/v1/customers').subscribe(customers => {
      this.customersCount = customers.length;
    });
    this.http.get<any>('http://localhost:8080/api/v1/items').subscribe(items => {
      this.itemsCount = items.length;
    });
  }

}
