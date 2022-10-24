import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(
               private authService:AuthService,
               private router:Router,
               private auth:AngularFireAuth
             ) { }

  ngOnInit(): void {
    
  }

}