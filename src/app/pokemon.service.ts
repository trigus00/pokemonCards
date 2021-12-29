import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  key = '0438eebf-6164-4f92-8fdf-5df9004d5691'
  hearders = new HttpHeaders()
  .set('X-Api-Key',this.key)
  .set('x-rapidapi-host', 'pokemon-tcg-card-prices.p.rapidapi.com')
  .set('x-rapidapi-key', '010fe3c61cmshbf785910f61fbb7p1d1923jsn94112b1a029c')
  


  constructor(private https:HttpClient) { }

  searchEngine(id:string ){
    return this.https.get(`https://pokemon-tcg-card-prices.p.rapidapi.com/card?id=${id}`)
  }
  getCard(search:string){
    return this.https.get(`https://pokemon-tcg-card-prices.p.rapidapi.com/card?name=${search}`, {'headers': this.hearders})
  }
  getAllCards(){
    return this.https.get(`https://api.pokemontcg.io/v2/cards/`,{'headers':this.hearders})
  }
  getCardName(search:string){
    return this.https.get(` https://api.pokemontcg.io/v2/cards?q=name:${search}`, {'headers': this.hearders})
  }
}
