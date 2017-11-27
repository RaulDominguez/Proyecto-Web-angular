import { Injectable } from '@angular/core';

@Injectable()
export class SalesService {

  constructor() { }

  sale: any = {
  client: {name: "", lastName: "", email: ""},
  address: {street:"", city: "", zip: ""},
  items: [],
};

  sales: any = [
  {
    order: 223344,
    date:new Date(),
    total: 44553,
    client: {name: "Victor Hugo", lastName: "Aguilar Parra", email: "victor@email.com"},
    address: {street:"San pancho 3432", city: "Chihuahua", zip: "446744"},
    items: [
      {id:1, name: "Aceite", brand: "Cada Dia", provider: "AGD", quantity: "10", price: "50"},
      {id:2, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
      {id:3, name: "Azucar", brand: "Chango", provider: "Adeco", quantity: "20", price: "25"}
    ],
  },
  {
    order: 776655,
    date:new Date(),
    total: 345,
    client: {name: "Juan Manuel ", lastName: "Medrano", email: "Juan@email.com"},
    address: {street:"San pancho 3432", city: "Chihuahua", zip: "446744"},
    items: [
      {id:1, name: "Aceite", brand: "Cada Dia", provider: "AGD", quantity: "10", price: "50"},
      {id:2, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
      {id:3, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
      {id:4, name: "Azucar", brand: "Chango", provider: "Adeco", quantity: "20", price: "25"}
    ],
  }
];

}
