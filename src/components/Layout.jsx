import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <main className="flex flex-col  w-full h-screen items-center justify-start overflow-auto py-3 px-8 md:px-16">
      <Header />
      <section className="flex flex-col  w-full h-screen md:h-full items-center justify-center ">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
