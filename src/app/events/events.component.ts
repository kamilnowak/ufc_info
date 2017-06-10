import { Component, OnInit } from '@angular/core';
import {EventsService} from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  events: any;

  constructor(private eventsService: EventsService) {
    eventsService.getEvents()
      .subscribe(
       events => this.events = events
      );
  }

  ngOnInit() {
  }
}
