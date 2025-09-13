import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../../../directives/highlight.directive';
import { LimitextPipe } from '../../../pipe/limitext.pipe';
import { TextFormatPipe } from '../../../pipe/text-format.pipe';
import { BookService } from '../../../services/book.service';
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

  booksByCategory: { [category: string]: any[] } = {};

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.categories.forEach((category) => {
        this.booksByCategory[category] = [];
      });

      books.forEach((book) => {
        if (Array.isArray(book.category)) {
          book.category.forEach((cat) => {
            if (this.booksByCategory[cat]) {
              this.booksByCategory[cat].push(book);
            }
          });
        } else if (
          typeof book.category === 'string' &&
          this.booksByCategory[book.category]
        ) {
          this.booksByCategory[book.category].push(book);
        }
      });
    });
  }

  hasBooksInCategory(category: string): boolean {
    return (
      this.booksByCategory[category] &&
      this.booksByCategory[category].length > 0
    );
  }
}
