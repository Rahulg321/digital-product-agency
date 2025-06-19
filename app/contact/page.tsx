import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </Link>
        <div className="flex items-center space-x-6">
          <button className="text-sm">EN</button>
          <Link href="/about" className="text-sm hover:underline">
            ABOUT US
          </Link>
          <Link href="/" className="text-sm hover:underline">
            HOME
          </Link>
          <button className="flex flex-col space-y-1">
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </header>

      <main className="relative px-6 pt-12">
        {/* Gradient blob */}
        <div
          className="absolute left-0 top-0 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 opacity-60 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <h1 className="max-w-3xl text-6xl font-light leading-tight tracking-tight">
            LET'S START
            <br />
            SOMETHING
            <br />
            TOGETHER.
          </h1>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light tracking-tight">GET IN TOUCH</h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Ready to bring your digital vision to life? We'd love to hear about your project and explore how we
                  can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium tracking-wide">EMAIL</h3>
                  <p className="mt-1 text-gray-600">hello@digitalagency.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-wide">PHONE</h3>
                  <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-wide">OFFICE</h3>
                  <p className="mt-1 text-gray-600">
                    123 Creative Street
                    <br />
                    Design District, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium tracking-wide">
                      FIRST NAME
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      className="mt-2 border-gray-300 bg-white/50 backdrop-blur-sm focus:border-black focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium tracking-wide">
                      LAST NAME
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      className="mt-2 border-gray-300 bg-white/50 backdrop-blur-sm focus:border-black focus:ring-black"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium tracking-wide">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-2 border-gray-300 bg-white/50 backdrop-blur-sm focus:border-black focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium tracking-wide">
                    COMPANY
                  </label>
                  <Input
                    id="company"
                    name="company"
                    className="mt-2 border-gray-300 bg-white/50 backdrop-blur-sm focus:border-black focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium tracking-wide">
                    PROJECT TYPE
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="mt-2 w-full rounded-md border border-gray-300 bg-white/50 px-3 py-2 text-sm backdrop-blur-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="branding">Branding</option>
                    <option value="3d-design">3D Design</option>
                    <option value="motion-design">Motion Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium tracking-wide">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 border-gray-300 bg-white/50 backdrop-blur-sm focus:border-black focus:ring-black"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <Button className="w-full rounded-full bg-black px-8 py-3 text-white hover:bg-gray-800">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-24 flex justify-end">
            <div className="flex items-center space-x-2">
              <span className="text-sm">READY TO CREATE</span>
              <span className="h-px w-12 bg-black"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
