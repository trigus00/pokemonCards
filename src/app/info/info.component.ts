import { Component,  Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../pokemonT';
import { results } from '../searchResults';
import { PokemonService } from '../pokemon.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnChanges {
  @Input()
  item!: Array<Pokemon>


  search: string = ''
  searchResults: Array<any> = []
  finalResults: Array<results> = [];
  finalPokemon: Array<any> = []
  resultsImage: Array<Pokemon> = [];
  clicked: boolean = false;
  info: Array<Pokemon> = [];




  constructor(private modalService: NgbModal,private PokemonService: PokemonService,public activeModal: NgbActiveModal) { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  open(card:any){
    console.log(card)
   console.log(card.tcgplayer.updatedAt)

   const modalRef = this.modalService.open(ModalComponent);
   modalRef.componentInstance.name = card.name;
   modalRef.componentInstance.image = card.imageUrl;
   modalRef.componentInstance.artist = card.artist;
   modalRef.componentInstance.rarity = card.rarity;
   modalRef.componentInstance.types =card.types;
   modalRef.componentInstance.tcglow = card.tcgplayer.prices.holofoil.low 
   modalRef.componentInstance.tcgmid = card.tcgplayer.prices.holofoil.mid 
   modalRef.componentInstance.tcghigh = card.tcgplayer.prices.holofoil.high
   modalRef.componentInstance.updated = card.tcgplayer.updatedAt
   
  
  };
  
}
