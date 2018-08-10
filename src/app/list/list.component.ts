import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardSchema } from '../cardschema';
import { ListSchema } from '../listschema';
import { CardService } from '../cardstore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: ListSchema;
  @Input() listID: number;
  @Input() cardStore: CardSchema[];
  @Input() bgColor: string;
  @Input() lists: ListSchema[];
  @Output() listUpdated = new EventEmitter();
  @Output() card = new EventEmitter<CardSchema>();

  displayAddCard = false;
  labelColor;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  log(msg) {
    console.table(msg);
  }

  onSelect(card: CardSchema) {
    console.log(`You just clicked on the card: ${card.id}`);
    this.cardService.getCard(card.id)
      .subscribe(c => console.log(c['data']));
    this.card.emit(card);
  }

  add(card: CardSchema): void {
    console.log(`The value you entered was: `, card);
    if (!card) {return; }
    this.cardService.addCard(card as CardSchema)
      .subscribe((c) => {
        const newCard = c['data'];
        console.log('New card received from server: ', newCard);
        this.listUpdated.emit();
      });
  }

  delete(card: CardSchema): void {
    const ok = confirm(`Delete project ${card.name}`);
    if (ok) {
      this.cardService.deleteCard(card).subscribe((c) => {
        console.log('A card was deleted LIST COMPONENT: ', c);
        this.listUpdated.emit();
      });
    } else { return; }
  }

}
