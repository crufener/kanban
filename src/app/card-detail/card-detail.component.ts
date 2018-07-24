import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CardService } from '../cardstore.service';
import { CardSchema } from '../cardschema';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: CardSchema;
  editDescription: boolean;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => this.card = card['data']);
  }

  onEditDescription() {
    this.editDescription = ! this.editDescription;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log('beginning of save card method: ', this.card);
    this.cardService.updateCard(this.card)
      .subscribe(() => this.goBack());
  }

}
