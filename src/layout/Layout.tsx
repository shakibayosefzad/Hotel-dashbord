import React from "react";
import Header from "../components/Navbar/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className="flex justify-between">
      <Sidebar/>
      <Header/>
      {children}
    </div>
  );
}

export default Layout;
