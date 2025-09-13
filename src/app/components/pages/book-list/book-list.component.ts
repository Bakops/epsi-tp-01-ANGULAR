import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { HighlightDirective } from '../../../directives/highlight.directive';
import { Book } from '../../../models/book.model';
import { LimitextPipe } from '../../../pipe/limitext.pipe';
import { TextFormatPipe } from '../../../pipe/text-format.pipe';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    TextFormatPipe,
    HighlightDirective,
    LimitextPipe,
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  data: any[] = [];
  searchTerm: string = '';
  constructor(
    private bookService: BookService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des livres:', err);
      },
    });
  }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id).subscribe({
      next: (updatedBook: Book) => {},
      error: (err: any) => {
        console.error('Erreur lors de la modification du favori:', err);
      },
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        console.log('Livre supprimé:', id);
        this.snackBar.open('Livre supprimé avec succées ! ✅', 'Fermer', {
          duration: 3000,
        });
      },
      error: (err: any) => {
        console.error('Erreur lors de la suppression du livre:', err);
      },
    });
  }

  goToBookDetails(id: string): void {
    this.router.navigate(['/books', id]);
  }
}
