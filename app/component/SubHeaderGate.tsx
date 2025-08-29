"use client";
import { usePathname, useSearchParams } from "next/navigation";
import SubHeader from "./SubHeader";

export default function SubHeaderGate() {
  const pathname = usePathname();
  const search = useSearchParams();

  const hide =
    (pathname?.startsWith("/sign-in") ?? false) ||
    (pathname?.startsWith("/sign-up") ?? false) ||
    search.has("redirect_url");

  if (hide) return null;
  return <SubHeader />;
}
