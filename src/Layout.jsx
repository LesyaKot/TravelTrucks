import CatalogItemNav from "./components/CatalogItemNav/CatalogItemNav";

import { Suspense } from "react";


export default function Layout({ children }) {
  return (
    <div >
      <CatalogItemNav />
      <main>
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </main>
    </div>
  );
}