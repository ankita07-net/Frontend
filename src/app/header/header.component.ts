import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdminLoggedIn = false


  constructor(private router: Router, private service: ProductService) { }
  public isUserLoggedIn: boolean;
  ngOnInit() {

    if (localStorage.getItem('userRole') == "ADMIN") {
      this.isAdminLoggedIn = true
    }
  }
  
}
