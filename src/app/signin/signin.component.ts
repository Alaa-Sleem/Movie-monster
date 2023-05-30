import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


  constructor(private _auth:AuthService , private _router:Router){}
   isLoading:boolean=false;
   ApiError:string='';

loginForm:FormGroup = new FormGroup({
 email:new FormControl (null,[Validators.required,Validators.email]),
 password:new FormControl (null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),

})


handeLogin(loginForm:FormGroup)
{
  this.isLoading=true; 
   if (loginForm.valid)
  {

     this. _auth.Login(loginForm.value).subscribe({
      next:(responce)=>{
        console.log(loginForm.value);
        
        // navigate here
        console.log(responce);
        if (responce.message ==="success") {
          localStorage.setItem("usertoken",responce.token);
          this._auth.decodeUserData();
           this.isLoading=false;
           this._router.navigate(['/home'])
          
          
        }
      },

      error:(err)=>
      {
        this.isLoading=false;
        this.ApiError= err.error.message;
        ;
        console.log(this.ApiError);
        
        
        
      }
      
     })
   }    
}

}
