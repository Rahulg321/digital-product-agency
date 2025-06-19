import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-6">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-sm">EN</button>
          <Link href="/about" className="text-sm hover:underline">
            ABOUT US
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            CONTACT US
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
          className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <h1 className="max-w-3xl text-6xl font-light leading-tight tracking-tight">
            WE CREATE
            <br />
            BEST DIGITAL
            <br />
            PRODUCTS.
          </h1>

          <div className="mt-24 flex justify-between">
            <div className="max-w-md">
              <Button variant="outline" className="rounded-full border-2 px-8">
                <span className="relative">
                  DISCUSS THE PROJECT
                  <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
                </span>
              </Button>
              <p className="mt-8 text-sm leading-relaxed text-gray-600">
                WE ARE THE LEADERS IN WEB & MOBILE
                <br />
                DESIGN AND DEVELOPMENT INDUSTRY.
              </p>
            </div>

            <div className="flex items-end">
              <div className="flex items-center space-x-2">
                <span className="text-sm">WHO WE ARE</span>
                <span className="h-px w-12 bg-black"></span>
              </div>
            </div>
          </div>

          <p className="mt-24 max-w-xl text-sm leading-relaxed text-gray-600">
            We create quality content and cool ideas. We create websites, applications, 3D design, motion design and
            animation. We bring the most daring ideas to life
          </p>
        </div>

        {/* Testimonials Section */}
        <section className="mt-32">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-light tracking-tight">OUR WORK</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm">FEATURED PROJECTS</span>
              <span className="h-px w-12 bg-black"></span>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/projects/techflow-ecommerce" className="block">
              <div className="group relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="TechFlow E-commerce Platform"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light tracking-tight">TECHFLOW E-COMMERCE</h3>
                  <p className="mt-2 text-sm text-gray-600">Web Design & Development</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    "The team delivered an exceptional e-commerce platform that increased our conversion rate by 40%.
                    Their attention to detail and user experience is unmatched."
                  </p>
                  <p className="mt-3 text-xs font-medium">— Sarah Chen, CEO TechFlow</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/fitlife-mobile-app" className="block">
              <div className="group relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="FitLife Mobile App"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light tracking-tight">FITLIFE MOBILE APP</h3>
                  <p className="mt-2 text-sm text-gray-600">Mobile App Development</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    "Working with this team was a game-changer. They created an intuitive fitness app that our users
                    love. Downloads increased by 200% in the first month."
                  </p>
                  <p className="mt-3 text-xs font-medium">— Marcus Johnson, Founder FitLife</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/luxe-brand-identity" className="block">
              <div className="group relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Luxe Brand Identity"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light tracking-tight">LUXE BRAND IDENTITY</h3>
                  <p className="mt-2 text-sm text-gray-600">Brand Design & Strategy</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    "They transformed our brand completely. The new identity perfectly captures our luxury positioning
                    and has helped us attract premium clients."
                  </p>
                  <p className="mt-3 text-xs font-medium">— Isabella Rodriguez, CMO Luxe</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/innotech-3d-showcase" className="block">
              <div className="group relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="InnoTech 3D Showcase"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light tracking-tight">INNOTECH 3D SHOWCASE</h3>
                  <p className="mt-2 text-sm text-gray-600">3D Design & Animation</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    "The 3D visualizations brought our products to life in ways we never imagined. Customer engagement
                    on our website increased dramatically."
                  </p>
                  <p className="mt-3 text-xs font-medium">— David Park, Product Manager</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/greenearth-campaign" className="block">
              <div className="group relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="GreenEarth Campaign"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light tracking-tight">GREENEARTH CAMPAIGN</h3>
                  <p className="mt-2 text-sm text-gray-600">Motion Design & Animation</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    "Their motion graphics campaign was absolutely stunning. It helped us communicate our environmental
                    message in a powerful and memorable way."
                  </p>
                  <p className="mt-3 text-xs font-medium">— Emma Thompson, Marketing Director</p>
                </div>
              </div>
            </Link>

            <Link href="/projects/financehub-dashboard" className="block">
              <div className="group relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="FinanceHub Dashboard"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light tracking-tight">FINANCEHUB DASHBOARD</h3>
                  <p className="mt-2 text-sm text-gray-600">Web Application Design</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    "They created a complex financial dashboard that's surprisingly intuitive. Our users can now manage
                    their investments with confidence and ease."
                  </p>
                  <p className="mt-3 text-xs font-medium">— Robert Kim, CTO FinanceHub</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button variant="outline" className="rounded-full border-2 px-8">
                <span className="relative">
                  VIEW ALL PROJECTS
                  <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
                </span>
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
