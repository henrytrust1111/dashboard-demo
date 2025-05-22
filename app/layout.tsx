"use client";

import { AppWrapper } from "@/context";
import dynamic from "next/dynamic";
import "./globals.css";


const Sidebar = dynamic(() => import("./components/Sidebar"), {
  ssr: false,
});
const Header = dynamic(() => import("./components/Header"), {
  ssr: false,
});
// import Header from "./components/Header";

function LayoutContent({ children }: { children: React.ReactNode }) {


  return (
    <html>
      <body>
        <div className="flex h-full w-full bg-gray-100">
          {/* Sidebar uses context internally */}
          <Sidebar />

          {/* Main content */}
          <div className="flex flex-col flex-grow">
            <Header />
            {/* <HeaderDashboard toggleSidebar={toggleSidebar} /> */}
            <main className="p-2 sm:p-3 lg:p-6 !pt-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppWrapper>
      <LayoutContent>{children}</LayoutContent>
    </AppWrapper>
  );
}
