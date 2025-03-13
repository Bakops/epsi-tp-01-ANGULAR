import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TextFormatPipe } from './pipe/text-format.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, TextFormatPipe, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
}
