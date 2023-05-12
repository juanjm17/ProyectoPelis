import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import MovieExclusive from "./components/movies/MovieExclusive";
import "./index.css";
import Login from "./components/Login";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <MainPage />
  },
  {
    path: "/movie/:id",
    element: <MovieExclusive />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

const App = () => {
  return (
    <div>
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
