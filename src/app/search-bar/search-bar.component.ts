import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

type Searchdirectory = {
  id: number
  name: string,
}


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search: string = ''

  navMenu  : Searchdirectory[];
  selectedNav!: Searchdirectory; 
  
  
  constructor(private PokemonService:PokemonService) {
    this.navMenu = [
      {id: 1, name:'Card'}, 
      {id:2 , name:'Type'},
      {id:3 , name:'Sets'}, 
      {id:4 , name:'SuperType'}, 
      {id:5, name:'Rarity'},
    ];
   }

  ngOnInit(): void {
  }

  onSubmit(){
  
  }
  getCard(){
    this.PokemonService.getCard(this.search)
    .subscribe((response)=>{
      console.log(response)
    })
  }
}
