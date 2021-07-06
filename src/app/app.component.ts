import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import {Router,NavigationStart,NavigationError,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FsdFirstApp';
 
}

