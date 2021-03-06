import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cards from "./Components/Cards";
import CreateRequest from "./CreateRequest";
import RequestCond from "./ManageRequest/RequestCond";

const Home = () => {
  const loc = useLocation();
  const [navLink, setNavLink] = useState(true);

  useEffect(() => {
    if (loc.pathname === "/pending-request") {
      setNavLink(true);
    } else {
      setNavLink(false);
    }
  }, [loc]);

  return (
    <>
      <CreateRequest />
      <Cards navLink={navLink} />
      <RequestCond />
    </>
  );
};

export default Home;
