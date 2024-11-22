import { Footer, Header } from "@components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-16 max-md:mt-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
