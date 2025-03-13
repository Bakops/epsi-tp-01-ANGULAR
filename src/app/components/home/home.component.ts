import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextFormatPipe } from '../../pipe/text-format.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TextFormatPipe],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  title = 'Bienvenue sur BiblioTech';
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
      category: 'Science-Fiction',
    },
    {
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      description: '...',
      category: 'Fantasy',
    },
    // Ajoutez d'autres livres ici
  ];

  getBooksByCategory(category: string) {
    return this.books.filter((book) => book.category === category);
  }

  addBook(book: any) {
    this.books.push(book);
  }
}
