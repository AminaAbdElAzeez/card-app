import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function Root() {
  return (
    <section className="root">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Root;
