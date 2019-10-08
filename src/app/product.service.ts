import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import{Observable,of , throwError} from 'rxjs';
import{catchError,tap,map} from 'rxjs/operators';
import { ProductComponent } from './product/product.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn : 'root'
})



export class ProductService {
  
  
  constructor(private http:HttpClient, private _route:Router) { }

  productdata(){
    return this.http
    .get (
     
      'https://localhost:5001/api/Products', 
    
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
  
  deletedataFromDB(Id:any){
     
  const url="https://localhost:5001/api/Products/"+Id;
    return this.http.delete(url);
  }


  
  addProduct(product:any){
    this.http
    .post
    (
      
      'https://localhost:5001/api/Products',
       product
    )
    .subscribe
    (
      responseData=>
      {
        this._route.navigate(['/product'])
          console.log(responseData);
      },
    );
  }

  updatefromDB(id:number,user:any)
  {
    console.log(id,user);
    
    const url="https://localhost:5001/api/Products/";
     return this.http.put(url + id,user)
  }



  
Getproducts(Id:any)
{
  const url="https://localhost:5001/api/Details/";
  return this.http.get(url+Id)
}



}
