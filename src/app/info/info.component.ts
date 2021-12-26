import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../dashboard/pokemonT';


@Component({
  selector: 'app-infxo',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  inputs: ['item']
})

export class InfoComponent implements OnInit {
  
  constructor() { }
  @Input()
  item!: Array<Pokemon>; 
  ngOnInit(): void {
  }

  onSubmit(){
    console.log("I've been click")
  }

}
