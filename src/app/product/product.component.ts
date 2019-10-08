import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  AdminData:any[]
  PId: number;
  PName: string;
  PPrice: number;
  Quantity: string;
  PImage:string;
  CId:number;
  

  constructor(public service:ProductService,private _route:Router) { }

  ngOnInit() {
    
    this.service.productdata().subscribe
    (
      posts=>
      {
        
        this.AdminData=posts
      }
    );

    


  }




 

  delete(Id:any){
    console.log(Id);
   
      this.service.deletedataFromDB(Id).subscribe(
        res=>
        {
          this.ngOnInit();
        }
      );
    }

    

  

  }
  

