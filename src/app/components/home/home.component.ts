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
}
