import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
// import RegisterPage from "./pages/register";
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
import Payment from "./pages/payment/PaymentOffline";
import CartPage from "./pages/cart/CartPage";
import RegisterPage from "./pages/register/register";
import Submission from "./pages/submission/Submission";
import FAQ from "./pages/FAQs/faqs";
import Voucher from "./pages/Voucher/Voucher";
import SubmissionSuccess from "./pages/submission/SubmissionSuccess"; // Adjust the path as necessary
import OrderManagement from "./pages/Customer/Customer";
import ConsignmentOrders from "./pages/Customer/ConsignmentOrders";
import RegularOrders from "./pages/Customer/RegularOrders";
import AccountInfo from "./pages/Customer/AccountInfo";
import ChangePassword from "./pages/Customer/ChangePassword";
import CustomerSP from "./pages/CustomerSP/CustomerSP";
 import Inventory from "./pages/dashboard/Inventory";

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
      path: "v",
      element: (
        <>
          <Header2 />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "detail",
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
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "sub",
          element: <Submission />,
        },
        {
          path: "faqs",
          element: <FAQ />,
        },
        {
          path: "voucher",
          element: <Voucher />,
        },
        {
          path: "success",
          element: <SubmissionSuccess />,
        },
        {
          path: "customer",
          element: <OrderManagement />,
        },
        {
          path: "consignment",
          element: <ConsignmentOrders />,
        },
        {
          path: "regular",
          element: <RegularOrders />,
        },
        {
          path: "account-info",
          element: <AccountInfo />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
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
      path: "inventory",
      element: <Inventory />,
    },

    {
      path: "dashboard",
      element: <Dashboard />,
    },
    // {
    //   path: "dashboard",
    //   element: (
    //     <>
    //       <Outlet />
    //     </>
    //   ),
    //   children: [
    //     {
    //       path: "inventory",
    //       element: <Inventory />,
    //     },
        
    //   ],
    // },

    {
      path: "support",
      element: <CustomerSP />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
