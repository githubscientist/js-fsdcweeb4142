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

## Components

1. Functional Components:
   - These are JavaScript functions that return JSX (JavaScript XML) to define the UI.
   - They can use hooks to manage state and lifecycle events.

2. Class Components:
   - These are ES6 classes that extend the `React.Component` class.
   - They have a `render()` method that returns JSX to define the UI.
   - They can also manage state and lifecycle events using class methods.

## Props: Passing Data from Parent to Child

- Props (short for properties) are used to pass data from a parent component to a child component.
- Props are read-only, meaning that a child component cannot modify the props it receives from its parent component.
- Props can be of any data type, including strings, numbers, arrays, objects, and even functions.

## Passing Data from Child to Parent

- To pass data from a child component to a parent component, we can use callback functions.
- The parent component can define a function and pass it as a prop to the child component.
- The child component can then call this function and pass data as an argument, which allows the parent component to receive the data from the child component.

## Props Drilling

- Props drilling refers to the process of passing data through multiple levels of components in a React application.
- It occurs when a parent component needs to pass data to a deeply nested child component, and the data has to be passed through intermediate components that do not need it.
- This can lead to code that is difficult to maintain and understand, as it requires passing props through multiple layers of components, even if those components do not need the data themselves.

Problem with Props Drilling:

- It can make the code more complex and harder to maintain, as it requires passing props through multiple layers of components, even if those components do not need the data themselves.
- It can lead to performance issues, as it may require unnecessary re-rendering of components that do not need the data, which can slow down the application.

Solution to Props Drilling:

- To avoid props drilling, we can use state management libraries like Redux or Context API, which allow us to manage the state of our application in a centralized way and avoid passing props through multiple layers of components.
