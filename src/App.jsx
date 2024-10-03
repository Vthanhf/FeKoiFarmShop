import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import ProductPage from "./pages/product/ProductPage";
import HomePage from "./pages/home/HomePage";
import ProductDetail from "./pages/1Koi/ProductDetail";
// import Payment from "./pages/payment";
// import StudentManagement from "./StudentManagement";

function App() {
  const router = createBrowserRouter([
    // {
    //     path: "",
    //     element: <StudentManagement/>,
    //   },

    {
      path: "login",
      element: <LoginPage />,
    },

    {
      path: "register",
      element: <RegisterPage />,
    },

    {
      path: "home",
      element: <HomePage />,
    },

    {
      path: "product",
      element: <ProductPage />,
    },

    {
      path: "dashboard",
      element: <Dashboard />,
    },

    // {
    //   path: "payment",
    //   element: <Payment />,
    // },


    {
      path: "detail",
      element: <ProductDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
