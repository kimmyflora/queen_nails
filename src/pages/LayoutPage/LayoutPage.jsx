import React from "react";
import Navbar from "../Navbar/Navbar";
import FooterPage from "../FooterPage/FooterPage";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <FooterPage />
    </div>
  );
}