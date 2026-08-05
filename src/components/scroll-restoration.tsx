"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Next.js 16's App Router client-navigation scroll-to-top is landing on an
 * unrelated offset instead of 0 for plain (non-hash) route changes — hash
 * anchors like "/#about" resolve correctly, so this only steps in when the
 * new URL has no hash to scroll to.
 */
export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
