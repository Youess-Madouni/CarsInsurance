import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
 email:any;
 password:any;
  constructor(
               private authService:AuthService,
               private router:Router
              ) { }

  ngOnInit(): void {
  }
  onCreate() {
    this.authService.create(this.email,this.password)
        .then(auth => {
          if(auth) {
            this.router.navigate(['/form'])
          }
          else {
            alert('kpkrp')
          }
        })
   }

}
