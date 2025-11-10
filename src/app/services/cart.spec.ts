import { TestBed } from '@angular/core/testing';

import { Cart } from './cart';

describe('Cart', () => {
  let service: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart);
  });

  it('should calculate total proce correctly', () => {
    const items = [
      {price: 10, qty: 2},
      {price: 5, qty: 3},
    ];
    expect(service.getTotal(items)).toBe(35);
  });
});
