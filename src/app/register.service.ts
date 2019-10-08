import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class RegisterService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
 readonly BaseURI='https:/localhost:5001/api';
formModel=this.fb.group({
   Uname:['',Validators.required],
   Password:['',[Validators.required,Validators.minLength(4)]],
   PhoneNumber:[''],
 Email:['',Validators.email]

 });

  GetData(){
   
 
   return this.http.post(this.BaseURI+'/Users',this.formModel.value);
  }






}
