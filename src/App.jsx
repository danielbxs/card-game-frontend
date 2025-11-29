import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import UserPage from "./pages/UserPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./pages/Layout";
import UserCollectionPage from "./pages/UserCollectionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Card-related */}
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />

          {/* User area */}
          <Route path="/user">
            <Route index element={<UserPage />} />
            <Route path="collection" element={<UserCollectionPage />} />
          </Route>

          {/* Auth */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
