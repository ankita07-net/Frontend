import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:LoginService ,  private router:Router, private authservice:AuthServiceService) { }

  userRole
  ngOnInit() {
    this.service.formModel.reset();
  }
  
  onLogin(){
    
    this.service.UserData().subscribe(
      (res:any)=>{
      
         localStorage.setItem('token',res.token);
         localStorage.setItem('uId', res.uId);
         localStorage.setItem('userRole',res.userRole);
          this.userRole=res.userRole;

          this.router.navigate(['/header']);
          
          if(localStorage.getItem('token')!=null)
           {
            console.log(this.authservice.getRole())
            let check=this.authservice.getRole();
             if(check)
            {
               console.log("inside home")
               this.router.navigate(['/admin']);
              
             }
           else
             {
               console.log("inside customer")
               this.router.navigate(['/header']);
              
             }
           }
           else
           {
             this.router.navigate(['forbidden']);
         }
      },
      err=>{
        console.log(err);
      }
    

    );
  }


}
