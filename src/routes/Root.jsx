import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner";

function Root() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="root">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </section>
  );
}

export default Root;
