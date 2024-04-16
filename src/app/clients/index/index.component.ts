import { Component, OnInit} from '@angular/core';
import { ClientsService } from '../clients.service';
import { Clients } from '../clients';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  {
  clients: Clients[];
  columns: string[] = ['firstname','lastname','email','phonenumber','_id'];

  constructor(public clientsService: ClientsService) { }
  /*ngOnInit(): void {
  this.clientsService.getClients().subscribe(res=>{
    console.log(res)
    this.clients=res; 
    })
}*/
ngOnInit(): void {
  this.clientsService.getClients().subscribe(
    (data: any) => {
      // Assuming 'data' is the API response containing client data
      this.clients = data as Clients[]; // Assigning response to clients array
    },
    (error) => {
      console.error('Error fetching clients:', error);
    }
  );
}

  
  deleteClient(id:object){
    console.log(id);
    this.clientsService.deleteClient(id).subscribe(res => {
    console.log('Client deleted succe ssfully!');
    this.clients.splice(1);
    })
    }
   
  }

    
