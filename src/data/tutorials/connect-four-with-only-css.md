---
title: "Créer un Puissance 4 avec uniquement du CSS : Un défi créatif"
description: Découvrez comment réaliser un jeu de Puissance4 uniquement avec du CSS. Un défi technique et visuel passionnant qui vous permettra d'explorer des techniques CSS avancées et de créer un jeu interactif sans JavaScript. Un défi créatif pour les CSSéducteurs en herbe !
tags: ["CSS", "Jeu", "Défi CSS", "HTML"]
publishDate: 2025-01-24
proficiencyLevel: Avancé
author: rbryan91
relatedPosts:
  - advanced-css
  - html6-and-css4
---

## Créer un Puissance 4 avec uniquement du CSS : Un défi créatif

Le **Puissance 4** est l'un des jeux de société les plus populaires, connu pour sa simplicité et sa profondeur stratégique. Mais saviez-vous qu'il est possible de recréer ce jeu uniquement avec **HTML** et **CSS** ? Dans cet article, nous allons relever ce défi créatif en construisant un **Puissance 4** avec **uniquement du CSS**.

L'idée ici est de créer l'interface du jeu, gérer l'interface visuelle, et même l'interaction de base entre les joueurs sans recourir à JavaScript. Bien sûr, cela implique certaines limitations, mais cela permet de pousser l'utilisation de CSS à son maximum.

### Le Défi CSS : Pourquoi CSS ?

L'une des raisons pour lesquelles créer un jeu comme Puissance 4 avec CSS est intéressant, c'est que **CSS** a évolué au point où il permet de manipuler des éléments interactifs et visuels de manière avancée, sans avoir besoin de JavaScript. Cependant, cela impose de jouer avec des propriétés avancées comme les **pseudo-classes** et les **pseudo-éléments**.

Ce que nous allons explorer :

- **Disposition de la grille** avec **CSS Grid**.
- **Interaction visuelle** avec des pseudo-classes comme `:hover`, `:checked`, etc.
- **Changement dynamique des couleurs** pour représenter les pions rouges et jaunes.

---

## 1. Disposition de la Grille avec CSS Grid

La première étape consiste à définir la grille du jeu. **CSS Grid** est idéal pour cela, car il permet de créer une structure de type tableau facilement, avec des lignes et des colonnes parfaitement alignées.

```html
<div class="game-board">
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
</div>
```

### Styles CSS de base

Nous utilisons **CSS Grid** pour créer un tableau avec 7 colonnes et 6 lignes, comme dans le jeu réel.

```css
.game-board {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 5px;
  width: 350px;
  height: 300px;
  margin: auto;
}

.row {
  display: contents;
}

.cell {
  background-color: #f1f1f1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: auto;
  position: relative;
}

.cell:hover {
  background-color: #ddd;
}
```

Ici, chaque **cellule** représente une case du jeu. Nous utilisons **grid-template-columns** et **grid-template-rows** pour créer une grille dynamique de 7 colonnes et 6 lignes. Chaque cellule est un cercle, avec un **hover effect** pour l'interaction visuelle.

---

## 2. Ajouter des Pions : Interaction CSS avec :checked et :hover

Maintenant, pour simuler l'interaction, nous allons utiliser la pseudo-classe **`:hover`** et une technique intéressante avec **`input[type="radio"]`** et **`:checked`** pour gérer les **pions** des joueurs sans JavaScript.

### HTML : Création des Pions

Nous allons utiliser des cases cliquables sous forme de **radio buttons**, où chaque case de la grille pourra être remplie par un pion (rouge ou jaune). Cette technique permet de simuler une interaction de base dans le jeu.

```html
<div class="game-board">
  <div class="row">
    <div class="cell">
      <input type="radio" name="column1" class="red" />
    </div>
    <div class="cell">
      <input type="radio" name="column2" class="yellow" />
    </div>
    <!-- Repeat for other cells -->
  </div>
</div>
```

### Styles CSS pour les Pions

Les **inputs radio** seront cachés, et leurs états seront utilisés pour colorer les **cellules** en fonction du joueur.

```css
input[type="radio"] {
  display: none;
}

input.red:checked ~ .cell {
  background-color: red;
}

input.yellow:checked ~ .cell {
  background-color: yellow;
}
```

### Interactions Visuelles

Lorsque l'utilisateur clique sur une cellule, un **pion** rouge ou jaune sera ajouté à l'emplacement, selon l'input activé. Le changement de couleur simule l'ajout d'un pion.

---

## 3. Gérer les Rangs et les Colonnes : CSS Limité

Bien sûr, un véritable jeu de Puissance 4 implique de vérifier si un joueur a gagné en alignant quatre pions. Cependant, sans JavaScript, il est impossible de gérer la logique de **détection de victoire** et **l'interaction complexe**. Néanmoins, nous avons simulé une interaction visuelle de base.

Le plus grand défi ici est que CSS ne permet pas d'effectuer des calculs ou de stocker des états entre les actions. Le jeu ne pourra pas gérer les rangs de manière dynamique sans JavaScript. Néanmoins, le CSS pur permet de créer une belle interface pour que les joueurs jouent en ajoutant manuellement les pions.

---

## 4. Conclusion : Puissance 4 avec CSS, un Défi Réussi mais Limité

Créer un jeu de **Puissance 4** avec uniquement du **CSS** est une expérience intéressante qui pousse les limites de ce que l'on peut accomplir visuellement et interactivement avec du CSS pur. Bien que la logique du jeu (vérification des alignements, gestion des tours) ne puisse pas être réalisée sans **JavaScript**, ce défi permet de montrer comment utiliser **CSS Grid** et **les pseudo-classes** pour créer des interfaces de jeux simples mais dynamiques.

Si vous souhaitez aller plus loin, l'intégration de **JavaScript** pour la logique du jeu et des animations CSS pour un meilleur retour visuel seraient des ajouts parfaits pour rendre ce jeu plus interactif.

### Ressources Supplémentaires

- [Documentation sur CSS Grid - MDN](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Pseudo-Classes - MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)
