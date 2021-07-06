import { Component, OnInit } from '@angular/core';
import {Books} from '../books/hero.model';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  bookDetails :Books[];
  constructor() { 
   this.bookDetails = [new Books()];
  }
  ngOnInit(): void {
    this.bookDetails = [
      {
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: 'book1.jpg'
    },
    {
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: 'book1.jpg'
    }
    ]
  }

}
