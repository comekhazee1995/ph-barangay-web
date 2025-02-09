"use client";

import Link from "next/link";
import type React from "react"; // Added import for React
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className={cn('text-sm font-medium transition-colors hover:text-primary', { 'text-muted-foreground' : pathname !== '/'})}>
        Overview
      </Link>
      <Link
        href="/residents"
        className={cn('text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block', { 'text-muted-foreground' : pathname !== '/residents'})}
      >
        Residents
      </Link>
      <Link
        href="/projects"
        className={cn('text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block', { 'text-muted-foreground' : pathname !== '/projects'})}
      >
        Projects
      </Link>
      <Link
        href="/announcements"
        className={cn('text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block', { 'text-muted-foreground' : pathname !== '/announcements'})}
      >
        Announcements
      </Link>
    </nav>
  );
}