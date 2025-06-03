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
    <div className="mx-auto flex w-full max-w-[1800px] flex-col border border-zinc-900 bg-zinc-900 md:flex-row dark:border-zinc-50 dark:bg-zinc-50">
      <GlobalSidebar />
      {children}
    </div>
  );
}
