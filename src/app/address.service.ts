import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  formModel = this.fb.group({
    Email: ['',[Validators.email,Validators.required]],
    HouseNo: ['',Validators.required],
    Address1: ['',Validators.required],
    PinCode: ['',Validators.required],
    city: ['',Validators.required],
    State:['',Validators.required],
    UId:['',Validators.required]
  });
 
  public AddressAdd() {
    var body =
    {

    
      Email: this.formModel.value.Email,
      HouseNo: this.formModel.value.HouseNo,
      Address1:this.formModel.value.Address1,
  
      PinCode: this.formModel.value.PinCode,
      city: this.formModel.value.city,
    State:this.formModel.value.State,
    UId:this.formModel.value.UId
     
      
    };
   
    return this.http.post('https://localhost:5001/api/Addresses',body)
  }
 
  public GetAddress() {
    return this.http.get('https://localhost:5001/api/Addresses');
 
  }
 

}
