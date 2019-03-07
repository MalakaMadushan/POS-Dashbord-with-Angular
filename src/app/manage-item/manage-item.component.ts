import { Component, OnInit } from '@angular/core';
import {Item} from '../dto/item';
import {HttpClient} from '@angular/common/http';
import {Customer} from "../dto/customer";

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.scss']
})
export class ManageItemComponent implements OnInit {
  items: Item[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadAllItems();
  }
  loadAllItems(): void {
    this.http.get<Item[]>('http://localhost:8080/api/v1/items').subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(item: Item): void {
    this.http.delete('http://localhost:8080/api/v1/items/' + item.code, {observe: 'response'})
      .subscribe(response => {
        if (response.status === 200) {
          this.loadAllItems();
        } else {
          alert('failes to delete the item');
        }
      });
  }

  saveItem(code: string, description: string, unitPrice: string, qtyOnHand: string): void {
    this.http.post('http://localhost:8080/api/v1/items', new Item(code, description , unitPrice, qtyOnHand), { observe: 'response'})
      .subscribe(response => {
        if (response.status === 201) {
          this.loadAllItems();
          alert('Items Has been Saved successfully');
        } else {
          alert('Failed to Save the Item');
        }
      });
  }
}
