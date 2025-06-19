import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Award } from "lucide-react"
import { notFound } from "next/navigation"

// Project data - in a real app, this would come from a database or CMS
const projects = {
  "techflow-ecommerce": {
    title: "TechFlow E-commerce Platform",
    subtitle: "Revolutionizing Online Shopping Experience",
    client: "TechFlow Inc.",
    clientRole: "Sarah Chen, CEO",
    year: "2023",
    duration: "4 months",
    category: "Web Design & Development",
    description:
      "A comprehensive e-commerce platform built for TechFlow Inc., featuring advanced product filtering, seamless checkout experience, and integrated inventory management. The platform was designed to handle high traffic volumes while maintaining optimal performance and user experience.",
    challenge:
      "TechFlow needed a scalable e-commerce solution that could handle their growing product catalog and increasing customer base. Their existing platform was outdated and couldn't support modern shopping behaviors or mobile users effectively.",
    solution:
      "We developed a modern, responsive e-commerce platform using cutting-edge technologies. The solution included advanced search capabilities, personalized product recommendations, and a streamlined checkout process that reduced cart abandonment by 40%.",
    results: [
      "40% increase in conversion rate",
      "60% improvement in page load speed",
      "200% increase in mobile sales",
      "35% reduction in cart abandonment",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Redis", "AWS"],
    liveUrl: "https://techflow-demo.com",
    images: [
      "/placeholder.svg?height=600&width=800&text=TechFlow+Homepage",
      "/placeholder.svg?height=600&width=800&text=Product+Catalog",
      "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
      "/placeholder.svg?height=600&width=800&text=Checkout+Process",
      "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
    ],
    testimonial:
      "The team delivered an exceptional e-commerce platform that increased our conversion rate by 40%. Their attention to detail and user experience is unmatched.",
    color: "from-blue-400 to-purple-500",
  },
  "fitlife-mobile-app": {
    title: "FitLife Mobile App",
    subtitle: "Personal Fitness Companion",
    client: "FitLife Wellness",
    clientRole: "Marcus Johnson, Founder",
    year: "2023",
    duration: "6 months",
    category: "Mobile App Development",
    description:
      "A comprehensive fitness tracking application that combines workout planning, nutrition tracking, and social features. The app uses AI to provide personalized workout recommendations and tracks user progress with detailed analytics.",
    challenge:
      "FitLife wanted to create a mobile app that would stand out in the crowded fitness app market. They needed a solution that was both comprehensive and easy to use, with features that would keep users engaged long-term.",
    solution:
      "We developed a native mobile app with intuitive UI/UX design, AI-powered workout recommendations, social sharing features, and comprehensive progress tracking. The app includes video tutorials, meal planning, and community challenges.",
    results: [
      "200% increase in app downloads",
      "85% user retention rate after 30 days",
      "4.8/5 app store rating",
      "150% increase in premium subscriptions",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "TensorFlow", "Stripe"],
    liveUrl: "https://fitlife-app.com",
    images: [
      "/placeholder.svg?height=600&width=400&text=App+Home+Screen",
      "/placeholder.svg?height=600&width=400&text=Workout+Tracker",
      "/placeholder.svg?height=600&width=400&text=Progress+Analytics",
      "/placeholder.svg?height=600&width=400&text=Social+Features",
      "/placeholder.svg?height=600&width=400&text=Meal+Planning",
    ],
    testimonial:
      "Working with this team was a game-changer. They created an intuitive fitness app that our users love. Downloads increased by 200% in the first month.",
    color: "from-green-400 to-teal-500",
  },
  "luxe-brand-identity": {
    title: "Luxe Brand Identity",
    subtitle: "Luxury Redefined",
    client: "Luxe Fashion House",
    clientRole: "Isabella Rodriguez, CMO",
    year: "2023",
    duration: "3 months",
    category: "Brand Design & Strategy",
    description:
      "Complete brand identity redesign for a luxury fashion house, including logo design, color palette, typography, packaging design, and brand guidelines. The project aimed to position Luxe as a premium brand in the competitive luxury market.",
    challenge:
      "Luxe needed to differentiate themselves in the luxury fashion market and appeal to high-end consumers. Their existing brand identity felt outdated and didn't reflect their premium positioning or quality.",
    solution:
      "We created a sophisticated brand identity that embodies luxury and elegance. The design system includes a refined logo, premium color palette, elegant typography, and comprehensive brand guidelines that ensure consistency across all touchpoints.",
    results: [
      "300% increase in brand recognition",
      "45% increase in premium product sales",
      "60% improvement in brand perception scores",
      "25% increase in customer lifetime value",
    ],
    technologies: ["Adobe Creative Suite", "Figma", "After Effects", "InDesign"],
    liveUrl: "https://luxe-fashion.com",
    images: [
      "/placeholder.svg?height=600&width=800&text=Brand+Logo+Design",
      "/placeholder.svg?height=600&width=800&text=Color+Palette",
      "/placeholder.svg?height=600&width=800&text=Typography+System",
      "/placeholder.svg?height=600&width=800&text=Packaging+Design",
      "/placeholder.svg?height=600&width=800&text=Brand+Applications",
    ],
    testimonial:
      "They transformed our brand completely. The new identity perfectly captures our luxury positioning and has helped us attract premium clients.",
    color: "from-purple-400 to-pink-500",
  },
  "innotech-3d-showcase": {
    title: "InnoTech 3D Showcase",
    subtitle: "Interactive Product Visualization",
    client: "InnoTech Solutions",
    clientRole: "David Park, Product Manager",
    year: "2023",
    duration: "5 months",
    category: "3D Design & Animation",
    description:
      "An immersive 3D product showcase platform that allows customers to interact with InnoTech's products in a virtual environment. The platform features realistic 3D models, interactive animations, and AR capabilities for mobile devices.",
    challenge:
      "InnoTech needed a way to showcase their complex technical products online in an engaging and informative way. Traditional product photos weren't sufficient to demonstrate the products' features and capabilities.",
    solution:
      "We developed a cutting-edge 3D visualization platform with interactive product models, detailed animations showing product features, and AR integration for mobile viewing. The platform allows customers to explore products from every angle.",
    results: [
      "180% increase in product page engagement",
      "50% reduction in product return rates",
      "75% increase in qualified leads",
      "40% improvement in sales conversion",
    ],
    technologies: ["Three.js", "WebGL", "Blender", "React", "WebXR", "GSAP"],
    liveUrl: "https://innotech-showcase.com",
    images: [
      "/placeholder.svg?height=600&width=800&text=3D+Product+Models",
      "/placeholder.svg?height=600&width=800&text=Interactive+Features",
      "/placeholder.svg?height=600&width=800&text=AR+Integration",
      "/placeholder.svg?height=600&width=800&text=Animation+Sequences",
      "/placeholder.svg?height=600&width=800&text=Mobile+Experience",
    ],
    testimonial:
      "The 3D visualizations brought our products to life in ways we never imagined. Customer engagement on our website increased dramatically.",
    color: "from-cyan-400 to-blue-500",
  },
  "greenearth-campaign": {
    title: "GreenEarth Campaign",
    subtitle: "Environmental Awareness Through Motion",
    client: "GreenEarth Foundation",
    clientRole: "Emma Thompson, Marketing Director",
    year: "2023",
    duration: "2 months",
    category: "Motion Design & Animation",
    description:
      "A comprehensive motion graphics campaign for environmental awareness, featuring animated videos, social media content, and interactive web animations. The campaign aimed to educate and inspire action on climate change issues.",
    challenge:
      "GreenEarth needed to communicate complex environmental issues in an accessible and engaging way that would resonate with diverse audiences and inspire action.",
    solution:
      "We created a series of compelling motion graphics that simplify complex environmental data into digestible visual stories. The campaign includes animated explainer videos, social media content, and interactive web animations.",
    results: [
      "500% increase in social media engagement",
      "2M+ video views across platforms",
      "300% increase in website traffic",
      "150% increase in campaign donations",
    ],
    technologies: ["After Effects", "Cinema 4D", "Lottie", "GSAP", "Premiere Pro"],
    liveUrl: "https://greenearth-campaign.org",
    images: [
      "/placeholder.svg?height=600&width=800&text=Motion+Graphics+Stills",
      "/placeholder.svg?height=600&width=800&text=Character+Animation",
      "/placeholder.svg?height=600&width=800&text=Data+Visualization",
      "/placeholder.svg?height=600&width=800&text=Social+Media+Content",
      "/placeholder.svg?height=600&width=800&text=Interactive+Elements",
    ],
    testimonial:
      "Their motion graphics campaign was absolutely stunning. It helped us communicate our environmental message in a powerful and memorable way.",
    color: "from-green-400 to-emerald-500",
  },
  "financehub-dashboard": {
    title: "FinanceHub Dashboard",
    subtitle: "Intelligent Financial Management",
    client: "FinanceHub Corp",
    clientRole: "Robert Kim, CTO",
    year: "2023",
    duration: "7 months",
    category: "Web Application Design",
    description:
      "A sophisticated financial dashboard application that provides comprehensive portfolio management, real-time market data, and advanced analytics. The platform serves both individual investors and financial advisors with different permission levels and features.",
    challenge:
      "FinanceHub needed a complex financial dashboard that could handle large amounts of data while remaining intuitive for users with varying levels of financial expertise.",
    solution:
      "We designed and developed a comprehensive dashboard with customizable widgets, real-time data visualization, advanced filtering options, and role-based access control. The interface prioritizes clarity and ease of use without sacrificing functionality.",
    results: [
      "90% improvement in user task completion",
      "65% reduction in support tickets",
      "120% increase in daily active users",
      "50% faster portfolio analysis time",
    ],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "WebSocket", "Chart.js"],
    liveUrl: "https://financehub-dashboard.com",
    images: [
      "/placeholder.svg?height=600&width=800&text=Dashboard+Overview",
      "/placeholder.svg?height=600&width=800&text=Portfolio+Analytics",
      "/placeholder.svg?height=600&width=800&text=Market+Data+Visualization",
      "/placeholder.svg?height=600&width=800&text=Trading+Interface",
      "/placeholder.svg?height=600&width=800&text=Reports+Section",
    ],
    testimonial:
      "They created a complex financial dashboard that's surprisingly intuitive. Our users can now manage their investments with confidence and ease.",
    color: "from-indigo-400 to-purple-500",
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

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
          className={`absolute right-0 top-0 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-br ${project.color} opacity-60 blur-3xl`}
          aria-hidden="true"
        />

        <div className="relative">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="mt-8">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="mt-4 text-5xl font-light leading-tight tracking-tight lg:text-6xl">{project.title}</h1>
            <p className="mt-4 text-xl font-light text-gray-600">{project.subtitle}</p>
          </div>

          {/* Project Info Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Image */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-light tracking-tight">Project Overview</h2>
                <p className="text-sm leading-relaxed text-gray-600">{project.description}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-light tracking-tight">The Challenge</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-light tracking-tight">Our Solution</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{project.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-light tracking-tight">Results & Impact</h3>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h3 className="text-lg font-light tracking-tight">Project Gallery</h3>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 2}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-light tracking-tight">Project Details</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">{project.client}</p>
                      <p className="text-xs text-gray-600">{project.clientRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">{project.duration}</p>
                      <p className="text-xs text-gray-600">Project Duration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-gray-400" />
                  <h3 className="text-lg font-light tracking-tight">Technologies Used</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="rounded-full bg-black/10 px-3 py-1 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-light tracking-tight">Client Feedback</h3>
                <blockquote className="mt-4 text-sm leading-relaxed text-gray-600">"{project.testimonial}"</blockquote>
                <p className="mt-4 text-xs font-medium">— {project.clientRole}</p>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <Button asChild className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full border-2">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-24">
            <h2 className="text-3xl font-light tracking-tight">More Projects</h2>
            <div className="mt-8 flex justify-center">
              <Link href="/">
                <Button variant="outline" className="rounded-full border-2 px-8">
                  <span className="relative">
                    VIEW ALL PROJECTS
                    <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
