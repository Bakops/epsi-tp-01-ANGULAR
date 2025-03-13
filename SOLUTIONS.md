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

### Problème #2: Besoin de formatage de texte ✅

**Symptôme**: Les catégories de livres ne sont pas affichées correctement.
**Impact**: L'affichage n'est pas esthétique, les underscores sont visibles.
**Indice**: Vous devez créer un pipe personnalisé pour formater le texte.
