import { Noto_Serif_KR } from "@next/font/google";
import { type ReactNode } from "react";
import "./globals.css";
import { Header } from "components/header";
import { Categories } from "components/categories";

const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "700"],
  preload: false,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={notoSerifKR.className}>
        <div className="flex flex-col container mx-auto max-w-[1200px] gap-4">
          <Header />
          <section className="flex flex-row gap-4 px-4">
            <aside className="hidden md:block basis-1/4">
              {/* @ts-expect-error Server Component */}
              <Categories />
            </aside>
            <main className="px-4 md:px-0 basis-full md:basis-3/4">
              {children}
            </main>
          </section>
        </div>
      </body>
    </html>
  );
}
