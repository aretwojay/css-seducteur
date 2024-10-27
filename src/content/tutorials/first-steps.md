---
title: First steps - CSSSéducteur
---

# First Steps with CSS

Welcome to your first steps in learning CSS (Cascading Style Sheets)! CSS is a powerful tool for controlling the look and feel of your web pages. This guide will help you get started with the basics.

## What is CSS?

CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML. It allows you to separate content from design, making your web pages more flexible and easier to maintain.

## Adding CSS to Your HTML

There are three ways to add CSS to your HTML documents:

1. **Inline CSS**: Using the `style` attribute within HTML tags.

   ```html
   <p style="color: blue;">This is a blue paragraph.</p>
   ```

2. **Internal CSS**: Using the `<style>` tag within the `<head>` section of your HTML document.

   ```html
   <head>
     <style>
       p {
         color: blue;
       }
     </style>
   </head>
   ```

3. **External CSS**: Linking to an external CSS file using the `<link>` tag.
   ```html
   <head>
     <link rel="stylesheet" type="text/css" href="styles.css" />
   </head>
   ```

## Basic CSS Syntax

CSS rules are made up of selectors and declarations. A selector targets the HTML element you want to style, and declarations define the styles to be applied.

```css
selector {
  property: value;
}
```

Example:

```css
p {
  color: blue;
  font-size: 16px;
}
```

## Common CSS Properties

- **Color**: Sets the color of text.

  ```css
  color: red;
  ```

- **Font-size**: Sets the size of the font.

  ```css
  font-size: 20px;
  ```

- **Margin**: Sets the space outside an element.

  ```css
  margin: 10px;
  ```

- **Padding**: Sets the space inside an element.

  ```css
  padding: 10px;
  ```

- **Background-color**: Sets the background color of an element.
  ```css
  background-color: yellow;
  ```

## Conclusion

These are just the basics to get you started with CSS. As you continue to learn, you'll discover many more properties and techniques to create beautiful and responsive web designs. Happy coding!
