import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  getTotal(items: {price: number; qty: number}[]): number {
    return items.reduce((acc, item) => acc + (item.qty * item.price), 0);
  }
}
