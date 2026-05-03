import { createBrowserRouter, RouterProvider } from "react-router";
import Todos from "./components/Todos";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;