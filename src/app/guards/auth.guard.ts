import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
              private authService:AuthService,
              private router:Router,
              private auth:AngularFireAuth
              ){}
  canActivate(): Observable<boolean>  {
       return this.auth.authState.pipe(
          map(auth => {
            if(!auth) {
              this.router.navigate(['/acceuil'])
              return false
            }else {
              return true
            }
          })
        )
  }
  
}
