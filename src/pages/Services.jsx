import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const navigate = useNavigate()
  const { t } = useTranslation()

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
  const capabilities = [
    { key: 'UI/UX', title: t('services.capabilities.uiux.title'), points: t('services.capabilities.uiux.points', { returnObjects: true }) },
    { key: 'Frontend', title: t('services.capabilities.frontend.title'), points: t('services.capabilities.frontend.points', { returnObjects: true }) },
    { key: 'Integration', title: t('services.capabilities.integration.title'), points: t('services.capabilities.integration.points', { returnObjects: true }) },
    { key: 'Performance', title: t('services.capabilities.performance.title'), points: t('services.capabilities.performance.points', { returnObjects: true }) },
    { key: 'Testing', title: t('services.capabilities.testing.title'), points: t('services.capabilities.testing.points', { returnObjects: true }) },
    { key: 'DX', title: t('services.capabilities.dx.title'), points: t('services.capabilities.dx.points', { returnObjects: true }) }
  ]
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
          {t('services.video.notSupported')}
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <p className="text-sm tracking-widest text-indigo-300 font-medium">
            {t('services.showcase.tagline')}
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
            {t('services.showcase.title')}
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
            {t('services.showcase.subtitle')}
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            {/* Primary Button */}
            <a
              href="/services"
              className="rounded-md bg-indigo-500 text-black px-5 py-2.5 hover:bg-indigo-600 hover:text-white transition"
            >
              {t('services.showcase.exploreButton')}
            </a>

            {/* Secondary Button */}
            <a
              href="/contact"
              className="rounded-md border border-white text-white px-5 py-2.5 
                         hover:bg-white hover:text-indigo-500 transition"
            >
              {t('services.showcase.reachOutButton')}
            </a>
          </div>
        </div>
      </section>

      {/* 2) Flipbox Grid: Six services with 3D flip cards (freelancing version) */}
      <section id="offerings" className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-extrabold">{t('services.offerings.title')}</h2>
              <p className="text-black/70 mt-1">{t('services.offerings.subtitle')}</p>
            </div>
            <a href="#cta" className="hidden md:inline-block text-sm underline hover:text-indigo-600">
              {t('services.offerings.startProjectButton')}
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: t('services.offerings.cards.websiteDevelopment.title'), d: t('services.offerings.cards.websiteDevelopment.description'), path: '/services/website-development' },
              { t: t('services.offerings.cards.ecommerceSolutions.title'), d: t('services.offerings.cards.ecommerceSolutions.description'), path: '/services/ecommerce-solutions' },
              { t: t('services.offerings.cards.brandingDesign.title'), d: t('services.offerings.cards.brandingDesign.description'), path: '/services/branding-design' },
              { t: t('services.offerings.cards.contentCopywriting.title'), d: t('services.offerings.cards.contentCopywriting.description'), path: '/services/content-copywriting' },
              { t: t('services.offerings.cards.digitalMarketing.title'), d: t('services.offerings.cards.digitalMarketing.description'), path: '/services/digital-marketing' },
              { t: t('services.offerings.cards.ongoingSupport.title'), d: t('services.offerings.cards.ongoingSupport.description'), path: '/services/ongoing-support' },
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
                      {t('services.offerings.cards.backDescription')}
                    </p>
                    <button
                      onClick={() => navigate(card.path)}
                      className="mt-4 inline-flex items-center gap-2 text-indigo-300 font-semibold"
                    >
                      {t('services.offerings.cards.learnMoreButton')}
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
          <h2 className="text-3xl font-extrabold">{t('services.capabilities.title')}</h2>
          <p className="text-white/70 mt-2">{t('services.capabilities.subtitle')}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ key, title, points }) => (
              <div
                key={key}
                className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-indigo-500/10 transition"
              >
                <h3 className="text-lg font-semibold group-hover:text-indigo-400">{title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {points.map((p, index) => (
                    <li key={index} className="flex gap-2">
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
          <h2 className="text-3xl font-extrabold text-black">{t('services.packages.title')}</h2>
          <p className="text-black/70 mt-1">{t('services.packages.subtitle')}</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              [
                t('services.packages.basic.title'),
                t('services.packages.basic.description'),
                t('services.packages.basic.badge'),
                [t('services.packages.basic.features.bugFixing'), t('services.packages.basic.features.uiChanges'), t('services.packages.basic.features.landingPage')],
              ],
              [
                t('services.packages.pro.title'),
                t('services.packages.pro.description'),
                t('services.packages.pro.badge'),
                [t('services.packages.pro.features.development'), t('services.packages.pro.features.design'), t('services.packages.pro.features.progressCalls')],
              ],
              [
                t('services.packages.dedicated.title'),
                t('services.packages.dedicated.description'),
                t('services.packages.dedicated.badge'),
                [t('services.packages.dedicated.features.prioritySupport'), t('services.packages.dedicated.features.retainer'), t('services.packages.dedicated.features.flexibleScope')],
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
                  {features.map((f, index) => (
                    <li key={index} className="flex items-center gap-2">
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
                  {t('services.packages.choosePlanButton')}
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
              <h2 className="text-3xl font-extrabold">{t('services.caseStudies.title')}</h2>
              <p className="text-white/70 mt-1">{t('services.caseStudies.subtitle')}</p>
            </div>
            <a href="#cta" className="hidden md:inline-block text-sm underline hover:text-indigo-300">{t('services.caseStudies.workWithMeButton')}</a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ['/images/mobile-app.jpg', t('services.caseStudies.projects.mobileApp')],
              ['/images/content-writing.jpg', t('services.caseStudies.projects.contentWriting')],
              ['/images/digital-marketing.jpg', t('services.caseStudies.projects.digitalMarketing')],
              ['/images/uiux-design.jpg', t('services.caseStudies.projects.uiuxDesign')],
              ['/images/seo.jpg', t('services.caseStudies.projects.seo')],
              ['/images/branding.jpg', t('services.caseStudies.projects.branding')],
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
            <h2 className="text-3xl font-extrabold">{t('services.cta.title')}</h2>
            <p className="text-black/70 mt-2">
              {t('services.cta.description')}
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                t('services.cta.benefits.verifiedProfessionals'),
                t('services.cta.benefits.onTimeDelivery'),
                t('services.cta.benefits.affordablePricing'),
                t('services.cta.benefits.flexibleCollaboration')
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
              {t('services.cta.postProjectButton')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


