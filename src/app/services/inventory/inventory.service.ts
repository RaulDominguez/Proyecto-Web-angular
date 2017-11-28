import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InventoryService {

  constructor(private http:HttpClient) { }

  /*items: Array<any> = [
    {id:1, name: "Aceite", brand: "Cada Dia", provider: "AGD", quantity: "10", price: "50"},
    {id:2, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
    {id:3, name: "Azucar", brand: "Chango", provider: "Adeco", quantity: "20", price: "25"},
    {id:4, name: "Cerveza", brand: "Lupulo", provider: "AGD", quantity: "100", price: "23"},
    {id:5, name: "Frijol", brand: "Mas", provider: "NUUE", quantity: "300", price: "10"},
  ]; */

  find(){
    return this.http.get('/api/products');
  }

  insertOne(obj){
    return this.http.post('/api/products', obj);
  }

  updateOne(obj){
    return this.http.put('/api/products', obj);
  }

  deleteOne(id){
    return this.http.delete('/api/products/' + id);
  }

  findbyname(search){
        return this.http.get('/api/products/'+search);
  }

}
