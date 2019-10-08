import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/product.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CartService } from 'src/app/cart.service';
import { Cart } from 'src/app/cart/shared/Cart';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  model=new Cart();   
  cart :any;
  y=new Cart();
  userId:any;
 
product:any = {}
  id:number;

  constructor(private service:ProductService,private _service:CartService, private router:Router,private active:ActivatedRoute) {
  }
  


  
   

  ngOnInit() {
    this.active.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.service.Getproducts(this.id)
            .subscribe(
              res=>{

                this.product = res
              },
              err=>{
                console.log(err)
              }
            )
          
        }
      );
  }

addToCart(id:number){

  this.y.UId=+localStorage.getItem('uId'); 
  this.y.PId=this.id; 
  this.y.Quantity=1;
   this._service.addToCart(this.y).subscribe((res:any)=>{
        this.router.navigate(['/cart']);
    this.ngOnInit();  
   },
   err=>{
     console.log(err)
   });

}

BuyNow(){
  
}


}
  




  


