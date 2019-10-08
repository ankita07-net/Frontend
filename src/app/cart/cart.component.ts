import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from './shared/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  model=new Cart();

  iscartempty= false
  constructor(private _service:CartService) { }
productDetails;





  ngOnInit() {
    this._service.loadProductsFromDB().subscribe
    (
      posts=>
      {
        
        this.productDetails=posts
        if(posts.length>0)
           this.iscartempty = true
        else
          this.iscartempty = false
      }
    
    );


  }



RemoveFromCart(id:number){
  this.model.UId=+localStorage.getItem('uId');
  this.model.PId=id;
  this.model.Quantity=1;
  this._service.RemoveCart(this.model).subscribe((res:any)=>{
    this.ngOnInit();
  });
}



}
