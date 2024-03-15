import React from "react";
import Headercomp from "./partials/Headercomp";
import Footercomp from "./partials/Footercomp";
import "./partials/defacultlayout.css";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="default-layout">
        <header className="header mb-2">
          <Headercomp />
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <Footercomp />
        </footer>
      </div>
    </>
  );
};
export default DefaultLayout;
