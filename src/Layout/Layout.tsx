import React from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
