import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function Home2() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()

  function handleLogout() {
    logoutUser()
    navigate('/login', { replace: true })
  }

  return (
    <div className="bg-white text-black">
      <Navbar user={user} />

      {/* 1 Showcase */}
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
          <source src="/showcase-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <p className="text-sm tracking-widest text-indigo-300 font-medium">
            {t('home2.showcase.featuredWork')}
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
            {t('home2.showcase.title')}
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
            {t('home2.showcase.subtitle')}
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            {/* Primary Button */}
            <a
              href="/services"
              className="rounded-md bg-indigo-500 text-black px-5 py-2.5 hover:bg-indigo-600 hover:text-white transition"
            >
              {t('home2.showcase.exploreButton')}
            </a>

            {/* Secondary Button */}
            <a
              href="/contact"
              className="rounded-md border border-white text-white px-5 py-2.5 
                         hover:bg-white hover:text-indigo-500 transition"
            >
              {t('home2.showcase.reachOutButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Services / Portfolio Grid */}
      <section id="portfolio" className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">{t('home2.portfolio.title')}</h2>
            <p className="text-black/70 mt-2">
              {t('home2.portfolio.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: t('home2.portfolio.services.webDevelopment.title'), 
                category: t('home2.portfolio.services.webDevelopment.category'), 
                image: '/images/web-dev.jpg' 
              },
              { 
                title: t('home2.portfolio.services.mobileAppDevelopment.title'), 
                category: t('home2.portfolio.services.mobileAppDevelopment.category'), 
                image: '/images/mobile-app.jpg' 
              },
              { 
                title: t('home2.portfolio.services.uiuxDesign.title'), 
                category: t('home2.portfolio.services.uiuxDesign.category'), 
                image: '/images/uiux.jpg' 
              },
              { 
                title: t('home2.portfolio.services.contentWriting.title'), 
                category: t('home2.portfolio.services.contentWriting.category'), 
                image: '/images/content.jpg' 
              },
              { 
                title: t('home2.portfolio.services.digitalMarketing.title'), 
                category: t('home2.portfolio.services.digitalMarketing.category'), 
                image: '/images/marketing.jpg' 
              },
              { 
                title: t('home2.portfolio.services.ecommerceSolutions.title'), 
                category: t('home2.portfolio.services.ecommerceSolutions.category'), 
                image: '/images/ecommerce.jpg' 
              },
            ].map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                {/* Service Image with Hover Effect */}
                <div className="aspect-video rounded-xl relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Service Title & Category */}
                <div className="mt-4">
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="text-black/60 text-sm">{service.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="border-t border-black/10 bg-black text-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">{t('home2.testimonials.title')}</h2>
            <p className="text-white/70 mt-2">
              {t('home2.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('home2.testimonials.clients.sophia.name'),
                role: t('home2.testimonials.clients.sophia.role'),
                content: t('home2.testimonials.clients.sophia.content'),
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: t('home2.testimonials.clients.david.name'),
                role: t('home2.testimonials.clients.david.role'),
                content: t('home2.testimonials.clients.david.content'),
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: t('home2.testimonials.clients.aisha.name'),
                role: t('home2.testimonials.clients.aisha.role'),
                content: t('home2.testimonials.clients.aisha.content'),
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Profile + Stars */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-white mr-3 object-cover"
                  />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 mb-4 text-justify">
                  "{testimonial.content}"
                </p>

                {/* Name + Role */}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section id="statistics" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          {/* Heading + Subtitle */}
          <h2 className="text-4xl font-bold text-gray-900">{t('home2.statistics.title')}</h2>
          <p className="text-gray-600 mt-2">
            {t('home2.statistics.subtitle')}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { target: 50, suffix: "+", label: t('home2.statistics.stats.projectsCompleted') },
              { target: 25, suffix: "+", label: t('home2.statistics.stats.happyClients') },
              { target: 3, suffix: "+", label: t('home2.statistics.stats.yearsExperience') },
              { target: 100, suffix: "%", label: t('home2.statistics.stats.clientSatisfaction') }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <Counter target={stat.target} suffix={stat.suffix} />
                <div className="text-black/70 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative border-t border-black/10"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/process-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-white">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">{t('home2.process.title')}</h2>
            <p className="text-gray-200 mt-2">{t('home2.process.subtitle')}</p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: t('home2.process.steps.step1.title'), 
                desc: t('home2.process.steps.step1.desc') 
              },
              { 
                step: '02', 
                title: t('home2.process.steps.step2.title'), 
                desc: t('home2.process.steps.step2.desc') 
              },
              { 
                step: '03', 
                title: t('home2.process.steps.step3.title'), 
                desc: t('home2.process.steps.step3.desc') 
              },
              { 
                step: '04', 
                title: t('home2.process.steps.step4.title'), 
                desc: t('home2.process.steps.step4.desc') 
              }
            ].map((process, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-200">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact-cta"
        className="relative h-[70vh] w-full flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/HomeC1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            {t('home2.contactCta.title')}
          </h2>

          {/* Button */}
          <button
            className="px-10 py-4 rounded-full bg-indigo-500 
                       text-black font-semibold shadow-md 
                       transition-all duration-300
                       hover:bg-white hover:text-indigo-500 hover:border hover:border-black"
          >
            {t('home2.contactCta.button')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
} 