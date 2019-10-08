import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(public service:ProductService, private router:HttpClient, private activroute:ActivatedRoute,
                private _route:Router) { }

  proId:number;
  product:any;
  ngOnInit() {
    
this.proId=+this.activroute.snapshot.paramMap.get('id');

}
    

  editData(nf:NgForm){
    
    nf.value.PId = this.proId;
    console.log(nf.value)
    nf.value.PImage = nf.value.PImage.replace("C:\\fakepath\\","")
    this.service.updatefromDB(this.proId,nf.value).subscribe(
      res=>{
        this._route.navigate(['/product'])
      },
      err=>{
         console.log(err)
      }
    );
  }



  

}
