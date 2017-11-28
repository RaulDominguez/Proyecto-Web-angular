import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  users: Array<any>;

  user: {name: "", lastName: "", email: ""};
  action: string = "default";

  constructor(private clientService: ClientService) {

    //this.users = this.clientService.clients;

  }

  ngOnInit() {
    this.onFind();
  }

  onSave(user){
  if (this.action == "edit"){
    this.clientService.updateOne(user).subscribe((res:any) => {
      this.onFind();
    });
  }
  if (this.action == "create"){
    this.clientService.insertOne(user).subscribe((res:any) => {
      this.onFind();
    });
    //this.users.push(user);
  }
  }

  onFind(){
    this.clientService.find().subscribe((res:any) => {
      this.users = res.body;
      //console.log(res.body);
    });
  }

  onCreate(){
  this.user = {name: "", lastName: "", email: ""};
  this.action = "create";
}

  onDelete(index){
    this.users.splice(index, 1);
    }

  onEdit(user){
    this.user = user;
    this.action = "edit";
  }
}
