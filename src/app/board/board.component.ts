import { Component, OnInit } from '@angular/core';

import { ListSchema } from '../listschema';
import { CardService } from '../cardstore.service';
import { CardSchema } from '../cardschema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cardStore: CardSchema[];
  lists: ListSchema[];
  card: CardSchema;
  cards: CardSchema[];

  constructor(private cardService: CardService) { }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  setMockData(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cardStore = cards['data'];
      this.lists = [
        {
          id: 1,
          name: 'To Do',
          cards: cards['data'].filter(c => c.list === 1)
        },
        {
          id: 2,
          name: 'Doing',
          cards: cards['data'].filter(c => c.list === 2)
        },
        {
          id: 3,
          name: 'Done',
          cards: cards['data'].filter(c => c.list === 3)
        }
      ];
    });
  }

  updateList() {
    console.log('event received from child');
    this.setMockData();
  }

  ngOnInit() {
    this.setMockData();
  }

}
