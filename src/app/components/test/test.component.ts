import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { VoitureService } from './../../services/voiture.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Voiture } from 'src/app/model/voiture';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
   voitures:Voiture[]=[];
  status:boolean=true
  vehicule:Voiture = {
    name:'',
   type:'',
   date:Date(),
   ville:'',
   carbourant:'',
   fiscale:null,
   diposation:null,
   cin:'',
   matricule:'',
   accident:null,
   degat:null,
    f_initial:null,
    f_essentielle:null,
    f_risque:null,
    user:null,
    tarif:null

 }
 tarif_ferrari_f1=100;





  constructor(
               private voitureService:VoitureService,
               private authService:AuthService,
               private router:Router,
               private el:ElementRef
               ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      this.vehicule.user = auth.uid;
    })
  }

  newAdd() {
    this.voitureService.add(this.vehicule)
    this.vehicule = {
      name:'',
      type:'',
      date:Date(),
      ville:'',
      carbourant:'',
      fiscale:null,
      diposation:null,
      cin:'',
      matricule:'',
      accident:null,
      degat:null,
      f_initial:null,
      f_essentielle:null,
      f_risque:null,
      user:''
    }
      this.router.navigate(['/tarif']);
   
    }

    

  
   }
  



