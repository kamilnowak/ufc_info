import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import {NewsComponent} from './news.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [NewsComponent, ArticleComponent],
  exports: [NewsComponent, ArticleComponent]
})
export class NewsModule { }
