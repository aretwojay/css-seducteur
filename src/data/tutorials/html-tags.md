---
title: Comprendre et Utiliser les Balises HTML
description: Découvrez les balises HTML de base et leur utilisation pour structurer le contenu d'une page web. Apprenez à créer des titres, des paragraphes, des liens, des images et des formulaires en HTML.
tags: ["HTML", "Basique", "Développement Web"]
publishDate: 2025-01-08
proficiencyLevel: Débutant
author: r2j
relatedPosts:
  - introduction-to-css
  - first-steps
---

# Comprendre et Utiliser les Balises HTML

HTML (HyperText Markup Language) est la structure de base de toute page web. Les balises HTML sont utilisées pour structurer et organiser le contenu d'une page, définissant ainsi la structure d'un site. Dans ce guide, nous allons explorer les principales balises HTML et leur utilisation dans la création d'une page web.

## 1. Introduction aux Balises HTML

Les balises HTML sont des éléments qui entourent le contenu d'une page web pour indiquer au navigateur comment ce contenu doit être affiché. Chaque balise a un rôle spécifique, par exemple pour les titres, les paragraphes, les liens, les images, etc. La plupart des balises HTML sont entourées de `<` et `>`, et certaines nécessitent une balise de fermeture (comme `</p>`).

### Structure d'une Balise HTML

Une balise HTML de base se compose de trois parties :

1. **Balise d'ouverture** : Elle indique le début de l'élément.
2. **Contenu** : Le texte ou d'autres éléments imbriqués à l'intérieur de la balise.
3. **Balise de fermeture** : Elle marque la fin de l'élément.

Exemple :

```html
<p>Ceci est un paragraphe.</p>
```

---

## 2. Les Balises Structurelles de Base

Certaines balises HTML sont utilisées pour créer la structure de base d'une page web. Voici les plus courantes :

### La Balise `<html>`

La balise `<html>` est la racine de tout document HTML. Elle contient tous les autres éléments HTML sur la page.

```html
<html>
  <!-- Tout le contenu de la page HTML va ici -->
</html>
```

### La Balise `<head>`

La balise `<head>` contient des informations de métadonnées sur la page, comme le titre, les liens vers les fichiers CSS, les scripts JavaScript et d'autres informations non visibles directement sur la page.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mon site web</title>
  <link rel="stylesheet" href="styles.css" />
</head>
```

### La Balise `<body>`

La balise `<body>` contient le contenu visible de la page web. C'est ici que vous placez des éléments comme des paragraphes, des titres, des images, etc.

```html
<body>
  <h1>Bienvenue sur mon site web</h1>
  <p>Ceci est un paragraphe d'exemple.</p>
</body>
```

---

## 3. Les Balises de Contenu

Les balises de contenu sont celles qui servent à structurer et afficher les éléments de la page web.

### La Balise `<h1>`, `<h2>`, `<h3>`, etc.

Les balises `<h1>`, `<h2>`, `<h3>`, etc., sont utilisées pour définir les titres de la page. `<h1>` est le titre principal (le plus important) et les autres balises `<h2>`, `<h3>`, etc., sont des sous-titres de niveaux inférieurs.

```html
<h1>Titre principal de la page</h1>
<h2>Sous-titre de niveau 2</h2>
<h3>Sous-titre de niveau 3</h3>
```

### La Balise `<p>`

La balise `<p>` est utilisée pour définir un paragraphe de texte.

```html
<p>
  Ceci est un paragraphe. Il peut contenir plusieurs phrases ou même des
  éléments imbriqués.
</p>
```

### La Balise `<a>`

La balise `<a>` est utilisée pour créer des liens hypertextes. Elle permet de lier une page à une autre ou de rediriger vers un autre site web.

```html
<a href="https://www.example.com">Cliquez ici pour visiter mon site</a>
```

---

## 4. Les Balises Multimédia

HTML permet également d'ajouter des éléments multimédia à vos pages, comme des images, des vidéos ou de l'audio.

### La Balise `<img>`

La balise `<img>` est utilisée pour afficher une image sur la page. Elle nécessite l'attribut `src` pour spécifier l'URL de l'image et `alt` pour fournir un texte alternatif.

```html
<img src="image.jpg" alt="Description de l'image" />
```

### La Balise `<video>`

La balise `<video>` permet d'intégrer des vidéos dans une page web. Vous pouvez spécifier plusieurs sources pour garantir la compatibilité entre différents navigateurs.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Votre navigateur ne supporte pas la balise vidéo.
</video>
```

### La Balise `<audio>`

Similaire à la balise `<video>`, la balise `<audio>` permet d'intégrer des fichiers audio dans une page web.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3" />
  Votre navigateur ne supporte pas la balise audio.
</audio>
```

---

## 5. Les Balises de Formulaire

Les balises de formulaire HTML permettent de collecter des informations auprès des utilisateurs. Voici les balises les plus courantes.

### La Balise `<form>`

La balise `<form>` encapsule tous les éléments d'un formulaire. Elle inclut également des attributs comme `action` (l'URL où les données sont envoyées) et `method` (la méthode HTTP, généralement `GET` ou `POST`).

```html
<form action="/submit" method="POST">
  <!-- Les autres éléments de formulaire vont ici -->
</form>
```

### La Balise `<input>`

La balise `<input>` est utilisée pour créer des champs de saisie dans un formulaire. Elle peut être utilisée pour plusieurs types de champs, comme des textes, des cases à cocher, des boutons, etc.

```html
<input type="text" name="username" placeholder="Entrez votre nom" />
<input
  type="password"
  name="password"
  placeholder="Entrez votre mot de passe"
/>
<input type="submit" value="Envoyer" />
```

### La Balise `<select>`

La balise `<select>` crée un menu déroulant permettant à l'utilisateur de choisir parmi plusieurs options.

```html
<select name="fruits">
  <option value="apple">Pomme</option>
  <option value="banana">Banane</option>
  <option value="cherry">Cerise</option>
</select>
```

---

## Conclusion

Les balises HTML sont les éléments de base pour construire la structure d'une page web. En comprenant bien leur rôle et en utilisant la bonne balise pour chaque situation, vous pouvez créer des pages web bien structurées et accessibles. N'hésitez pas à explorer plus de balises HTML pour enrichir vos projets web. Continuez à pratiquer et à expérimenter pour devenir un expert du HTML !
