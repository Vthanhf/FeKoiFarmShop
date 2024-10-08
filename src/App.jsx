import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import HomePage from "./pages/home/HomePage";

import ProductDetail from "./pages/1Koi/ProductDetail";

import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import ProductPage from "./pages/product/ProductPage";
import Payment from "./pages/payment/payment";

// import StudentManagement from "./StudentManagement";

function App() {
  const router = createBrowserRouter([
    // {
    //     path: "",
    //     element: <StudentManagement/>,
    //   },

    {
      path: "",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/product",
          element: <ProductPage />,
        },
        {
          path: "/detail",
          element: <ProductDetail />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
      ],
    },

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
      path: "dashboard",
      element: <Dashboard />,
    },

    {
      path: "payment",
      element: <Payment />,
    },

    {
      path: "",
      element: (
        <>
          <Header />
          <ProductPage />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
