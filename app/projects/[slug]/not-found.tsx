import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light tracking-tight">404</h1>
        <p className="mt-4 text-xl text-gray-600">Project not found</p>
        <p className="mt-2 text-sm text-gray-500">The project you're looking for doesn't exist or has been moved.</p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="outline" className="rounded-full border-2 px-8">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
