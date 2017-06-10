import {Routes} from '@angular/router';

import {WelcomeComponent} from './core/welcome/welcome.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {NewsComponent} from './news/news.component';
import {EventsComponent} from './events/events.component';
import {FightersComponent} from './fighters/fighters.component';
import {ArticleComponent} from './news/article/article.component';
import {EventComponent} from './events/event/event.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'news/:id',
        component: ArticleComponent
    },
    {
        path: 'fighters',
        component: FightersComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'events/:id',
        component: EventComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
