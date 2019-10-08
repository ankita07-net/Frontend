import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private route:Router) { }

  getRole():boolean
  {
var isMatch=false;
var paylod=JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
   var userRole=paylod.role;
   
if(userRole=='USER')
    {
return false;
    }
else
    {
return true;
    }

 }


  }
