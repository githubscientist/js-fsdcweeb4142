import { createBrowserRouter, RouterProvider } from "react-router";
import Todos from "./components/Todos";
import Home from "./pages/Home";
import HomeWrapper from "./wrappers/HomeWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/todos",
    element: <Todos />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;