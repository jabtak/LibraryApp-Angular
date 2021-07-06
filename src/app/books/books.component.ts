import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import {Books} from '../books/hero.model';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 
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
