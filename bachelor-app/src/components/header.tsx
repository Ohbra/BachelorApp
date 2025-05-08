import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  backUrl?: string;
  showBack?: boolean;
}

export function Header({
  title,
  backUrl = "/",
  showBack = false,
}: HeaderProps) {
  return (
    <header className="p-4">
      <div className="flex items-center mb-6">
        {showBack && (
          <Link href={backUrl}>
            <ChevronLeft className="h-5 w-5 mr-2 text-white" />
          </Link>
        )}
        {title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
      </div>
    </header>
  );
}
