"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";

import { motion } from "motion/react";
import Image from "next/image";
import {
  FileClock,
  LayoutDashboardIcon,
  LogOut,
  User,
  Wrench,
} from "lucide-react";

export function GlobalSidebar() {
  const links = [
    {
      label: "Serviços prestados",
      href: "/",
      icon: (
        <FileClock
          className="shrink-0 text-zinc-300 dark:text-neutral-700 hover:text-zinc-50 dark:hover:text-neutral-800"
          width={22}
          height={22}
        />
      ),
    },
    {
      label: "Serviços",
      href: "/servicos",

      icon: (
        <Wrench
          className="shrink-0 text-zinc-300 dark:text-neutral-700 hover:text-zinc-50 dark:hover:text-neutral-800"
          width={22}
          height={22}
        />
      ),
    },
    {
      label: "Dashboard",
      href: "/desenvolvimento",
      icon: (
        <LayoutDashboardIcon
          className="shrink-0 text-zinc-300 dark:text-neutral-700 hover:text-zinc-50 dark:hover:text-neutral-800"
          width={22}
          height={22}
        />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <LogOut
          className="shrink-0 text-zinc-300 dark:text-neutral-700 hover:text-zinc-50 dark:hover:text-neutral-800"
          width={22}
          height={22}
        />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 h-screen sticky top-0 bottom-0 left-0 bg-zinc-900">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2 justify-between">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Administrador",
              href: "#",
              icon: <User width={22} height={22} className="text-zinc-50" />,
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="/logo.png"
        className="h-7 w-7 shrink-0 rounded-full bg-zinc-50"
        width={50}
        height={50}
        alt="Avatar"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        <p className="text-zinc-50">
          <span className="text-red-600">Campina</span> Retífica
        </p>
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="/logo.png"
        className="h-7 w-7 shrink-0 rounded-full bg-zinc-50"
        width={50}
        height={50}
        alt="Avatar"
      />
    </a>
  );
};
