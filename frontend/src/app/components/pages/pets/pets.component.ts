import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.less']
})
export class PetsComponent implements OnInit {
  
  lmessage : String;
  pets: Pets[];
  selectedPets: Pets;
  items: MenuItem[];



  constructor(private apiService: ApiService) {
  
    //merge
   this.lmessage  = 'Bogdan';
  

   }

  ngOnInit() {
    
      
    this.lmessage = this.lmessage+' Liviu';
    
    this.apiService.get('api/pets/').subscribe(res => {
      this.pets = res;
    });

    
    


    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewPets(this.selectedPets) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deletePets(this.selectedPets) }
    ];
  }
  viewPets(select: Pets) {
    console.log(JSON.stringify(select));

  }
  deletePets(select: Pets) {
    this.apiService.delete('api/pets/' + select.id).subscribe(res => {
      console.log(res);
    });

  }
    
   
     
  }


interface Pets {
 id: number;
 Name: String;
 Type: String;
}


