import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit() {
    this.service.formModel.reset();
  }
  
  onSubmit(){
    this.router.navigate(['./login']);
    console.log(this.service.formModel.value)
    this.service.GetData().subscribe(
(res:any)=>{
  if(res.succeded){
    this.service.formModel.reset();
  }else
  {

  }
},
err=>{
  console.log(err);
}
    );
  }
  
}
