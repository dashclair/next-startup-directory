import { ReactNode } from "react";
import { SanityLive } from "@/sanity/lib/live";

import Navbar from "../../components/Navbar";

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
