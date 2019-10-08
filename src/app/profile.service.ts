import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

GetInfo(id){
  const url="https://localhost:5001/api/information/"+id;
 return this.http.get(url)

}

}
