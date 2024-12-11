---
title: Introduction to CSS
description: A beginner-friendly guide to getting started with CSS for styling web pages.
tags: ["CSS", "Basics", "Web Development"]
publishDate: 2024-12-10
author: r2j
relatedPosts:
  - first-steps
---

# Introduction to CSS

CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML elements on a web page. By learning CSS, you can transform plain HTML into visually appealing and interactive websites.

## What is CSS?

CSS defines how HTML elements should be displayed on the screen, paper, or in other media. It separates content (HTML) from presentation (CSS), making websites easier to maintain and style.

### Example of HTML and CSS:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic CSS Example</title>
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
    <h1>Welcome to CSS</h1>
    <p>This is a simple example of using CSS to style a web page.</p>
  </body>
</html>
```

In this example:

- The `body` tag is styled with a light gray background, a custom font, and text color.
- The `h1` tag has a blue color and centered text.
- The `p` tag has adjusted font size and line spacing.

---

## Types of CSS

There are three main ways to apply CSS to HTML:

1. **Inline CSS**: Style applied directly to an HTML element using the `style` attribute.

   ```html
   <p style="color: red;">This text is red.</p>
   ```

2. **Internal CSS**: Style written within a `<style>` tag in the HTML `<head>` section.

   ```html
   <style>
     p {
       color: blue;
     }
   </style>
   ```

3. **External CSS**: Style written in a separate `.css` file and linked to the HTML using the `<link>` tag.

   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

   **styles.css**:

   ```css
   p {
     color: green;
   }
   ```

---

## CSS Selectors

Selectors define which elements a CSS rule applies to. Here are some common selectors:

1. **Type Selector**:
   Targets all elements of a specific type.

   ```css
   p {
     color: purple;
   }
   ```

2. **Class Selector**:
   Targets elements with a specific `class` attribute.

   ```css
   .highlight {
     background-color: yellow;
   }
   ```

   ```html
   <p class="highlight">This text has a yellow background.</p>
   ```

3. **ID Selector**:
   Targets a single element with a unique `id`.

   ```css
   #header {
     font-size: 24px;
   }
   ```

   ```html
   <h1 id="header">Unique Header</h1>
   ```

4. **Universal Selector**:
   Targets all elements.

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

5. **Group Selector**:
   Applies the same style to multiple elements.
   ```css
   h1,
   h2,
   p {
     color: darkblue;
   }
   ```

---

## Common CSS Properties

### 1. **Text Styling**

- `color`: Changes text color.
- `font-size`: Adjusts the size of text.
- `font-family`: Specifies the font to use.

```css
p {
  color: #555;
  font-size: 18px;
  font-family: "Helvetica", sans-serif;
}
```

### 2. **Box Model**

The box model defines how elements are structured, including:

- **Margin**: Space outside the element.
- **Border**: Outline of the element.
- **Padding**: Space inside the element, around the content.

```css
div {
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}
```

### 3. **Background**

- `background-color`: Sets the background color.
- `background-image`: Adds a background image.

```css
body {
  background-color: #f0f0f0;
  background-image: url("background.jpg");
}
```

### 4. **Alignment**

- `text-align`: Aligns text horizontally (`left`, `center`, `right`).
- `vertical-align`: Aligns inline elements vertically.

```css
h1 {
  text-align: center;
}
```

---

## Responsive Design with CSS

Responsive design ensures your website looks good on all devices. Use the following techniques:

1. **Flexible Layouts**:
   Use relative units like percentages or `em` instead of fixed units like `px`.

2. **Media Queries**:
   Apply styles based on the screen size.

   ```css
   @media (max-width: 768px) {
     body {
       font-size: 14px;
     }
   }
   ```

3. **Flexbox**:
   Simplify responsive layouts with Flexbox.
   ```css
   .container {
     display: flex;
     justify-content: space-around;
   }
   ```

---

## Conclusion

CSS is a foundational technology for creating beautiful and functional web pages. By mastering basic selectors, properties, and responsive techniques, you can bring your designs to life and create user-friendly experiences. Continue experimenting and building your skills to unlock CSS's full potential!
