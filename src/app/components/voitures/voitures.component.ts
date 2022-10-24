import { Voiture } from 'src/app/model/voiture';
import { AuthService } from './../../services/auth.service';
import { VoitureService } from './../../services/voiture.service';
import { Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {

  
  constructor(
    private voitureService:VoitureService,
    private authService:AuthService,
    private router:Router
              ) { }

  ngOnInit(): void {
    
    
  }
 
 

}
  
