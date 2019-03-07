import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  customerCount: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/api/v1/customers').subscribe(value => {
      this.customerCount = value.length;
    });
  }

}
