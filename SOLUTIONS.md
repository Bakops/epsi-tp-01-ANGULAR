## SOLUTIONS TROUVER

## Problème #1: Navigation incorrecte ✅

**Symptôme**: Certains liens rechargent complètement la page au lieu d'utiliser le routeur Angular.
**Impact**: L'expérience utilisateur est dégradée, l'application perd son état.
**Indice**: Vérifiez comment les liens sont définis dans les templates HTML, en particulier les balises `<a>`.

### Solutions

Remplacer `href` par `routerLink` pour fair eun sorte que les liens fonctionne sans recharger complèteent la page:

```
<header class="header">
  <h1>
    <a routerLink="/" routerLinkActive="active">
      <span>{{ title | textFormat }}</span>
    </a>
  </h1>
  <nav>
    <ul>
      <li>
        <a routerLink="/">Accueil</a>
      </li>
      <li>
        <a routerLink="/books">Ma Bibliothèque</a>
      </li>
    </ul>
  </nav>
</header>

```

## Problème #2: Besoin de formatage de texte ✅

**Symptôme**: Les catégories de livres ne sont pas affichées correctement.
**Impact**: L'affichage n'est pas esthétique, les underscores sont visibles.
**Indice**: Vous devez créer un pipe personnalisé pour formater le texte.

### Solutions

1. Créer un pipe qui va permettre le formatage (Première en majuscule et les underscores replacer par des espaces)

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat',
})
export class TextFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    value = value.replace(/_/g, ' ');

    return value
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return word.toLowerCase();
        }
      })
      .join(' ');
  }
}

```

2. Afficher les différente catégorie

```
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

```

```
<div>
  <main class="main-content">
    <h1>Catégories de Livres</h1>
    <ul class="categories-list">
      <li
        *ngFor="let category of categories"
        [ngClass]="category | textFormat | lowercase"
      >
        {{ category | textFormat }}
      </li>
    </ul>
  </main>
</div>

```

## Problème #3: Structure de page incomplète ✅

**Symptôme**: L'application manque de modularité et de réutilisation de code.
**Impact**: La maintenance du code est difficile, des composants sont dupliqués.
**Indice**: Identifiez les éléments communs qui pourraient être extraits en composants réutilisables.

### Solutions

1. Créer les composant `header` et `footer` pour extraire le code de ces deux élément du fichier `app.component.html`
   commande pour créer les composant: `ng g c header` et `ng g c footer`.

2. intégrer les composant dans le template principale de l'appplication

```
<app-header></app-header>

<main class="main-content">
  <router-outlet></router-outlet>
</main>

<app-footer></app-footer>

```

### Problème #4: Pages non affichées ✅

**Symptôme**: Certaines pages ne s'affichent pas correctement.
**Impact**: Les utilisateurs ne peuvent pas accéder à certaines fonctionnalités.
**Indice**: Vérifiez la configuration des routes et la structure des composants.

### Solutions

1. Modifié le fichier `app.routes.ts` pour ajouter et vérifier les routes des diéfférente fonctionnalités de l'application.

```
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books/list', component: BookListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', redirectTo: '' },
];

```

2. Ajouter les routes dns mon `header.componenets.html`.

```
<nav>
    <ul>
      <li>
        <a routerLink="/" routerLinkActive="active">Accueil</a>
      </li>
      <li>
        <a routerLink="/books/list" routerLinkActive="active">Bibliothèque</a>
      </li>
      <li>
        <a routerLink="/categories" routerLinkActive="active">Categories</a>
      </li>
      <li>
        <a routerLink="/books/add" routerLinkActive="active"
          >Ajouter un livre</a
        >
      </li>
    </ul>
  </nav>
```

### Problème #5: Route manquante ✅

**Symptôme**: La page de détail d'un livre n'est pas accessible.
**Impact**: Les utilisateurs ne peuvent pas voir les détails d'un livre.
**Indice**: Vous devez créer une route dans le fichier de configuration des routes.

### Solutions

1. Créer une routes pour le détails de chaque livre.

```
{ path: 'books/:id', component: BookDetailComponent },

```

2. intégrer la routes sur un boutons détail de chaque livre dans le composant `book-list.component.html`.

```
<button routerLink="/books/{{ book.id }}" class="details-button">
          Détails
</button>

```

### Problème #6: Formulaire incomplet ✅

**Symptôme**: Le formulaire d'ajout de livre n'est pas implémenté.
**Impact**: Les utilisateurs ne peuvent pas ajouter de nouveaux livres.
**Indice**: Vous devez créer un formulaire avec les champs nécessaires.

### Solutions

1. Créer un composant pour le formulaire d'ajout de livre (En utilsiant Angular Material).

```
<div class="form-container">
  <h1>Ajouter un livre</h1>
  <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
    <div class="input_formulaire">
      <mat-form-field appearance="fill">
        <mat-label>Titre du livre</mat-label>
        <input matInput type="text" formControlName="title" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Nom de l'auteur</mat-label>
        <input matInput type="text" formControlName="author" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Description du livre</mat-label>
        <input matInput type="text" formControlName="description" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Catégorie</mat-label>
        <mat-select formControlName="category" multiple>
          <mat-option *ngFor="let category of categories" [value]="category">
            {{ category | textFormat }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <button mat-raised-button color="primary" type="submit">
      Ajouter le livre
    </button>
  </form>
</div>

```

2. Créer un service pour gérer l'ajout de livre.

```
addBook(book: Partial<Book>): Observable<Book> {
  const newBook: Book = {
    id: (BOOKS.length + 1).toString(),
    title: book.title || '',
    author: book.author || '',
    description: book.description || '',
    category: book.category || '',
    rating: 0,
    isFavorite: false
  };

  BOOKS.push(newBook);

  return of(newBook).pipe(delay(300));
}

```

### Problème #7: Validations manquantes ✅

**Symptôme**: Le formulaire accepte des données invalides.
**Impact**: Des données incomplètes ou incorrectes peuvent être soumises.
**Indice**: Ajoutez des validations aux champs du formulaire.

### Solutions

1. Ajouter des validateurs intégrés d'Angular pour s'assurer que les champs sont remplis et valides. ( Utiliser `Validators.required` pour les champ obligatoire et `Validators.minLength` pour le titre et l'auteur)

```
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private bookService: BookService
  ) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      description: ['', Validators.required],
      category: [[], Validators.required],
    });
  }

```

2. Mettre à Jour la template pour afficher les erreurs de validation.

```
<div class="form-container">
  <h1>Ajouter un livre</h1>
  <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
    <div class="input_formulaire">
      <mat-form-field appearance="fill">
        <mat-label>Titre du livre</mat-label>
        <input matInput type="text" formControlName="title" />
        <mat-error
          *ngIf="
            bookForm.get('title')?.hasError('required') &&
            bookForm.get('title')?.touched
          "
        >
          Le titre est requis.
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Nom de l'auteur</mat-label>
        <input matInput type="text" formControlName="author" />
        <mat-error
          *ngIf="
            bookForm.get('author')?.hasError('required') &&
            bookForm.get('author')?.touched
          "
        >
          Le nom de l'auteur est requis.
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Description du livre</mat-label>
        <input matInput type="text" formControlName="description" />
        <mat-error
          *ngIf="
            bookForm.get('description')?.hasError('required') &&
            bookForm.get('description')?.touched
          "
        >
          La description est requise.
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Catégorie</mat-label>
        <mat-select formControlName="category" multiple>
          <mat-option *ngFor="let category of categories" [value]="category">
            {{ category | textFormat }}
          </mat-option>
        </mat-select>
        <mat-error
          *ngIf="
            bookForm.get('category')?.hasError('required') &&
            bookForm.get('category')?.touched
          "
        >
          Au moins une catégorie doit être sélectionnée.
        </mat-error>
      </mat-form-field>
    </div>

    <button mat-raised-button color="primary" type="submit">
      Ajouter le livre
    </button>
  </form>
</div>

```

### Problème #8: Navigation manquante ✅

**Symptôme**: Impossible de revenir à la page précédente depuis certaines vues.
**Impact**: L'utilisateur se retrouve bloqué dans certaines pages.
**Indice**: Ajoutez un bouton de retour et implémentez la navigation.

### Solutions

1. Réutliser le router link pour revenir à la page précédente.

```
 <button class="back-button" routerLink="/books">
        <i class="fas fa-arrow-left"></i> Retour
      </button>
```

### Problème #9: Erreur dans la console ✅

**Symptôme**: Erreur "Cannot read properties of undefined" dans la console.
**Impact**: L'application peut planter lorsque les données ne sont pas chargées.
**Indice**: Gérez correctement les données asynchrones avant d'y accéder.

### Solutions

1. Créer une méthode pour gérer les données asynchrones avant d'y accéder.

```
 async loadBooks() {
    try {
      const data = await this.bookService.getBooks().toPromise();
      if (data) {
        this.books = data;
      }
    } catch (error) {
      console.error('Erreur lors du chargement des livres', error);
    }
  }
```

2. Utiliser ngIf pour gérer les données asynchrones dans le template.

```
<div *ngIf="books && books.length > 0; else noBooks">

```

### Problème #10: Directive non appliquée ✅

**Symptôme**: Certains éléments ne sont pas mis en évidence comme prévu.
**Impact**: L'expérience utilisateur est dégradée, manque d'indications visuelles.
**Indice**: Appliquez la directive highlight aux éléments appropriés.

### Solutions

1. Définir une directive `highlight` pour mettre en évidence les éléments.

```
 import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
}

```

2. Déclarer la directive dans le module.

```
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Book } from '../../models/book.model';
import { TextFormatPipe } from '../../pipe/text-format.pipe';
import { BookService } from '../../services/book.service';
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
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})

```

3. Appliquer la directive dans le template.

```
<h2 appHighlight>{{ book.title }}</h2>

```

### Problème #11: Bouton non fonctionnel ✅

**Symptôme**: Certains boutons ne réagissent pas aux clics.
**Impact**: Les actions ne peuvent pas être effectuées.
**Indice**: Vérifiez les gestionnaires d'événements associés aux boutons.

### Solutions

1. Créer des évènement lié au méthodes du composant ex: bouton au clics

```
deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks(); // Recharger la liste après suppression
    });
  }

```

2. Déclarer la directive dans le module.

```
<button (click)="deleteBook()">Supprimer</button>

```

### Problème #12: Données non affichées ✅

**Symptôme**: Les données sont chargées mais n'apparaissent pas dans l'interface.
**Impact**: L'utilisateur ne voit pas les informations importantes.
**Indice**: Vérifiez comment les données sont passées et affichées dans les templates.

### Solutions

1. Vérifier si les données sont bien chargées dans le composant.

```
  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
        console.log('Données chargées:', this.books); // Pour le débogage
      },
      error: (err) => {
        console.error('Erreur lors du chargement des livres:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

```

2. Bien afficher les données dans le template.

```
<div *ngIf="books && books.length > 0; else noBooks">
    <div class="book-card" *ngFor="let book of books">
      <div class="book-info">
        <h2 appHighlight>{{ book.title }}</h2>
        <!-- TODO 14: Appliquer la directive highlight à ce champ -->
        <p>
          <strong><i>Auteur:</i></strong> {{ book.author }}
        </p>
        <p>
          <!-- TODO 15: Afficher la description du livre en utilisant un pour limiter à 20 caractères et ajouter des points de suspension si la description est plus longue.
           Il faut utiliser un pipe existant ou en créer un nouveau pipe. Libre choix -->
          <strong><i>Description:</i></strong>
          {{ book.description }}
        </p>
        <p>
          <strong><i>Catégorie:</i></strong> {{ book.category | textFormat }}
        </p>
        <p>
          <strong><i>Note:</i></strong> {{ book.rating }}/5
        </p>
        <p>
          <strong><i>Favori:</i></strong> {{ book.isFavorite ? "Oui" : "Non" }}
        </p>
      </div>
```

### Problème #13: Descriptions trop longues ✅

**Symptôme**: Les descriptions des livres prennent trop de place.
**Impact**: L'interface utilisateur est encombrée et moins lisible.
**Indice**: Utilisez ou créez un pipe pour limiter la longueur du texte affiché.

### Solutions

1. Créer un pipe pour tronquer la description `Limitext`.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitext',
})
export class LimitextPipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 100,
    completeWords: boolean = false,
    ellipsis: string = '...'
  ): string {
    if (!value) return '';

    if (value.length <= limit) {
      return value;
    }

    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }

    return value.substring(0, limit) + ellipsis;
  }
}

```

2. Déclarer le pipe `Limitext` dans le module.

```
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Book } from '../../models/book.model';
import { LimitextPipe } from '../../pipe/limitext.pipe';
import { TextFormatPipe } from '../../pipe/text-format.pipe';
import { BookService } from '../../services/book.service';

@Component
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

```

3. Intégrer le pipe dans le composant.

```
    <p>
      <strong><i>Description:</i></strong>
      {{ book.description | limitext : 20 }}
    </p>

```

### Problème #14: Retour utilisateur manquant ✅

**Symptôme**: Aucune confirmation n'est affichée après certaines actions.
**Impact**: L'utilisateur ne sait pas si son action a réussi ou échoué.
**Indice**: Ajoutez des alertes ou notifications pour informer l'utilisateur.

### Solutions `add-book`

1. Importer l'éléement snack-bar de Angular material dans dasn le module et creer une méthode pour afficher une notification lors de la création d'un nouveaux livre.

```
import { MatSnackBar } from '@angular/material/snack-bar';

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

```

2. Lier cette méthode à l'événement ngSubmit du formulaire pour afficher une notification lors de la création d'un nouveaux livre.

```
<form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
```

### Solutions `book-list`

```
import { MatSnackBar } from '@angular/material/snack-bar';

toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id).subscribe({
      next: (updatedBook: Book) => {
      },
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

```

```
<button (click)="toggleFavorite(book)" class="favorite-button">
          <mat-icon>{{
            book.isFavorite ? "favorite" : "favorite_border"
          }}</mat-icon>
          {{ book.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris" }}
        </button>
        <button (click)="deleteBook(book.id)" class="delete-button">
          Supprimer
        </button>
```

### Problème #16: Directive incomplète ✅

**Symptôme**: La directive highlight ne fonctionne pas comme prévu.
**Impact**: Certains éléments ne sont pas mis en évidence correctement.
**Indice**: Modifiez la directive pour qu'elle affecte à la fois la couleur de fond et le poids du texte.

### Solutions

1. Modifier la directive `highlight` pour qu'elle affecte à la fois la couleur de fond et le poids du texte.

```
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
  }
}

```

2. Appliquer la directive dans le template.

```
<form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
```
