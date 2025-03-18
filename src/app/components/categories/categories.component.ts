import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextFormatPipe } from '../../pipe/text-format.pipe';
@Component({
  selector: 'app-categories',
  imports: [CommonModule, TextFormatPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
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
    { title: 'Dune', author: 'Frank Herbert', category: 'Science-Fiction' },
    {
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
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
