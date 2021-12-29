import { Component, OnChanges, SimpleChanges,Input, NgModule } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdModalContent } from '../info/info.component';
// import { InfoComponent } from '../info/info.component';
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {

  @Input()
  cards!:any
  imageUrl:any
  name!: object;
  image!:object;
  rarity!: object;

  clicked:boolean = false; 


  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal) { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  open(card:any){
    console.log(card)
    this.clicked = true
  
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = card.name;
    modalRef.componentInstance.image = card.imageUrl;
  
  
   }

}
