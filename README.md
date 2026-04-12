# React - FSDCWEEB4142

## What is React?

- React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.
- React was developed by Facebook and is widely used for building web applications, mobile apps, and even desktop applications.

## Key Features of React

1. **Component-Based Architecture**:
   - React applications are built using components.
   - Components are reusable piece of UI (User Interface)
   - User Interface means web pages in web applications or websites.
   - Components can be defined as one or more HTML elements, along with JavaScript code that defines their behavior.
2. **Virtual DOM**:
   - React uses a virtual DOM (Document Object Model) to optimize rendering.
   - When the state of a component changes, React updates the virtual DOM first and then efficiently updates the actual DOM to reflect those changes, minimizing performance issues.

   In layman terms:
   1. First, React creates a virtual representation of the UI in memory (Virtual DOM).
   2. When the state of a component changes, React updates the virtual DOM.
   3. React then compares the updated virtual DOM with the previous version to identify what has changed.
   4. Finally, React updates only the parts of the actual DOM that have changed instead of re-rendering the entire UI, which improves performance.

3. **Single Page Application (SPA)**:
   - React is often used to build single-page applications, where the entire application runs on a single web page, and content is dynamically updated without requiring a full page reload.
   - Which means, we will have only one HTML file (index.html) and all the content will be rendered dynamically using JavaScript.
