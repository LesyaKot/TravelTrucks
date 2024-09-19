import { Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div >
      <Navigation />
      <main>
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </main>
    </div>
  );
}