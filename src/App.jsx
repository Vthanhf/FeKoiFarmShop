import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import HomePage from "./pages/home/HomePage";
import Header2 from "./components/main/Header2";
import Rating from "./pages/Rating/Rating";
import ProductDetail from "./pages/1Koi/ProductDetail";
import PaymentPageOnline from "./pages/payment/PaymentOnl";
import OrderStatus from "./pages/OrderStatus/OrderStatus";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import ProductPage from "./pages/product/ProductPage";
import Packs from "./pages/packs/packs";

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
      ],
    },
    {
      path: "",
      element: (
        <>
          <Header2 />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/v",
          element: <HomePage />,
        },
        {
          path: "/productv",
          element: <ProductPage />,
        },
        {
          path: "/detailv",
          element: <ProductDetail />,
        },
        {
          path: "paymentonline",
          element: <PaymentPageOnline />,
        },
        {
          path: "orderstatus",
          element: <OrderStatus />,
        },
        {
          path: "rating",
          element: <Rating />,
        },
        {
          path: "package",
          element: <Packs />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
