import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{
  nrStudenti: number = 21; // typescript
  altravariabile = 5; // javascript

  nrInsegnanti: number = 2; // se gli assegno un valore devo togliere il punto esclamativo

  coloreStudenti: string = 'blue';
  coloreInsegnanti: string = 'green';

  nomeLaboratorio: string = 'informatica 3';

  timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.nrStudenti--;
      if (this.nrStudenti < 15){
        this.coloreStudenti = 'red';
      }
    },1000)
  }

  fermaMorte(): void{
    clearInterval(this.timer);
  }
  

}
