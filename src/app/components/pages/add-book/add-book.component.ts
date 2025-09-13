import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TextFormatPipe } from '../../../pipe/text-format.pipe';
import { BookService } from '../../../services/book.service';

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
    MatCheckboxModule,
    MatSliderModule,
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
    private router: Router,
    private snackBar: MatSnackBar,
    private bookService: BookService
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      category: [[], Validators.required],
      isFavorite: [false],
      rating: [0],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: () => {
          this.bookAdded.emit(this.bookForm.value);
          this.snackBar.open('Livre ajouté avec succès ! ✅', 'Fermer', {
            duration: 3000,
          });
          this.router.navigate(['/books']);
        },
        error: (err: any) => {
          console.error("Erreur lors de l'ajout du livre", err);
        },
      });
    }
  }
}
