import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { ProfileService } from '../profile.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  id:number;

  constructor(private base:ProfileService,private route:Router,private active:ActivatedRoute ) { }

  ngOnInit() {


  this.base.GetInfo(localStorage.getItem('uId'))
    .subscribe(
      res=>{
          this.user = res
      },
      err=>{
        console.log(err);
      }
    )
  
}
}