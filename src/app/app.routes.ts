import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { BookDetailComponent } from './components/pages/book-detail/book-detail.component';
import { BookListComponent } from './components/pages/book-list/book-list.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books/list', component: BookListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
