import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'web';

  user: any;

  constructor(private http: HttpClient) {
    this.http.get('/api/user').subscribe(data => this.user = data);
  }
}
