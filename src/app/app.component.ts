import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventNumber = 0;

  getEventNumber(eventNumber: number) {
    this.eventNumber = eventNumber;
  }
}
