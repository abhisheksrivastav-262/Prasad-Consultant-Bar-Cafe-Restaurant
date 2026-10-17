"use client";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  usePathname();
  return <>{children}</>;
}
