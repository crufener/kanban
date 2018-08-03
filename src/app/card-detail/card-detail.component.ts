import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CardService } from '../cardstore.service';
import { CardSchema } from '../cardschema';
import { ListSchema } from '../listschema';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: CardSchema;
  editDescription: boolean;
  lists: ListSchema[];
  allLists;
  selectedList;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCard();
    this.cardService.currentList.subscribe(list => this.allLists = list);
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => {
        this.card = card['data'];
        this.selectedList = this.card.list;
      });
  }

  onEditDescription() {
    this.editDescription = ! this.editDescription;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.card.list = +this.selectedList;
    console.log('beginning of save card method: ', this.card);
    this.cardService.updateCard(this.card)
      .subscribe();
  }

  addTask(task): void {
    if (!this.card.tasks) {
      this.card.tasks = [];
    }
    let id = this.card.tasks.length;
    console.log(`The length is ${id}`);
    task.id = ++id;
    task.done = false;
    this.card.tasks.push(task);
    this.cardService.updateCard(this.card)
      .subscribe(() => console.log('added a task: ', task));
  }

  log(): void {
    this.cardService.currentList.subscribe(list => {
      this.allLists = list;
      console.log('Selected list fetched from the service: ', this.allLists);
    });
  }

}
