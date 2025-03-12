import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { NgModule } from '@angular/core';

// TODO 5 : Créer une route pour la page détail d'un livre
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
