import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormField, MatInput} from '@angular/material/input';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatInput, HttpClientModule, MatFormField, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('ApiCallComponent initialized');
  }
  title = 'url-shortener';
  constructor(private http: HttpClient) {}
  getMessage() {
    return this.http.get(
      'http://localhost:4200/shorten').subscribe({
      next: (response) => {
        console.log('API Response:', response); // Handle the response
      }});
  }

  onSubmit() {
    this.getMessage();
  }
}
