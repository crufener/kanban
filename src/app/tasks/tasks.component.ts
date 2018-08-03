import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() task;
  isDone: boolean;

  constructor() { }

  ngOnInit() {
    this.isDone = this.task.done;
  }

}
