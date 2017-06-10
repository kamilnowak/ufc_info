import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  news: any;

  constructor(private newsService: NewsService) {
    newsService.getNews()
      .subscribe(
       news => this.news = news
      );
  }

  ngOnInit() {
  }

}
