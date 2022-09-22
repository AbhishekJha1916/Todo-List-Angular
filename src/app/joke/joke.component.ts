import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke: any;

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }

  getAJoke = () => {
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe((result:any) => (this.joke = result.value));
  }

}
