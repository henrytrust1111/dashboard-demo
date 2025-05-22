// components/Sidebar.tsx
"use client";

import React, { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useMyContext } from "@/context";
import { FiX } from "react-icons/fi";

// Helper to choose colored or white variant
const getIconSrc = (name: string, colored: boolean) =>
  `/icons/sidebar/${name}-${colored ? "colored" : "white"}.svg`;

interface MenuItemProps {
  href: string;
  iconName: string;
  label: string;
}

// Memoized MenuItem with hover state
const MenuItem: React.FC<MenuItemProps> = React.memo(
  ({ href, iconName, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    // Hover state to switch icon variant
    const [isHovered, setIsHovered] = useState(false);

    const showColored = isActive || isHovered;
    const activeClasses = isActive
      ? "bg-[#E6F0FF] text-[#014DAF] font-semibold rounded-[8px]"
      : "text-[#D0D5DD] hover:bg-[#E4F0FF] hover:text-[#014DAF] rounded-[8px]";

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-3 transition ${activeClasses}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={getIconSrc(iconName, showColored)}
          alt={`${label} icon`}
          width={20}
          height={20}
          className="shrink-0"
        />
        <span className="text-xs leading-none">{label}</span>
      </Link>
    );
  }
);
MenuItem.displayName = "MenuItem";

// Static menu definitions
const dashboardItem: MenuItemProps = {
  href: "/",
  iconName: "dashboard",
  label: "Dashboard"
};

const menuItems: MenuItemProps[] = [
  { href: "/branches", iconName: "branches", label: "Branches" },
  { href: "/roles", iconName: "role", label: "Roles" },
  { href: "/users", iconName: "users", label: "Users" },
  { href: "/card-schemes", iconName: "card-scheme", label: "Card Scheme" },
  { href: "/card-profiles", iconName: "card-profile", label: "Card Profile" },
  { href: "/card-requests", iconName: "card-request", label: "Card Request" },
  { href: "/stock", iconName: "stock", label: "Stock" },
  { href: "/cards", iconName: "cards", label: "Cards" },
  {
    href: "/block-unblock",
    iconName: "unblocked-card",
    label: "Block/Unblock Card"
  },
  {
    href: "/auth-list",
    iconName: "authorization-list",
    label: "Authorization List"
  },
  {
    href: "/auth-queue",
    iconName: "authorization-queue",
    label: "Authorization Queue"
  },
  { href: "/trail", iconName: "trail", label: "Trail" },
  { href: "/account", iconName: "account", label: "Account" }
];

// Memoized Sidebar component
const Sidebar: React.FC = React.memo(() => {
  const { isOpen, setIsOpen } = useMyContext();

  const closeMobile = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleLogout = useCallback(() => {
    // TODO: implement logout logic
  }, []);

  return (
    <>
      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={`overflow-y-auto h-screen no-scrollbar bg-[#032B61] px-3
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 fixed md:relative inset-y-0 left-0 w-64 shadow-lg md:shadow-none z-40
          transition-transform duration-200 ease-in-out focus:outline-none`}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end p-4 md:hidden">
          {/* <button onClick={closeMobile}>
            <Image
              src={getIconSrc("logout", false)}
              alt="Close sidebar"
              width={24}
              height={24}
            />
          </button> */}
          <FiX className="text-white" size={24} onClick={closeMobile} />
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center py-6 border-b border-[#163D7A]">
          <Image
            src="/images/lapo-logo.png"
            alt="LAPO Microfinance Bank"
            width={140}
            height={60}
            priority
          />
        </div>

        {/* Dashboard Link */}
        <nav className="mt-6">
          <MenuItem {...dashboardItem} />
        </nav>

        {/* Main Menu Header */}
        <div className="px-4 mt-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Main Menu
          </p>
        </div>

        {/* Main Menu Items */}
        <nav className="mt-2 space-y-1">
          {menuItems.map((item) => (
            <MenuItem key={item.href} {...item} />
          ))}
        </nav>

        <div className="flex-grow" />

        {/* Logout & Powered By */}
        <div className="px-4 mt-auto pt-6 pb-4 border-t border-[#163D7A]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full"
          >
            <Image
              src={getIconSrc("logout", false)}
              alt="Logout"
              width={20}
              height={20}
            />
            <span className="text-xs text-white hover:text-red-500">
              Logout
            </span>
          </button>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 mb-2">POWERED BY</p>
            <Image
              src="/images/cardinfra-logo.png"
              alt="Cardinfra"
              width={80}
              height={80}
              priority
            />
          </div>
        </div>
      </aside>
    </>
  );
});
Sidebar.displayName = "Sidebar";

export default Sidebar;
