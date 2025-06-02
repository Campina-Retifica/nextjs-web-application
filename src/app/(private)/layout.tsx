import { GlobalSidebar } from "@/components/global/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços - Campina Retífica",
  description: "Gerenciamento de serviços e estoques da retífica campina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col overflow-hidden border border-neutral-800 bg-neutral-800 md:flex-row dark:border-neutral-700 dark:bg-neutral-800 max-h-screen">
      <GlobalSidebar />
      {children}
    </div>
  );
}
