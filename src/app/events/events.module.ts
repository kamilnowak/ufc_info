import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsComponent} from './events.component';
import {EventComponent} from './event/event.component';
import {appRoutes} from '../app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [EventsComponent, EventComponent],
  exports: [EventsComponent, EventComponent]
})
export class EventsModule { }
