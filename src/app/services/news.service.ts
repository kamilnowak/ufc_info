import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {

  constructor(@Inject(Http) public http: Http) {
  }

  getNews() {
    return this.makeRequest(`news/`);
  }

  getArticle(id: number) {
    const url = `https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/news/${id}/`;
    return this.http.get(url);
  }

  private makeRequest(path: string) {
    const url = `https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/${ path }`;
    return this.http.get(url)
      .map((res) => res.json());
  }

}
