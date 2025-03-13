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
