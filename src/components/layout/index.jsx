import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
