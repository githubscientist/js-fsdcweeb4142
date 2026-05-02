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

## React Components

- React components can be defined as either functional components or class components.

1. Functional Components:
   - These are simple JavaScript functions that return JSX (JavaScript XML) to define the UI.
   - They can use React hooks to manage state and side effects.

2. Class Components:
   - These are ES6 classes that extend the `React.Component` class.
   - They have a `render()` method that returns JSX to define the UI.

The class components are less commonly used in modern React development, as functional components with hooks have become the preferred approach for building React applications.

## React Hooks

- React hooks are introduced in React 16.8 (2019) to allow functional components to manage state and side effects.
- React hooks are functions that let you "hook into" React state and lifecycle features from function components.
- Some commonly used React hooks include:
1. `useState`: Allows you to add state to functional components.
2. `useEffect`: Allows you to perform side effects in functional components, such as fetching data or subscribing to events.
3. `useContext`: Allows you to access the context in functional components, which is a way to share data between components without passing props down manually at every level.  
4. `useRef`: Allows you to create a mutable reference that persists across re-renders, which can be used to access DOM elements or store mutable values.

### useState Hook

- The `useState` hook is used to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.

### Uncontrolled Input Vs Controlled Input

- Uncontrolled Input: An uncontrolled input is an input element that manages its own state internally. It does not rely on React state to control its value. Instead, it uses the DOM to handle user input and updates its value accordingly.

## useEffect Hook

- The `useEffect` hook is used to perform side effects in functional components. It allows you to run code after the component has rendered, and it can be used for tasks such as fetching data, subscribing to events, or manipulating the DOM.

## Axios

- Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js. It provides an easy-to-use API for sending asynchronous HTTP requests and handling responses.
- It supports better features than the built-in `fetch` API, such as automatic JSON parsing, request cancellation, and interceptors for request and response handling.