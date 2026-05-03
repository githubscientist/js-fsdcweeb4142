import { createBrowserRouter, RouterProvider } from "react-router";

// 1. create a router object
const router = createBrowserRouter([
  // each route as an object
  {
    path: '/', // this represents localhost:5173/
    element: <h1>Home Page</h1>
  },
  {
    path: '/code-kata',
    element: <h1>Code Kata Page</h1>
  },
  {
    path: '/sqlkata',
    element: <h1>SQL Kata Page</h1>
  }
]);

const App = () => {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App;