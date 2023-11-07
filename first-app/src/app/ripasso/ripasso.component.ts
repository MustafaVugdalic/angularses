import { Component } from '@angular/core';

@Component({
  selector: 'app-ripasso',
  templateUrl: './ripasso.component.html',
  styleUrls: ['./ripasso.component.css']
})

export class RipassoComponent {
nome: string = 'Erik';
cognome: string = 'Vanzo';
materia: string = 'informatica';
studenti: string[] = ['Bademer' , 'Bartoli' , 'Benini'];
}


