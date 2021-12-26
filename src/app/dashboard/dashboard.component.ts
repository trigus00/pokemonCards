import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from './pokemonT';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  card:Array<any> = [];
  cardList: Array<any> = [];
  name:Array<Pokemon>=[]
  
  constructor(private PokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getAllCard()
  }
  getAllCard(){
    this.PokemonService.getAllCards()
      .subscribe((response:any)=>{
        // console.log(response)
        this.cardList.push(response.data)
        this.cardList.forEach(card=>{
          card.forEach((item: any) => {
            const db: Pokemon ={
             name : item.name,
              image :item.images.small
            }
            this.name.push(db)
          });
        })
    
    })
    console.log(this.name)
  }
  
}

   
  
