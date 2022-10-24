import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  create(email:any,password:any) {
    return new Promise((resolve,reject) => {
      this.auth.createUserWithEmailAndPassword(email,password)
      .then((user) => resolve(user), (error) => reject(error))
    })
  }
  login(email:any,password:any) {
     return new Promise((resolve,reject) => {
       this.auth.signInWithEmailAndPassword(email,password)
       .then((user) => resolve(user), (error) => reject(error))
     })
  }

  getAuth() {
    return this.auth.authState.pipe(
      map(auth => auth)
    )
  }

  signOut() {
     return this.auth.signOut() 
  }


}
