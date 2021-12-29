import { Component,  Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../pokemonT';
import { results } from '../searchResults';
import { PokemonService } from '../pokemon.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';






// @Component({
//   selector: 'ngbd-modal-content',
//   template: `

//     <div class="modal-header">
//       <h4 style = "color: white" class="modal-title">Pokemon Info </h4>
//       <button type="button" class="close" aria-label="Close" style = "color: white" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>

//     <div class="modal-body" >
//       <p style= "color: white">{{name}}!</p>
//       <img src={{image}} alt="Pokemon card " style="justify-content: center;"/>
//     </div>


//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-light" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })

// export class NgbdModalContent {

//   @Input()
//   name!: object;
//   image!:object;
//   rarity!: object;
  

//   constructor(public activeModal: NgbActiveModal) { }

// }

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnChanges {
  @Input()
  item!: Array<Pokemon>
  // @ViewChild('results')
  // results!: ElementRef;

  search: string = ''
  searchResults: Array<any> = []
  finalResults: Array<results> = [];
  finalPokemon: Array<any> = []
  resultsImage: Array<Pokemon> = [];
  clicked: boolean = false;
  info: Array<Pokemon> = [];




  constructor(private PokemonService: PokemonService,public activeModal: NgbActiveModal) { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

//  open(card:any){
//   console.log(card)

//   const modalRef = this.modalService.open(NgbdModalContent);
//   modalRef.componentInstance.name = card.name;
//   modalRef.componentInstance.image = card.imageUrl;


//  }
}


// <div id="card-details" class="columns" data-controller="card">
// <div class="column is-one-third">
// <img class="card-image" src="https://images.pokemontcg.io/sm9/1_hires.png">
// </div>
// <div class="column is-6 is-offset-1">
// <div class="content card-details">
// <nav class="card-details_head level">
// <div class="level-left">
// <div class="level-item">
// <span class="title is-3">
// Celebi &amp; Venusaur-GX
// <div class="title is-5 has-text-muted">
// Pokémon - Basic, TAG TEAM, GX
// </div>
// </span>
// </div>
// </div>
// <div class="level-right">
// <div class="level-item">
// <span class="title is-5 is-flex is-align-items-center">
// <span class="mr-2">HP 270</span>
// <img class="energy" src="/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">
// </span>
// </div>
// </div>
// </nav>
// <hr>
// <section class="pt-0 mb-4">
// <div class="is-flex is-align-items-center mb-4">
// <div class="title is-4 has-text-muted mb-0 mr-2">
// Prices
// </div>
// <label class="checkbox mr-2">
// <input id="tcgplayer" type="checkbox" data-action="click->card#toggleTcgplayer" checked="checked">
// TCGPlayer
// </label>
// <label class="checkbox">
// <input id="cardmarket" type="checkbox" data-action="click->card#toggleCardmarket" checked="checked">
// Cardmarket
// </label>
// </div>
// <div id="tcgplayer-section" class="mb-4">
// <div class="title is-6 has-text-muted mb-0 mr-2">
// <a target="_blank" rel="nofollow" href="https://prices.pokemontcg.io/tcgplayer/sm9-1">Buy Now From TCGplayer</a>
// </div>
// <div class="is-size-7 has-text-muted">Last Updated 2021/12/27</div>
// <section class="pt-2">
// <div class="columns is-mobile">
// <div class="column">
// <div class="card-details_price">
// <p class="heading">holofoil market</p>
// <p class="title is-size-6-mobile is-5 price-high has-text-primary">$5.04</p>
// </div>
// </div>
// <div class="column">
// <div class="card-details_price">
// <p class="heading">holofoil low</p>
// <p class="title is-size-6-mobile is-5 price-low has-text-success">$4.00</p>
// </div>
// </div>
// <div class="column">
// <div class="card-details_price">
// <p class="heading">holofoil mid</p>
// <p class="title is-size-6-mobile is-5 price-mid has-text-info">$5.49</p>
// </div>
// </div>
// <div class="column">
// <div class="card-details_price">
// <p class="heading">holofoil high</p>
// <p class="title is-size-6-mobile is-5 price-high has-text-danger">$12.99</p>
// </div>
// </div>
// </div>
// </section>
// </div>
// <div id="cardmarket-section" class="is-hidden">
// <div class="title is-6 has-text-muted mb-0 mr-2">
// <a target="_blank" rel="nofollow" href="https://prices.pokemontcg.io/cardmarket/sm9-1">Buy Now From Cardmarket</a>
// </div>
// <div class="is-size-7 has-text-muted">Last Updated 2021/12/27</div>
// <section class="pt-2">
// <div class="columns is-mobile">
// <div class="column">
// <div class="card-details_price">
// <p class="heading">price trend</p>
// <p class="title is-size-6-mobile is-5 price-high has-text-warning-dark">7,80 €</p>
// </div>
// </div>
// <div class="column">
// <div class="card-details_price">
// <p class="heading">1 day average</p>
// <p class="title is-size-6-mobile is-5 price-high has-text-warning-dark">9,98 €</p>
// </div>
// </div>
// <div class="column">
// <div class="card-details_price">
// <p class="heading">7 day average</p>
// <p class="title is-size-6-mobile is-5 price-high has-text-warning-dark">8,04 €</p>
// </div>
// </div>
// <div class="column">
// <div class="card-details_price">
// <p class="heading">30 day average</p>
// <p class="title is-size-6-mobile is-5 price-high has-text-warning-dark">7,54 €</p>
// </div>
// </div>
// </div>
// </section>
// </div>
// </section>
// <hr class="mb-0">
// <section>
// <p class="heading">Attacks</p>
// <table>
// <tbody class="card-details_attack">
// <tr>
// <td class="nowrap">
// <img class="energy" src="/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// </td>
// <td class="attack-name">
// <span class="title is-4">Pollen Hazard</span>
// </td>
// <td>
// <span class="title is-4 is-muted nowrap">50</span>
// </td>
// </tr>
// <tr>
// <td colspan="3">
// <p>Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.</p>
// </td>
// </tr>
// </tbody><tbody>
// </tbody><tbody class="card-details_attack">
// <tr>
// <td class="nowrap">
// <img class="energy" src="/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">
// <img class="energy" src="/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// </td>
// <td class="attack-name">
// <span class="title is-4">Solar Beam</span>
// </td>
// <td>
// <span class="title is-4 is-muted nowrap">150</span>
// </td>
// </tr>
// </tbody><tbody>
// </tbody><tbody class="card-details_attack">
// <tr>
// <td class="nowrap">
// <img class="energy" src="/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">
// <img class="energy" src="/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// </td>
// <td class="attack-name">
// <span class="title is-4">Evergreen-GX</span>
// </td>
// <td>
// <span class="title is-4 is-muted nowrap">180</span>
// </td>
// </tr>
// <tr>
// <td colspan="3">
// <p>Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack's cost), shuffle all cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)</p>
// </td>
// </tr>
// </tbody><tbody>
// </tbody></table>
// </section>
// <section>
// <div class="card-details_ability">
// <p class="heading">Rules</p>
// <p class="is-flex is-flex-direction-column">
// TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.
// </p>
// </div>
// </section>
// <section>
// <div class="columns is-flex-wrap-wrap is-mobile">
// <div class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
// <div class="card-details_weakness">
// <p class="heading">weakness</p>
// <p class="title is-5 is-flex is-align-items-center">
// <img class="energy" src="/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">
// <span class="ml-1">×2</span>
// </p>
// </div>
// </div>
// <div class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
// <div class="card-details_resistance">
// <p class="heading">resistance</p>
// <p class="title is-5">N/A</p>
// </div>
// </div>
// <div class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
// <div class="card-details_retreat">
// <p class="heading">retreat cost</p>
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// <img class="energy" src="/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">
// </div>
// </div>
// <div class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
// <div class="card-details_artist">
// <p class="heading">artist</p>
// <p class="title is-5">Mitsuhiro Arita</p>
// </div>
// </div>
// <div class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
// <div class="card-details_rarity">
// <p class="heading">rarity</p>
// <p class="title is-5">Rare Holo GX</p>
// </div>
// </div>
// <div class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
// <div class="card-details_set">
// <p class="heading">set</p>
// <p class="title is-5">
// <a class="is-flex is-align-items-center" href="/set/team-up/sm9">
// Team Up <img width="24" class="ml-2" src="https://images.pokemontcg.io/sm9/symbol.png">
// </a> </p>
// </div>
// </div>
// <div class="column is-one-third-desktop is-one-third-tablet is-half-mobile">
// <div class="card-details_number">
// <p class="heading">number</p>
// <p class="title is-5">1 / 181</p>
// </div>
// </div>
// </div>
// </section>
// <section>
// <div class="field is-grouped is-grouped-multiline">
// <div class="control">
// <div class="tags has-addons">
// <span class="tag is-dark">Standard</span>
// <span class="tag is-light">Not Legal</span>
// </div>
// </div>
// <div class="control">
// <div class="tags has-addons">
// <span class="tag is-dark">Expanded</span>
// <span class="tag is-success">Legal</span>
// </div>
// </div>
// <div class="control">
// <div class="tags has-addons">
// <span class="tag is-dark">Unlimited</span>
// <span class="tag is-success">Legal</span>
// </div>
// </div>
// </div>
// </section>
// </div>
// </div>
// </div>