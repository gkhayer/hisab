import React from "react";
import Dashboard from "../Components/Header/Dashboard/Dashboard";
import Footer from "../Components/Header/Footer/Footer";
import Header from "../Components/Header/Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
};

export default Layout;
