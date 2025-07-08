"use client";

import Link from "next/link";
import type React from "react";
import { usePathname } from "next/navigation";
import styles from "./components.module.css";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav className={`${styles.mainNav} ${className ?? ""}`} {...props}>
      <Link
        href="/"
        className={`${styles.navLink} ${pathname !== "/" ? styles.navLinkMuted : ""}`}
      >
        Overview
      </Link>
      <Link
        href="/residents"
        className={`${styles.navLink} ${styles.hideOnMobile} ${pathname !== "/residents" ? styles.navLinkMuted : ""}`}
      >
        Residents
      </Link>
      <Link
        href="/projects"
        className={`${styles.navLink} ${styles.hideOnMobile} ${pathname !== "/projects" ? styles.navLinkMuted : ""}`}
      >
        Projects
      </Link>
      <Link
        href="/announcements"
        className={`${styles.navLink} ${styles.hideOnMobile} ${pathname !== "/announcements" ? styles.navLinkMuted : ""}`}
      >
        Announcements
      </Link>
    </nav>
  );
}