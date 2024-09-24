import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout.jsx";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const CatalogItem = lazy(() => import("./pages/CatalogItem/CatalogItem.jsx"));
const Features = lazy(() => import("./components/Features/Features.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));
const NotFoundPage = lazy(() =>
  import("./components/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogItem />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
