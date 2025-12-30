import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import UserPage from "./pages/UserPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./pages/Layout";
import UserCollectionPage from "./pages/UserCollectionPage";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/collection", Component: CollectionPage },
      {
        path: "/user",
        Component: UserPage,
        children: [{ path: "collection", Component: UserCollectionPage }],
      },
    ],
  },

  { path: "/signin", Component: SignInPage },
  { path: "/signup", Component: SignUpPage },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
