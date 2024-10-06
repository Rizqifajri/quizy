import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Login } from "./pages/login.jsx";
import { SignUp } from "./pages/sign-up.jsx";
import { QuizStartPage } from "./pages/start-page.jsx";
import { QuestionPage } from "./pages/quiz.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/start-quizy",
    element: <QuizStartPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: '/quizy/questions',
    element: <QuestionPage />
  },
  {
    path: "/*",
    element: <div>Not Found</div>,
  },
]);

createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />
);
