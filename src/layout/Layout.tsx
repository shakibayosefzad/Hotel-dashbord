import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Navbar/Header/Header";


interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className="flex justify-between">
      <Sidebar/>
      <Header /> 
      {children}
    </div>
  );
}

export default Layout;
