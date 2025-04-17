import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          BAP
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">Search</Button>
          </Link>
          <Link href="/professor/prof1">
            <Button variant="ghost">Professors</Button>
          </Link>
          <Link href="/topic/topic1">
            <Button variant="ghost">Topics</Button>
          </Link>
          <Link href="/student/student1">
            <Button variant="ghost">Students</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
