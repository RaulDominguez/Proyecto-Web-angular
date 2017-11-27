import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {

  constructor() { }

  clients: Array<any> = [
  {name: "Victor Hugo", lastName: "Aguilar Parra", email: "victor@email.com"},
  {name: "Javier Alejandro", lastName: "Arreola Grajeda", email: "javier@email.com"},
  {name: "Jose Fransisco", lastName: "Greco", email: "Jose@email.com"},
  {name: "Juan Manuel ", lastName: "Medrano", email: "Juan@email.com"},
];

}
