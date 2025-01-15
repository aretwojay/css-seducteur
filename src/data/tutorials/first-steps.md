---
title: Premier pas avec CSS
description: Découvrez les bases de CSS pour contrôler l'apparence de vos pages web. Apprenez à ajouter du CSS à votre HTML, à utiliser des sélecteurs et des propriétés courantes, et à créer des mises en page simples.
tags: ["CSS", "Basique"]
publishDate: 2024-08-21
proficiencyLevel: Débutant
author: r2j
relatedPosts:
  - introduction-to-css
---

## Premiers Pas avec CSS

Bienvenue dans vos premiers pas pour apprendre CSS (Cascading Style Sheets) ! CSS est un outil puissant qui permet de contrôler l’apparence et la mise en page de vos pages web. Ce guide vous aidera à commencer avec les bases.

---

## Qu'est-ce que CSS ?

CSS est un langage de feuille de style utilisé pour décrire la présentation d’un document écrit en HTML ou XML. Il vous permet de séparer le contenu (HTML) de la présentation (CSS), rendant vos pages web plus flexibles et faciles à maintenir.

---

## Ajouter du CSS à votre HTML

Il existe trois façons d’ajouter du CSS à vos documents HTML :

1. **CSS en ligne** : Utiliser l’attribut `style` directement dans les balises HTML.

   ```html
   <p style="color: blue;">Ceci est un paragraphe bleu.</p>
   ```

2. **CSS interne** : Utiliser la balise `<style>` dans la section `<head>` de votre document HTML.

   ```html
   <head>
     <style>
       p {
         color: blue;
       }
     </style>
   </head>
   ```

3. **CSS externe** : Lier un fichier CSS externe à l’aide de la balise `<link>`.

   ```html
   <head>
     <link rel="stylesheet" type="text/css" href="styles.css" />
   </head>
   ```

   Exemple de contenu dans `styles.css` :

   ```css
   p {
     color: green;
   }
   ```

Le CSS externe est la méthode privilégiée pour les projets de grande envergure, car elle permet de garder vos styles organisés et réutilisables.

---

## Syntaxe de Base du CSS

Une règle CSS est composée de **sélecteurs** et de **déclarations** :

- Les **sélecteurs** définissent les éléments HTML auxquels le style s'applique.
- Les **déclarations** contiennent une propriété et une valeur pour définir le style.

```css
sélecteur {
  propriété: valeur;
}
```

### Exemple

```css
h1 {
  color: purple;
  font-size: 24px;
}
```

Cette règle CSS définit que le texte des éléments `<h1>` sera de couleur violette avec une taille de police de 24 pixels.

---

## Propriétés CSS Courantes

Voici quelques propriétés CSS fréquemment utilisées :

1. **Couleur** : Définit la couleur du texte.

   ```css
   color: red;
   ```

2. **Taille de la police** : Définit la taille du texte.

   ```css
   font-size: 18px;
   ```

3. **Couleur de fond** : Change la couleur d’arrière-plan d’un élément.

   ```css
   background-color: lightblue;
   ```

4. **Marge** : Ajoute de l’espace à l’extérieur de la bordure d’un élément.

   ```css
   margin: 20px;
   ```

5. **Remplissage (Padding)** : Ajoute de l’espace à l’intérieur de la bordure d’un élément, autour de son contenu.

   ```css
   padding: 10px;
   ```

6. **Bordure** : Ajoute une bordure autour d’un élément.

   ```css
   border: 2px solid black;
   ```

---

## Sélecteurs CSS

Les sélecteurs permettent de cibler les éléments HTML à styliser. Voici quelques sélecteurs clés :

1. **Sélecteur universel** :
   Cible tous les éléments d’une page.

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

2. **Sélecteur de type** :
   Cible tous les éléments d’un type donné, comme `<p>`.

   ```css
   p {
     color: blue;
   }
   ```

3. **Sélecteur de classe** :
   Cible tous les éléments avec une classe donnée.

   ```css
   .highlight {
     background-color: yellow;
   }
   ```

   HTML correspondant :

   ```html
   <p class="highlight">Ce texte a un fond jaune.</p>
   ```

4. **Sélecteur d’ID** :
   Cible un élément spécifique avec un ID unique.

   ```css
   #header {
     font-size: 24px;
   }
   ```

   HTML correspondant :

   ```html
   <h1 id="header">Titre unique</h1>
   ```

---

## Conclusion

Ces bases vous permettent de commencer à utiliser CSS pour styliser vos pages web. En continuant votre apprentissage, vous découvrirez de nombreuses autres propriétés et techniques pour créer des conceptions modernes, interactives et réactives. Bonne exploration !
