import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart/shared/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  constructor(private http:HttpClient) { }

  loadProductsFromDB(){

    return this.http
    .get (
      
      'https://localhost:5001/api/cart',
    )
    .pipe(
      map(responseData => {
        const postsArray: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }

 public addToCart(model:Cart){
    return this.http.post("https://localhost:5001/api/cart",model)
  }
  
 
  public RemoveCart(model:Cart){
    return this.http.post("https://localhost:5001/api/cart/remove",model)
  }
  

  
}
