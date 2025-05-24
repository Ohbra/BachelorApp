import Link from "next/link";
import { ChevronLeft, User } from "lucide-react";

interface HeaderProps {
  title?: string;
  backUrl?: string;
  showBack?: boolean;
  showUserIcon?: boolean;
}

export function Header({
  title,
  backUrl = "/",
  showBack = false,
  showUserIcon = false,
}: HeaderProps) {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {showBack && (
            <Link href={backUrl}>
              <ChevronLeft className="h-5 w-5 mr-2 text-white" />
            </Link>
          )}
          {title && (
            <h2 className="text-lg font-semibold text-white">{title}</h2>
          )}
        </div>

        {showUserIcon && (
          <Link
            href="/student"
            className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
          >
            <User className="h-4 w-4 text-white" />
          </Link>
        )}
      </div>
    </header>
  );
}
