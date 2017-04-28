import {Routes} from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NewsComponent} from "./news/news.component";
import {MediaComponent} from "./media/media.component";
import {EventsComponent} from "./events/events.component";
import {FightersComponent} from "./fighters/fighters.component";

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
        path: 'fighters',
        component: FightersComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'media',
        component: MediaComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
