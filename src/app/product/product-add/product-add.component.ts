import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(public service:ProductService,private http:HttpClient) { }

  ngOnInit() {
  }

  addData(nf:NgForm)
  {
    
    nf.value.PImage = nf.value.PImage.replace("C:\\fakepath\\","");
this.service.addProduct(nf.value);

  }

}
