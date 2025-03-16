import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'biblioTech.';
  categories = [
    'Science-Fiction',
    'Fantasy',
    'Thriller',
    'Policier',
    'Historique',
    'Biographie',
    'Autobiographie',
    'Essai',
    'Poésie',
    'Théâtre',
    'Roman',
    'Nouvelle',
  ];

  books = [
    {
      title: 'Dune',
      author: 'Frank Herbert',
      description: '...',
      category: ['Science-Fiction'],
    },
    {
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      description: '...',
      category: ['Fantasy'],
    },
    // Ajoutez d'autres livres ici
  ];

  getBooksByCategory(category: string) {
    return this.books.filter((book) => book.category.includes(category));
  }

  addBook(book: any) {
    this.books.push(book);
  }
}
