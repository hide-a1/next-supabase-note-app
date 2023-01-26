import { FC, ReactNode } from "react";
import Head from "next/head";
import { BadgeCheckIcon } from "@heroicons/react/solid";

type Title = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Title> = ({ children, title = "Todo app" }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer>
        <BadgeCheckIcon className="h-6 w-6 text-blue-500" />
      </footer>
      Layout
    </div>
  );
};
