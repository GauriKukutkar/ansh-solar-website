import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#010b14] text-white">

      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}