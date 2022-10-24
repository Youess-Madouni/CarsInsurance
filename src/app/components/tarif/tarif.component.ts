import { Voiture } from 'src/app/model/voiture';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { VoitureService } from './../../services/voiture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {
  voitures:Voiture[]=[];

  tarif_ferrari_f1=100
  tarif_ferrari_f2=100
  tarif_ferrari_f3=100
  tarif_mercedes_m1=200
  tarif_mercedes_m2=300
  tarif_mercedes_m3=400
  tarif_lamborghini_l1=1000
  tarif_lamborghini_l2=1000
  tarif_lamborghini_l3=1000

  




  constructor(
               private voitureService:VoitureService,
               private authService:AuthService,
               private router:Router
              ){ }

  ngOnInit(): void {
             this.authService.getAuth().subscribe(auth => {
             this.voitureService.getAll(auth.uid).subscribe(voiture => {
             this.voitures = voiture;
           
             console.log(this.voitures)

             })
         })

    }

  onDelete(id) {
    this.voitureService.deleteVehicule(id)
  }
  
  }
