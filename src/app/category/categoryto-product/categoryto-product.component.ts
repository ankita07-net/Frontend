import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-categoryto-product',
  templateUrl: './categoryto-product.component.html',
  styleUrls: ['./categoryto-product.component.css']
})
export class CategorytoProductComponent implements OnInit {

  product:any = [];
  id:number;

  constructor(private service:CategoryService,private route:Router, private active:ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe(
      (params: Params)=>{
        this.id=+params['id'];
  
        this.service.GetProducts(this.id).subscribe(
          res=>{

    this.product=res;
    
          },
          err=>{
            console.log(err);
          }
        )
      }
    )
  }


  
}
