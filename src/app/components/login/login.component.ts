import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email;
 password;
  constructor
             (
               private authService:AuthService,
               private router:Router
             ) { }

  ngOnInit(): void {
  
  }
  
  onLogin() {
    this.authService.login(this.email,this.password)
        .then(auth => {
          if(auth){
            this.router.navigate(['/tarif'])
          }
        else {
          console.log('error')
        }
        })
  }
  

}
