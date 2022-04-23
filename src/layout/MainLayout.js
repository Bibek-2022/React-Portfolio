import React from "react";
import { Footer } from "../component/footer/Footer";
import { TopNav } from "../component/TopNav";
// import { TopNav } from "./component/TopNav";
export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* x */}
      <TopNav />
      <div className="main-page">{children}</div>
      <Footer />
    </div>
  );
};
