import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   loggedIn:boolean=false;
  constructor(
               private authService:AuthService,
               private router:Router
              ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
           this.loggedIn=true;
      }else {
        this.loggedIn=false
      }
    })
  }

  onLogout() {
    this.authService.signOut()
    this.router.navigate(['/acceuil'])
  }

}
