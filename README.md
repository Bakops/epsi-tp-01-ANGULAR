# TP1 : Chasse aux bugs Angular

## Contexte

Vous êtes développeur front-end chez BiblioTech, une entreprise qui a développé une application web de gestion de bibliothèque personnelle. Cette application permet aux utilisateurs de consulter leur collection de livres, d'ajouter de nouveaux livres, et de gérer leurs favoris.

Malheureusement, l'application contient plusieurs bugs et fonctionnalités incomplètes qui empêchent son bon fonctionnement. L'équipe de développement précédente a laissé des commentaires TODO dans le code pour marquer les problèmes à résoudre.

Votre mission est d'identifier tous ces problèmes, de comprendre leur nature, et de les corriger un par un.

## Objectifs pédagogiques

- Comprendre et manipuler les concepts fondamentaux d'Angular:
  - Composants
  - Directives et leur utilisation sur différents éléments
  - Pipes (existants et création de nouveaux pipes)
  - Services et gestion des données
  - Routing et navigation
  - Formulaires et validation
  - Communication entre composants

## Instructions

1. Clonez le dépôt de l'application et installez les dépendances
2. Lancez l'application (`ng serve`) et parcourez ses différentes fonctionnalités
3. Cherchez tous les commentaires "TODO" dans le code
4. Pour chaque problème trouvé:
   - Comprenez le problème et son impact sur l'application
   - Trouvez une solution appropriée
   - Implémentez la correction
   - Testez votre solution dans le navigateur
5. Documentez vos corrections dans un fichier SOLUTIONS.md en expliquant:
   - La nature du problème
   - Votre solution technique
   - Les concepts Angular utilisés

## Liste des problèmes à résoudre

### Problème #1: Navigation incorrecte

**Symptôme**: Certains liens rechargent complètement la page au lieu d'utiliser le routeur Angular.
**Impact**: L'expérience utilisateur est dégradée, l'application perd son état.
**Indice**: Vérifiez comment les liens sont définis dans les templates HTML, en particulier les balises `<a>`.

### Problème #2: Besoin de formatage de texte

**Symptôme**: Les catégories de livres ne sont pas affichées correctement.
**Impact**: L'affichage n'est pas esthétique, les underscores sont visibles.
**Indice**: Vous devez créer un pipe personnalisé pour formater le texte.

### Problème #3: Structure de page incomplète

**Symptôme**: L'application manque de modularité et de réutilisation de code.
**Impact**: La maintenance du code est difficile, des composants sont dupliqués.
**Indice**: Identifiez les éléments communs qui pourraient être extraits en composants réutilisables.

### Problème #4: Pages non affichées

**Symptôme**: Certaines pages ne s'affichent pas correctement.
**Impact**: Les utilisateurs ne peuvent pas accéder à certaines fonctionnalités.
**Indice**: Vérifiez la configuration des routes et la structure des composants.

### Problème #5: Route manquante

**Symptôme**: La page de détail d'un livre n'est pas accessible.
**Impact**: Les utilisateurs ne peuvent pas voir les détails d'un livre.
**Indice**: Vous devez créer une route dans le fichier de configuration des routes.

### Problème #6: Formulaire incomplet

**Symptôme**: Le formulaire d'ajout de livre n'est pas implémenté.
**Impact**: Les utilisateurs ne peuvent pas ajouter de nouveaux livres.
**Indice**: Vous devez créer un formulaire avec les champs nécessaires.

### Problème #7: Validations manquantes

**Symptôme**: Le formulaire accepte des données invalides.
**Impact**: Des données incomplètes ou incorrectes peuvent être soumises.
**Indice**: Ajoutez des validations aux champs du formulaire.

### Problème #8: Navigation manquante

**Symptôme**: Impossible de revenir à la page précédente depuis certaines vues.
**Impact**: L'utilisateur se retrouve bloqué dans certaines pages.
**Indice**: Ajoutez un bouton de retour et implémentez la navigation.

### Problème #9: Erreur dans la console

**Symptôme**: Erreur "Cannot read properties of undefined" dans la console.
**Impact**: L'application peut planter lorsque les données ne sont pas chargées.
**Indice**: Gérez correctement les données asynchrones avant d'y accéder.

### Problème #10: Directive non appliquée

**Symptôme**: Certains éléments ne sont pas mis en évidence comme prévu.
**Impact**: L'expérience utilisateur est dégradée, manque d'indications visuelles.
**Indice**: Appliquez la directive highlight aux éléments appropriés.

### Problème #11: Bouton non fonctionnel

**Symptôme**: Certains boutons ne réagissent pas aux clics.
**Impact**: Les actions ne peuvent pas être effectuées.
**Indice**: Vérifiez les gestionnaires d'événements associés aux boutons.

### Problème #12: Données non affichées

**Symptôme**: Les données sont chargées mais n'apparaissent pas dans l'interface.
**Impact**: L'utilisateur ne voit pas les informations importantes.
**Indice**: Vérifiez comment les données sont passées et affichées dans les templates.

### Problème #13: Descriptions trop longues

**Symptôme**: Les descriptions des livres prennent trop de place.
**Impact**: L'interface utilisateur est encombrée et moins lisible.
**Indice**: Utilisez ou créez un pipe pour limiter la longueur du texte affiché.

### Problème #14: Retour utilisateur manquant

**Symptôme**: Aucune confirmation n'est affichée après certaines actions.
**Impact**: L'utilisateur ne sait pas si son action a réussi ou échoué.
**Indice**: Ajoutez des alertes ou notifications pour informer l'utilisateur.

### Problème #15: Erreur d'affichage du titre

**Symptôme**: Les titres ne s'affichent pas correctement.
**Impact**: L'information présentée est incorrecte ou mal formatée.
**Indice**: Vérifiez comment les titres sont manipulés et affichés.

### Problème #16: Directive incomplète

**Symptôme**: La directive highlight ne fonctionne pas comme prévu.
**Impact**: Certains éléments ne sont pas mis en évidence correctement.
**Indice**: Modifiez la directive pour qu'elle affecte à la fois la couleur de fond et le poids du texte.

## Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── add-book/
│   │   ├── book-detail/
│   │   ├── book-list/
│   │   └── home/
│   ├── directives/
│   │   └── highlight.directive.ts
│   │   └── highlight.directive.spec.ts
│   ├── pipes/
│   │   └── format.pipe.ts (à créer)
│   ├── services/
│   │   └── book.service.ts
│   ├── mocks/
│   │   └── books.mock.ts
│   ├── models/
│   │   └── book.model.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.component.ts
│   └── app.component.html
│   └── app.component.css
│   └── app.component.spec.ts
├── index.html
├── main.ts
├── styles.css
```

## Modèle de données Book

```typescript
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  rating: number;
  isFavorite: boolean;
}
```

## Fonctionnalités attendues après correction

1. Navigation fluide sans rechargement de page
2. Affichage correct des catégories de livres (première lettre majuscule, espaces au lieu des underscores)
3. Structure modulaire avec composants réutilisables pour le header et le footer
4. Affichage correct de toutes les pages
5. Accès aux détails d'un livre via une route dédiée
6. Formulaire d'ajout de livre fonctionnel avec validations
7. Navigation possible entre les pages (retour à la page précédente)
8. Aucune erreur dans la console
9. Mise en évidence des éléments importants grâce à la directive highlight
10. Tous les boutons fonctionnels
11. Affichage correct des données dans l'interface
12. Descriptions limitées en longueur avec points de suspension
13. Notifications après les actions importantes (ajout, modification, suppression)
14. Affichage correct des titres (en majuscules quand nécessaire)
15. Mise en évidence améliorée (texte en gras pour les éléments favoris)

## Notation

- Chaque correction de problème rapporte des points
- Les problèmes marqués comme "Bonus point" rapportent des points supplémentaires
- La clarté et la qualité des explications dans le fichier SOLUTIONS.md sont prises en compte
