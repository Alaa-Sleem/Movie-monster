import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  IsLogin:boolean=false;
  
  constructor(private _auth:AuthService)
  {
    _auth.userData.subscribe({
      next:()=>
      {
        if (_auth.userData.getValue()!==null ||localStorage.getItem('usertoken') !==null) {
          this.IsLogin=true
        }
        else
        {
          this.IsLogin=false
        }
      }
    })
  }



  LogOut()
  {
    this._auth.isLogOut();
  }

}
