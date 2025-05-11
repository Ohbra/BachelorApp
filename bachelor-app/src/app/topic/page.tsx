import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopicDetail() {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#e6e6ff] text-black">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/">
            <ChevronLeft className="h-5 w-5 mr-2" />
          </Link>
          <h2 className="text-lg font-semibold">Title topic</h2>
        </div>

        <div>
          <p className="text-sm text-gray-600">Faculty | field</p>
          <p className="text-sm">Name Professor</p>
          <p className="text-sm">email@address.com</p>
          <p className="text-sm">0123456789</p>
          <Button
            variant="outline"
            size="sm"
            className="text-xs rounded-full bg-yellow-400 text-black hover:bg-yellow-500 border-none mt-2"
          >
            send email
          </Button>
        </div>

        <div className="mt-6">
          <p className="text-sm mb-4">
            This is the topic description. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
            nisl ut aliquip ex ea commodo consequat.
          </p>

          <h3 className="text-sm font-medium mb-2">Requirements:</h3>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>
              Short description of the needed requirements. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut.
            </li>
            <li>
              Skills or prior knowledge. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
            </li>
          </ul>

          <h3 className="text-sm font-medium mt-4 mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-[#d8d8ff] px-3 py-1.5 rounded-full">
              Data science
            </span>
            <span className="text-xs bg-[#d8d8ff] px-3 py-1.5 rounded-full">
              Frontend
            </span>
            <span className="text-xs bg-[#d8d8ff] px-3 py-1.5 rounded-full">
              Marketing
            </span>
            <span className="text-xs bg-[#d8d8ff] px-3 py-1.5 rounded-full">
              AI
            </span>
            <span className="text-xs bg-[#d8d8ff] px-3 py-1.5 rounded-full">
              UI/UX Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
