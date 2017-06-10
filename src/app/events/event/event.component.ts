import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.scss'],
  providers: [EventsService]
})
export class EventComponent implements OnInit {
  article: any;

  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService) {
  }

  ngOnInit() {
    // subscribe to router event


    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.eventsService.getEvent(id)
      .subscribe(
        article => this.article = this.getArticle(article.text())
      );
    });
  }

  private getArticle(article: string) {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(article, 'text/html');
    const divs = htmlDoc.getElementsByClassName('site');
    return this.stripScripts(divs[0].innerHTML);
  }

  private stripScripts(s) {
    const div = document.createElement('div');
    div.innerHTML = s;
    const scripts = div.getElementsByTagName('script');
    let i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML;
  }
}
