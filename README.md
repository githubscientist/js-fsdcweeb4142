## useEffect Hook

- `useEffect` is a hook in React that allows you to perform side effects in function components. It serves the same purpose as lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
- side effects can include things like fetching data from an API, subscribing to events, or manually manipulating the DOM.

### The ways to use `useEffect`:

1. **Without dependencies**: The effect will run after every render.
2. **With an empty dependency array**: The effect will run only once, after the initial render.
3. **With specific dependencies**: The effect will run only when the specified dependencies change.

## Axios

- `Axios` is a popular JavaScript library used to make HTTP requests from the browser or Node.js. 

## Folder Structure

- `src/`: Contains the source code of the application.
  - `components/`: Contains reusable React components.
  - `pages/`: Contains page components that represent different routes in the application.
  - `wrappers/:` Contains higher-order components or context providers that wrap around other components to provide additional functionality or context.
  - `services/`: Contains files for making API calls, such as using Axios.
  - `App.js`: The main component that sets up routing and renders the application.
  - `main.jss`: The entry point of the application that renders the App component into the DOM.

## Callback Functions

- A callback function is a function that is passed as an argument to another function.

for example, we have calc function that takes two numbers and a callback function as arguments. The callback function is called with the result of the calculation.

```javascript
// callback function
function add(x, y) {
  return x + y;
}

// higher-order function that takes a callback function as an argument
function calc(a, b, add) {
  add(a, b);
}

calc(5, 3, add); // This will call the add function with the result of 5 + 3
```

## higher-order functions

- A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result.

## higher-order components (HOCs)

- A higher-order component (HOC) is a function that takes a component and returns a new component with additional functionality. HOCs are used to reuse component logic across multiple components.