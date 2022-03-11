import React from "react";
import Header from "../../components/header/Header.component";
import Footer from "../../components/Footer/Footer.component";
import "./Left-page.styles.scss";

const LeftPage = function () {
  return (
    <div className="left-side">
      <Header />
      <Footer />
    </div>
  );
};
export default LeftPage;
