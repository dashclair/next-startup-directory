import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { SanityLive } from "@/sanity/lib/live";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
      <SanityLive/>
    </main>
  );
}
