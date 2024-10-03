import App2 from "../App2"; // Import App component
import HomePage from "../pages/home/HomePage";
import ListKoiPage from "../pages/list_koi/ListKoiPage";

const routes = [
  {
    path: "/",
    element: <App2 />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/new-koi", element: <ListKoiPage />, children: [] },
    ],
  },
];
export default routes;