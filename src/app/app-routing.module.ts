import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent} from '../app/books/books.component';

import { AuthorComponent} from '../app/author/author.component';
import { SignupComponent} from '../app/signup/signup.component';
import { SigninComponent} from '../app/signin/signin.component';



const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  

 }
