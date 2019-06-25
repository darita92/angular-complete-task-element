import { Component, OnInit, ViewEncapsulation, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CompleteTaskComponent implements OnInit {
  @Input() item = 0;
  @Output() action = new EventEmitter<number>();

  icon = faCheckCircle;

  constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }

  completeItem(){
    console.log(`Completing the item (${this.item})`)
    const db = new window['app'].Store('todos')
    const itemId = Number(this.item)
    db.find({id: itemId}, response => {
      let item = response[0]
      console.log(item)
      item.isComplete = !item.isComplete
      db.save(item, item => {
        console.log('item saved')
        this.action.emit(itemId)
      }, itemId)
    })
  }

}
