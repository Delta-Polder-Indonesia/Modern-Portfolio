"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { SHOULD_PREFETCH } from "@/lib/assets";

export const navData: { name: string; path: string; Icon: IconType }[] = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-col items-center xl:justify-center fixed h-max bottom-0 xl:top-0 xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen pointer-events-none pb-[env(safe-area-inset-bottom)] xl:pb-0"
    >
      <div className="site-nav-inner pointer-events-auto flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20 xl:h-max py-3 xl:py-8 bg-white/10 backdrop-blur-xs text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => {
          const isActive =
            link.path === "/"
              ? pathname === "/"
              : pathname === link.path ||
                pathname.startsWith(`${link.path}/`);

          return (
            <Link
              prefetch={SHOULD_PREFETCH}
              className={`${
                isActive ? "text-accent" : "text-white"
              } relative flex items-center justify-center p-1.5 group hover:text-accent transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-md`}
              href={link.path}
              key={link.path}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                aria-hidden
                className="absolute pr-14 right-0 hidden xl:group-hover:flex xl:group-focus-visible:flex pointer-events-none"
              >
                <div className="bg-white relative flex text-primary items-center p-1.5 rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>

                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
                </div>
              </div>

              <link.Icon aria-hidden />
              <span className="sr-only">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
