import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  eventCount = 0;
  ref = null;
  @Output() gameEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    if (!this.ref) {
      this.ref = setInterval(() => {
        this.gameEvent.emit(++this.eventCount);
        console.log(this.eventCount);
      }, 1000);
    }
  }

  stopGame() {
    clearInterval(this.ref);
  }

}
