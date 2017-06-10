import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FightersComponent } from './fighters.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [FightersComponent],
  exports: [FightersComponent]
})
export class FightersModule { }
