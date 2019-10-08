import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import{NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,private router:Router) { }

  GetCategory(){
    return this.http
    .get (
      
      'https://localhost:5001/api/Categories',
    
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
  
  addcategory(product:any){
    
      this.http
      .post
      (
        
        'https://localhost:5001/api/Categories',
         product
      )
      .subscribe
      (
        responseData=>
        {
          this.router.navigate(['/category'])
            console.log(responseData);
        },
      );
    }
   
    deletedata(Id:any){
     
      const url="https://localhost:5001/api/Categories/"+Id;
        return this.http.delete(url);
      }




      update(id:number,user:any)
      {
        console.log(id,user);
        
        const url="https://localhost:5001/api/Categories/";
         return this.http.put(url + id,user)
      }
    


      GetProducts(id){
        const url="https://localhost:5001/api/Categoryproduct/"+id;
        return this.http.get(url);

      }
  }
