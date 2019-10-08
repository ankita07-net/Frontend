import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{FormBuilder,Validators} from '@angular/forms'
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI='https://localhost:5001/api/loginuser/Login';

  formModel=this.fb.group({
    Uname:['',Validators.required],
    Password:['',[Validators.required,Validators.minLength(4)]]

  });

  UserData():Observable<any>{
    
    return this.http.post(this.BaseURI,this.formModel.value);
  }
}
