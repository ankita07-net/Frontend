import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  isinfovalid=false
  
  constructor(private fb:FormBuilder) { }

  formModel=this.fb.group({
    username:['',Validators.required],
    card_number:['',Validators.required],
    expiry_month:['',Validators.required],
    expiry_year:['',Validators.required],
    password_confirm:['',Validators.required]


  })
  ngOnInit() {
    this.isinfovalid=true
    
    
  }

Order(){
 
  alert("Your Order has been done !");
}


}
