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

### Problème #6: Formulaire incomplet

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
