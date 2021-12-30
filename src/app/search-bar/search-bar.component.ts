
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../pokemon.service';
// import { results } from '../searchResults';
import { Pokemon } from '../pokemonT';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  constructor(private PokemonService: PokemonService) { }
  // @ViewChild('id')
  // id!: ElementRef;
  card:Array<any> = [];
  cardList: Array<any> = [];
  name:Array<Pokemon>=[]
  clicked:boolean = false
  search: string = ''


  ngOnInit(): void {
    
  }
 

  getCard(){
    this.PokemonService.getCardName(this.search)
      .subscribe((response:any)=>{
        // console.log(response)
        this.cardList.push(response.data)
        this.cardList.forEach(card=>{
          card.forEach((item: any) => {
            // console.log(item)
            const db: Pokemon ={
              name: item.name,
              imageUrl: item.images.small,
              ability: item.abilities,
              artist: item.artist,
              attacks: [item.attacks],
              convertedRetreatCost: item.convertedRetreatCost,
              evolvesFrom: item.evolvesFrom,
              hp: item.hp,
              id: item.id,
              nationalPokedexNumber: item[0],
              number: item.number,
              rarity: item.rarity,
              resistances: item.resistances,
              retreatCost: item.retreatCost,
              set: item.set,
              subtype: item.subtypes,
              supertype: item.supertype,
              types: item.types,
              weaknesses: item.weaknesses,
              tcgplayer: item.tcgplayer

            }
            this.name.push(db)
          });
          // console.log(this.name)
        })
       
    })
   
   this.clearSearch()
  }
 

  clearSearch(){
    this.search = '';
    this.name = [];
    this.card = [];
    this.cardList = [];
   
  }
}
