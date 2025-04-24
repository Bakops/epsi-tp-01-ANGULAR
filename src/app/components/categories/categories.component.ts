import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../../directives/highlight.directive';
import { LimitextPipe } from '../../pipe/limitext.pipe';
import { TextFormatPipe } from '../../pipe/text-format.pipe';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    TextFormatPipe,
    RouterModule,
    HighlightDirective,
    LimitextPipe,
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [
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

  // Objet pour stocker les livres par catégorie
  booksByCategory: { [category: string]: any[] } = {};

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      // Initialiser l'objet booksByCategory avec des tableaux vides pour chaque catégorie
      this.categories.forEach((category) => {
        this.booksByCategory[category] = [];
      });

      // Parcourir tous les livres et les ajouter aux catégories appropriées
      books.forEach((book) => {
        // Si book.category est un tableau (pour les livres avec plusieurs catégories)
        if (Array.isArray(book.category)) {
          book.category.forEach((cat) => {
            if (this.booksByCategory[cat]) {
              this.booksByCategory[cat].push(book);
            }
          });
        }
        // Si book.category est une chaîne de caractères
        else if (
          typeof book.category === 'string' &&
          this.booksByCategory[book.category]
        ) {
          this.booksByCategory[book.category].push(book);
        }
      });
    });
  }

  // Méthode pour vérifier si une catégorie a des livres
  hasBooksInCategory(category: string): boolean {
    return (
      this.booksByCategory[category] &&
      this.booksByCategory[category].length > 0
    );
  }
}
