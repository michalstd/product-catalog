import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export interface Product {
  id: string
  code: string
  name: string
  price: number
}
