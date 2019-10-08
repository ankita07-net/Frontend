import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressSaved = false

  constructor(private service:AddressService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.service.AddressAdd().subscribe(

      res=>{

this.addressSaved = true
      },
      err=>{
console.log(err);
      }
      
    );
  }
}
