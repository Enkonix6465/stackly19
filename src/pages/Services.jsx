import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  // Smooth scroll to section if hash is present
  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
      }
    }
  }, [])

  const user = getCurrentUser()
  const capabilities = ['UI/UX','Frontend','Integration','Performance','Testing','DX']
  const capabilityContent = {
    'UI/UX': {
      title: 'UI/UX Design',
      points: [
        'Flows, wireframes, and high-fidelity prototypes',
        'Design systems with accessibility baked in',
        'Motion and micro-interactions with purpose'
      ]
    },
    'Frontend': {
      title: 'Frontend Engineering',
      points: [
        'Typed, composable components',
        'State, routing, and data-fetching patterns',
        'Clean architecture and DX'
      ]
    },
    'Integration': {
      title: 'Backend Integration',
      points: [
        'Auth flows, error boundaries, retries',
        'REST/GraphQL data wiring and caching',
        'Robust forms and validations'
      ]
    },
    'Performance': {
      title: 'Performance',
      points: [
        'Core Web Vitals and Lighthouse improvements',
        'Code splitting, image strategy, caching',
        'Perf budgets and monitoring'
      ]
    },
    'Testing': {
      title: 'Testing & QA',
      points: [
        'Unit, integration, and E2E coverage',
        'A11y checks and visual testing',
        'CI-friendly suites and reports'
      ]
    },
    'DX': {
      title: 'Developer Experience',
      points: [
        'Tooling, linting, and code quality gates',
        'Docs and handoff practices',
        'Onboarding with confidence'
      ]
    }
  }
  const [activeCapability, setActiveCapability] = useState(capabilities[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isWheelHovered, setIsWheelHovered] = useState(false)

  // Auto-cycle active capability when not hovered
  useEffect(() => {
    if (isWheelHovered) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length)
    }, 2200)
    return () => clearInterval(id)
  }, [isWheelHovered, capabilities.length])

  // Sync capability text with active index
  useEffect(() => {
    setActiveCapability(capabilities[activeIndex])
  }, [activeIndex])

  function handleLogout() {
    logoutUser()
    navigate('/login', { replace: true })
  }

  return (
    <div className="bg-white text-black">
      <Navbar user={user} />



{/* Showcase */}
<section
  id="showcase"
  className="relative overflow-hidden h-screen flex items-center justify-center text-center"
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/public/vedio4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (darken video for readability) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    <p className="text-sm tracking-widest text-indigo-300 font-medium">
      Our Services
    </p>
    <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
      Empowering Businesses with Freelance Expertise
    </h1>
    <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
      Showcasing projects that blend creativity, technology, and strategy to deliver meaningful results.
    </p>
    <div className="mt-8 flex gap-4 justify-center">
      {/* Primary Button */}
      <a
        href="/services"
        className="rounded-md bg-indigo-500 text-black px-5 py-2.5 hover:bg-indigo-600 hover:text-white transition"
      >
        Explore 
      </a>

      {/* Secondary Button */}
      <a
        href="/contact"
        className="rounded-md border border-white text-white px-5 py-2.5 
                   hover:bg-white hover:text-indigo-500 transition"
      >
        Reach out
      </a>
    </div>
  </div>
</section>


      
      


      {/* 2) Flipbox Grid: Six services with 3D flip cards (freelancing version) */}
<section id="offerings" className="border-t border-black/10">
  <div className="mx-auto max-w-6xl px-4 py-24">
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-extrabold">What I Offer</h2>
        <p className="text-black/70 mt-1">Freelance services designed to help your business grow</p>
      </div>
      <a href="#cta" className="hidden md:inline-block text-sm underline hover:text-indigo-600">
        Start a project
      </a>
    </div>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { t: 'Website Development', d: 'Custom business websites and landing pages that convert visitors into clients.', path: '/services/website-development' },
        { t: 'E-Commerce Solutions', d: 'Online stores with secure checkout, product management, and seamless user experience.', path: '/services/ecommerce-solutions' },
        { t: 'Branding & Design', d: 'Logos, color palettes, and visual systems that make your brand unforgettable.', path: '/services/branding-design' },
        { t: 'Content & Copywriting', d: 'Engaging blog posts, SEO content, and product descriptions that drive traffic.', path: '/services/content-copywriting' },
        { t: 'Digital Marketing', d: 'Social media campaigns, ads, and email funnels that grow your audience.', path: '/services/digital-marketing' },
        { t: 'Ongoing Support', d: 'Website maintenance, updates, and long-term collaboration to keep you ahead.', path: '/services/ongoing-support' },
      ].map((card, idx) => (
        <article
          key={card.t}
          className="[perspective:1000px] animate-slide-up"
          style={{ animationDelay: `${idx * 60}ms` }}
        >
          <div className="group relative h-56 w-full rounded-2xl border border-black/10 [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]">
            {/* front */}
            <div className="absolute inset-0 rounded-2xl bg-white p-6 [backface-visibility:hidden]">
              <div className="h-11 w-11 rounded-md bg-indigo-500 text-black grid place-items-center font-bold">
                {idx + 1}
              </div>
              <h3 className="mt-4 text-xl font-bold">{card.t}</h3>
              <p className="mt-2 text-black/70 line-clamp-3">{card.d}</p>
            </div>
            {/* back */}
            <div className="absolute inset-0 rounded-2xl bg-black text-white p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3 className="text-xl font-bold">{card.t}</h3>
              <p className="mt-2 text-white/80 text-sm">
                Deliverables tailored to your goals with clear milestones and transparent pricing.
              </p>
              <button
                onClick={() => navigate(card.path)}
                className="mt-4 inline-flex items-center gap-2 text-indigo-300 font-semibold"
              >
                Learn more
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      <section id="capabilities" className="bg-black text-white py-20">
  <div className="mx-auto max-w-6xl px-4 text-center">
    <h2 className="text-3xl font-extrabold">Our Capabilities</h2>
    <p className="text-white/70 mt-2">Explore what we excel at</p>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(capabilityContent).map(([key, { title, points }]) => (
        <div
          key={key}
          className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-indigo-500/10 transition"
        >
          <h3 className="text-lg font-semibold group-hover:text-indigo-400">{title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {points.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="h-2 w-2 mt-1 rounded-full bg-indigo-400"></span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 4) Zooming Packages (Freelancing-focused, Light Mode) */}
<section id="packages" className="border-t border-black/10 bg-white text-black">
  <div className="mx-auto max-w-6xl px-4 py-24">
    <h2 className="text-3xl font-extrabold text-black">Freelance Packages</h2>
    <p className="text-black/70 mt-1">Flexible plans for projects big or small</p>

    <div className="mt-10 grid md:grid-cols-3 gap-6">
      {[
        [
          'Basic Gig',
          'Quick turnaround for small tasks and fixes.',
          'Best for one-time jobs',
          ['Bug fixing', 'Small UI changes', 'Simple landing page'],
        ],
        [
          'Pro Project',
          'Full project support with regular updates.',
          'Best for startups',
          ['End-to-end development', 'Responsive design', 'Weekly progress calls'],
        ],
        [
          'Dedicated Freelancer',
          'Your on-demand developer/designer for longer collaboration.',
          'Best for ongoing work',
          ['Priority support', 'Monthly retainer model', 'Flexible scope & revisions'],
        ],
      ].map(([title, desc, badge, features], i) => (
        <div
          key={title}
          className="relative rounded-2xl border border-black/10 bg-white p-6 animate-slide-up hover:animate-zoom-in-out transition-shadow hover:shadow-xl hover:shadow-indigo-200/50"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Badge */}
          <div className="absolute right-4 top-4 text-xs rounded-full border border-black/20 bg-black/5 backdrop-blur px-2 py-0.5 text-black/70">
            {badge}
          </div>

          {/* Title + Desc */}
          <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
          <p className="mt-2 text-black/70">{desc}</p>

          {/* Features */}
          <ul className="mt-4 space-y-2 text-sm text-black/80">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#cta"
            className="mt-5 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-500 transition-colors"
          >
            Choose plan
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 5) Case Studies (mosaic gallery) */}
<section id="case-studies" className="border-t border-black/10 bg-black text-white">
  <div className="mx-auto max-w-6xl px-4 py-24">
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-extrabold">Freelance Projects</h2>
        <p className="text-white/70 mt-1">Showcasing client work across industries</p>
      </div>
      <a href="#cta" className="hidden md:inline-block text-sm underline hover:text-indigo-300">Work with me</a>
    </div>

    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
      {[
        ['/images/mobile-app.jpg','Mobile App Development'],
        ['/images/content-writing.jpg','Content Writing Project'],
        ['/images/digital-marketing.jpg','Digital Marketing Campaign'],
        ['/images/uiux-design.jpg','UI/UX Design for Startup'],
        ['/images/seo.jpg','SEO & Growth Strategy'],
        ['/images/branding.jpg','Branding & Visual Identity'],
      ].map(([src, alt], i) => (
        <figure
          key={i}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 animate-slide-up"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <figcaption className="absolute bottom-2 left-2 right-2 rounded-md bg-black/40 px-2 py-1 text-xs backdrop-blur">
            {alt}
          </figcaption>
        </figure>
      ))}
    </div>
  </div>
</section>


      {/* 6) CTA (distinct for freelancing platform) */}
<section id="cta" className="border-t border-black/10 relative overflow-hidden">
  <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
  <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-3 gap-10 items-center">
    <div className="md:col-span-2">
      <h2 className="text-3xl font-extrabold">Hire Top Freelancers Today</h2>
      <p className="text-black/70 mt-2">
        Whether you need a developer, designer, writer, or marketer — get your project done by trusted freelancers worldwide.
      </p>
      <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
        {[
          'Verified professionals',
          'On-time project delivery',
          'Affordable pricing',
          'Flexible collaboration'
        ].map(b => (
          <li key={b} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-black/80">{b}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="md:justify-self-end">
      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white border border-black/10"
      >
        Post Your Project
      </a>
    </div>
  </div>
</section>


      <Footer />
    </div>
  )
}


