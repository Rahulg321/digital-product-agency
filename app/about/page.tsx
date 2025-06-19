import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </Link>
        <div className="flex items-center space-x-6">
          <button className="text-sm">EN</button>
          <Link href="/contact" className="text-sm hover:underline">
            CONTACT US
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
          className="absolute right-0 top-20 h-[350px] w-[350px] animate-pulse rounded-full bg-gradient-to-br from-green-400 via-teal-300 to-blue-200 opacity-60 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <h1 className="max-w-3xl text-6xl font-light leading-tight tracking-tight">
            CRAFTING
            <br />
            DIGITAL
            <br />
            EXCELLENCE.
          </h1>

          <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light tracking-tight">OUR STORY</h2>
                <p className="mt-6 text-sm leading-relaxed text-gray-600">
                  Founded in 2018, we began as a small team of passionate designers and developers with a shared vision:
                  to create digital experiences that not only look beautiful but also drive meaningful results for our
                  clients.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  What started as a boutique studio has grown into a full-service digital agency, but we've never lost
                  sight of our core values: creativity, quality, and genuine partnership with every client we work with.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light tracking-tight">OUR MISSION</h2>
                <p className="mt-6 text-sm leading-relaxed text-gray-600">
                  We believe that great design is more than just aesthetics—it's about solving problems, telling
                  stories, and creating connections. Our mission is to help brands and businesses communicate their
                  unique value through exceptional digital experiences.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light tracking-tight">WHAT WE DO</h2>
                <div className="mt-6 space-y-4">
                  <div className="border-l-2 border-black pl-4">
                    <h3 className="text-sm font-medium tracking-wide">WEB DESIGN & DEVELOPMENT</h3>
                    <p className="mt-1 text-xs text-gray-600">
                      Custom websites that perform as beautifully as they look
                    </p>
                  </div>
                  <div className="border-l-2 border-black pl-4">
                    <h3 className="text-sm font-medium tracking-wide">MOBILE APPLICATIONS</h3>
                    <p className="mt-1 text-xs text-gray-600">Native and cross-platform apps that users love</p>
                  </div>
                  <div className="border-l-2 border-black pl-4">
                    <h3 className="text-sm font-medium tracking-wide">BRAND IDENTITY</h3>
                    <p className="mt-1 text-xs text-gray-600">Visual identities that capture your brand's essence</p>
                  </div>
                  <div className="border-l-2 border-black pl-4">
                    <h3 className="text-sm font-medium tracking-wide">3D DESIGN & ANIMATION</h3>
                    <p className="mt-1 text-xs text-gray-600">Immersive experiences that bring ideas to life</p>
                  </div>
                  <div className="border-l-2 border-black pl-4">
                    <h3 className="text-sm font-medium tracking-wide">MOTION GRAPHICS</h3>
                    <p className="mt-1 text-xs text-gray-600">Dynamic visuals that engage and inspire</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-light tracking-tight">OUR APPROACH</h2>
                <p className="mt-6 text-sm leading-relaxed text-gray-600">
                  Every project begins with understanding. We dive deep into your business, your audience, and your
                  goals before we put pen to paper or fingers to keyboard.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Our collaborative process ensures that you're involved every step of the way, from initial concept to
                  final launch and beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <h2 className="text-center text-4xl font-light tracking-tight">WHO WE ARE</h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-gray-600">
              Meet the creative minds behind our digital excellence. Our diverse team brings together years of
              experience in design, development, and digital strategy.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group text-center">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Rahul"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-lg font-light tracking-tight">RAHUL</h3>
                <p className="mt-1 text-sm text-gray-600">Creative Director</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  Visionary leader with 8+ years in digital design and brand strategy.
                </p>
              </div>

              <div className="group text-center">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Prasenjeet"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-lg font-light tracking-tight">PRASENJEET</h3>
                <p className="mt-1 text-sm text-gray-600">Lead Developer</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  Full-stack expert specializing in modern web technologies and scalable solutions.
                </p>
              </div>

              <div className="group text-center">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Raunak"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-lg font-light tracking-tight">RAUNAK</h3>
                <p className="mt-1 text-sm text-gray-600">UX/UI Designer</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  User experience specialist focused on creating intuitive and engaging interfaces.
                </p>
              </div>

              <div className="group text-center">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Anuj"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-lg font-light tracking-tight">ANUJ</h3>
                <p className="mt-1 text-sm text-gray-600">Motion Designer</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  Animation expert bringing brands to life through dynamic visual storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-light tracking-tight">READY TO CREATE SOMETHING AMAZING?</h2>
              <p className="mt-6 text-sm leading-relaxed text-gray-600">
                Whether you're a startup with a bold vision or an established company looking to innovate, we're here to
                help you make your mark in the digital world.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full border-2 px-8">
                    <span className="relative">
                      START YOUR PROJECT
                      <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm">SINCE 2018</span>
              <span className="h-px w-12 bg-black"></span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">100+ PROJECTS</span>
              <span className="h-px w-12 bg-black"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
