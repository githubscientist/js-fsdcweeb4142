import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import HomeWrapper from "./wrappers/HomeWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import Dashboard from "./pages/Dashboard";

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
    path: "/dashboard",
    element: <DashboardWrapper />,
    children: [
      {
        path: "",
        element: <Dashboard />
      }
    ]
  }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;