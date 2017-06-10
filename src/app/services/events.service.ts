import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventsService {

  constructor(@Inject(Http) public http: Http) {
  }

  getEvents() {
    return this.makeRequest(`events/`);
  }

  getEvent(id: number) {
    const url = `https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/events/${id}/`;
    return this.http.get(url);
  }

  private makeRequest(path: string) {
    const url = `https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/${ path }`;
    return this.http.get(url)
      .map((res) => res.json());
  }

}
