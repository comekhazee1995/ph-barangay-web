import Sidebar from "@/components/Sidebar";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-2 p-2 h-dvh">
      <Sidebar />
      <div className="h-full rounded p-4 bordered-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
