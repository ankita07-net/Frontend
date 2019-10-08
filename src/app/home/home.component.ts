import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

Data:any[]
PId:number;
PName:string;
PPrice:number;
Quantity:number;
PImage:string;

Name:string;
products:any;

isAdminLoggedIn = false
  constructor(public service:ProductService, private router:Router) { }
  public isUserLoggedIn: boolean;
  ngOnInit() {
   
    this.service.productdata().subscribe(
      posts=>
      {

        this.Data=posts
      } 
    );
    if (localStorage.getItem('userRole') == "ADMIN") 
      this.isAdminLoggedIn = true
    

  }

  Search(){
    if (this.Name !== '')
    {

      this.Data=this.Data.filter(res=>{
        return res.pName.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());

      });
    }else if(this.Name === ''){
      this.ngOnInit();

    }
  }
  onLogOut() {

    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
