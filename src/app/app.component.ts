import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>User</h1>
    <p>{{user | json}}</p>
  `,
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('api/user').subscribe(data => this.user = data);
  }
}
