import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { TextFormatPipe } from '../../pipe/text-format.pipe';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextFormatPipe,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: 'add-book.component.html',
  styleUrls: ['add-book.component.css'],
})
export class AddBookComponent {
  @Output() bookAdded = new EventEmitter<any>();

  bookForm: FormGroup;
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

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      category: [[], Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: (err: any) => {
          console.error("Erreur lors de l'ajout du livre", err);
        },
      });
      this.bookAdded.emit(this.bookForm.value);
      this.bookForm.reset();
    }
  }
}
