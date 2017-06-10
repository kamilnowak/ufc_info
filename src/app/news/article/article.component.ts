import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [NewsService]
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit() {
    // subscribe to router event


    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.newsService.getArticle(id)
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
