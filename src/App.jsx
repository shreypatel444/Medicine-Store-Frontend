import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MedicineSample from "./Descrption/MedicineSample";
import Cartpage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import BillPage from "./pages/BillPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import AdminAddProduct from "./Admin/AdminAddProduct";
import AdminProducts from "./Admin/AdminProducts";
import AdminNavbar from "./Admin/AdminNavbar";
import AdminUserData from "./Admin/AdminUserData";
import AdminConact from "./Admin/AdminContact";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cartpage />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/bill",
      element: <BillPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/adminpharma",
      element: <AdminPage />,
    },
    { path: "/:disease", element: <MedicineSample /> },
    {
      path: "adminpharma/addnewproducts",
      element: (
        <>
          <AdminNavbar />
          <AdminAddProduct />
        </>
      ),
    },
    {
      path: "adminpharma/contactdata",
      element: (
        <>
          <AdminNavbar />
          <AdminConact />
        </>
      ),
    },
    {
      path: "adminpharma/products",
      element: (
        <>
          <AdminNavbar />
          <AdminProducts />
        </>
      ),
    },
    {
      path: "adminpharma/userdata",
      element: (
        <>
          <AdminNavbar />
          <AdminUserData />
        </>
      ),
    },
  ]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
