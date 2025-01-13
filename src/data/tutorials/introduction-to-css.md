---
title: Introduction au CSS
description: Apprenez les bases du CSS pour styliser vos pages web et créer des designs attrayants. Découvrez les sélecteurs, les propriétés courantes et les techniques responsives.
tags: ["CSS", "Basique", "Développement Web"]
publishDate: 2024-12-10
proficiencyLevel: Débutant
author: r2j
relatedPosts:
  - first-steps
  - discover-tailwind
---

# Introduction au CSS

Le CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour contrôler l’apparence et la mise en page des éléments HTML sur une page web. En apprenant le CSS, vous pouvez transformer un HTML simple en sites visuellement attrayants et interactifs.

## Qu'est-ce que le CSS ?

Le CSS définit comment les éléments HTML doivent être affichés sur un écran, du papier ou d'autres médias. Il sépare le contenu (HTML) de la présentation (CSS), ce qui facilite la maintenance et le style des sites web.

### Exemple de HTML et CSS :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemple de CSS</title>
    <style>
      body {
        background-color: #f4f4f4;
        font-family: Arial, sans-serif;
        color: #333;
      }
      h1 {
        color: #007bff;
        text-align: center;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <h1>Bienvenue au CSS</h1>
    <p>
      Ceci est un exemple simple d'utilisation du CSS pour styliser une page
      web.
    </p>
  </body>
</html>
```

Dans cet exemple :

- La balise `body` est stylée avec un fond gris clair, une police personnalisée et une couleur de texte.
- La balise `h1` a une couleur bleue et un texte centré.
- La balise `p` a une taille de police et un espacement entre les lignes ajustés.

---

## Les Types de CSS

Il existe trois principales manières d’appliquer du CSS au HTML :

1. **CSS Inline** : Style appliqué directement sur un élément HTML avec l’attribut `style`.

   ```html
   <p style="color: red;">Ce texte est rouge.</p>
   ```

2. **CSS Interne** : Style écrit dans une balise `<style>` dans la section `<head>` du HTML.

   ```html
   <style>
     p {
       color: blue;
     }
   </style>
   ```

3. **CSS Externe** : Style écrit dans un fichier `.css` séparé et lié au HTML avec la balise `<link>`.

   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

   **styles.css** :

   ```css
   p {
     color: green;
   }
   ```

---

## Sélecteurs CSS

Les sélecteurs définissent les éléments auxquels une règle CSS s’applique. Voici quelques sélecteurs courants :

1. **Sélecteur de Type** :
   Cible tous les éléments d’un type spécifique.

   ```css
   p {
     color: purple;
   }
   ```

2. **Sélecteur de Classe** :
   Cible les éléments avec un attribut `class` spécifique.

   ```css
   .surligner {
     background-color: yellow;
   }
   ```

   ```html
   <p class="surligner">Ce texte a un fond jaune.</p>
   ```

3. **Sélecteur d’ID** :
   Cible un seul élément avec un `id` unique.

   ```css
   #entete {
     font-size: 24px;
   }
   ```

   ```html
   <h1 id="entete">Entête Unique</h1>
   ```

4. **Sélecteur Universel** :
   Cible tous les éléments.

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

5. **Sélecteur Groupé** :
   Applique le même style à plusieurs éléments.

   ```css
   h1,
   h2,
   p {
     color: darkblue;
   }
   ```

---

## Propriétés CSS Courantes

### 1. **Style du Texte**

- `color` : Change la couleur du texte.
- `font-size` : Ajuste la taille du texte.
- `font-family` : Spécifie la police à utiliser.

```css
p {
  color: #555;
  font-size: 18px;
  font-family: "Helvetica", sans-serif;
}
```

### 2. **Modèle de Boîte (Box Model)**

Le modèle de boîte définit la structure des éléments, notamment :

- **Margin** : Espace à l’extérieur de l’élément.
- **Border** : Contour de l’élément.
- **Padding** : Espace à l’intérieur de l’élément, autour du contenu.

```css
div {
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}
```

### 3. **Fond**

- `background-color` : Définit la couleur d’arrière-plan.
- `background-image` : Ajoute une image d’arrière-plan.

```css
body {
  background-color: #f0f0f0;
  background-image: url("fond.jpg");
}
```

### 4. **Alignement**

- `text-align` : Aligne le texte horizontalement (`left`, `center`, `right`).
- `vertical-align` : Aligne les éléments en ligne verticalement.

```css
h1 {
  text-align: center;
}
```

---

## Conception Responsive avec CSS

Le design responsive garantit que votre site est agréable à utiliser sur tous les appareils. Voici quelques techniques :

1. **Mises en Page Flexibles** :
   Utilisez des unités relatives comme les pourcentages ou `em` au lieu des unités fixes comme `px`.

2. **Media Queries** :
   Appliquez des styles en fonction de la taille de l’écran.

   ```css
   @media (max-width: 768px) {
     body {
       font-size: 14px;
     }
   }
   ```

3. **Flexbox** :
   Simplifiez les mises en page avec Flexbox.

   ```css
   .container {
     display: flex;
     justify-content: space-around;
   }
   ```

---

## Conclusion

Le CSS est une technologie fondamentale pour créer des pages web belles et fonctionnelles. En maîtrisant les sélecteurs de base, les propriétés et les techniques responsives, vous pouvez donner vie à vos conceptions et offrir des expériences conviviales. Continuez à expérimenter et à développer vos compétences pour exploiter tout le potentiel du CSS !
