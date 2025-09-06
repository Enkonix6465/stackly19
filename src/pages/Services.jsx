import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
    // Theme detection
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
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
  const [isIconsDancing, setIsIconsDancing] = useState(false)
  const servicesSectionRef = useRef(null)

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

  // Scroll detection for dancing icons
  useEffect(() => {
    const handleScroll = () => {
      if (servicesSectionRef.current) {
        const rect = servicesSectionRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible && !isIconsDancing) {
          setIsIconsDancing(true)
          // Stop dancing after 3 seconds
          setTimeout(() => {
            setIsIconsDancing(false)
          }, 3000)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isIconsDancing])

  function handleLogout() {
    logoutUser()
    navigate('/login', { replace: true })
  }
  const benefits = [
    t('services.cta.benefits.verifiedProfessionals'),
    t('services.cta.benefits.onTimeDelivery'),
    t('services.cta.benefits.affordablePricing'),
    t('services.cta.benefits.flexibleCollaboration')
  ];

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
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
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            {t('services.showcase.title')}
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto whitespace-nowrap">
            Showcasing projects that blend creativity, technology, and strategy
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
<section
      ref={servicesSectionRef}
      id="offerings"
      className={`border-t transition-colors duration-300 ${
        isDark ? "border-gray-700 bg-gray-900 text-black" : "border-black/10 bg-white text-black"
      }`}
    >        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="flex items-end justify-between">
            <div>
              <h2 className={`text-3xl font-extrabold ${isDark ? "text-white" : "text-black"}`}>
        {t('services.offerings.title')}
      </h2>
      <p className={`mt-1 ${isDark ? "text-white/70" : "text-black/70"}`}>
        {t('services.offerings.subtitle')}
      </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                t: t('services.offerings.cards.websiteDevelopment.title'), 
                d: t('services.offerings.cards.websiteDevelopment.description'), 
                path: '/services/website-development',
                icon: (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path fill="#b7d5e5" d="M106 24.79H22.15c-1.92 0-3.48 1.56-3.48 3.48v57.59c0 1.92 1.56 3.48 3.48 3.48H106c1.92 0 3.48-1.56 3.48-3.48V28.27c0-1.92-1.55-3.48-3.48-3.48"></path>
                    <radialGradient id="SVG8yic8bdE" cx={48.408} cy={13.024} r={75.465} gradientTransform="matrix(1 0 0 1.0843 0 -10.19)" gradientUnits="userSpaceOnUse">
                      <stop offset={0} stopColor="#2f7889"></stop>
                      <stop offset={1} stopColor="#424242"></stop>
                    </radialGradient>
                    <path fill="url(#SVG8yic8bdE)" d="M104.75 83.2H23.4l.96-52.27h79.43z"></path>
                    <path fill="#2f7889" d="M121.09 123.82H7.59q-.645 0-1.2-.09c-2.88-.44-4.21-4.18-2.5-6.74l.39-.59h119.59l.4.6c1.86 2.78.12 6.76-3.04 6.81c-.04.01-.09.01-.14.01"></path>
                    <path fill="#eee" d="M106.84 90.41H20.6c-1.27 0-2.54.77-3.25 1.99l-14 25.48c-.59.88-.01 2.12.99 2.12H123.8c1 0 1.58-1.24.99-2.12l-14.71-25.63c-.7-1.08-1.97-1.84-3.24-1.84"></path>
                    <path fill="#b7d5e5" d="M86.36 115.52H41.8l2.85-7.98h39.07z"></path>
                    <path fill="#69a1ba" d="m72.69 94.84l-.27-2.2h-3.44l.13 2.2zm-5.55 0l-.14-2.2h-3.45v2.2zm26.47 0l-.81-2.2h-3.26l.68 2.2zm-5.25 0l-.68-2.2h-3.32l.54 2.2zm-5.18 0l-.54-2.2h-3.37l.41 2.2zm18.93 0l-.95-2.2h-6.71l.82 2.2zm-24.5 0l-.41-2.2h-3.41l.28 2.2zm-43.85 0l.68-2.2h-3.26l-.81 2.2zm16.75 0l.27-2.2h-3.41l-.4 2.2zm-11.16 0l.54-2.2h-3.32l-.67 2.2zm-11.18 0l.81-2.2H25.8l-.95 2.2zm16.76 0l.41-2.2h-3.37l-.54 2.2zm11.15 0l.14-2.2h-3.44l-.27 2.2zm5.57 0v-2.2H58.2l-.14 2.2zm22.13 8.89H44.36l-.75 2.2h41.08zm18.37 2.2l-1.21-2.2h6.54l.95 2.2zm-15.4 0l-.83-2.2h6.29l.96 2.2zm8.64 0l-.96-2.2h4.31l1.1 2.2zm-69.72 0l1.21-2.2h-6.54l-.95 2.2zm15.4 0l.83-2.2h-6.29l-.96 2.2zm-8.65 0l.97-2.2h-4.31l-1.11 2.2zm-2.71-7.42l.82-2.19h-6.67l-.95 2.19zm68.24 0l-.81-2.19h6.66l.95 2.19zm-1.7 0l-.96-2.19h-3.85l.82 2.19zm-10.02 0l-.65-2.19h3.85l.78 2.19zm-6.04 0l-.47-2.19h3.85l.6 2.19zm-6.04 0l-.28-2.19h3.84l.43 2.19zm-6.03 0l-.11-2.19h3.85l.24 2.19zm-6.04 0l.07-2.19H66l.06 2.19zm-6.04 0l.25-2.19h3.85l-.11 2.19zm-6.03 0l.42-2.19h3.85l-.29 2.19zm-6.04 0l.6-2.19h3.85l-.47 2.19zm-6.04 0l.78-2.19h3.85l-.64 2.19zm-6.03 0l.95-2.19h3.85l-.82 2.19zm-2.2 3.71l.81-2.2h-8.75l-.95 2.2zm66.17 0l-.77-2.2h-4.17l.64 2.2zm-10.94 0l-.48-2.2h4.16l.62 2.2zm-6.65 0l-.32-2.2h4.17l.45 2.2zm-6.64 0l-.17-2.2h4.17l.3 2.2zm-6.64 0l-.01-2.2h4.16l.15 2.2zm-6.64 0l.14-2.2h4.17l-.01 2.2zm-6.65 0l.3-2.2h4.17l-.17 2.2zm-6.64 0l.46-2.2h4.16l-.32 2.2zm-6.64 0l.61-2.2h4.17l-.48 2.2zm-6.65 0l.77-2.2h4.17l-.63 2.2zm65.69 0l-.82-2.2h8.75l.95 2.2z" opacity={0.57}></path>
                    <path fill="#b7d5e5" d="M124.73 117.88L110.39 92.4c-.71-1.07-1.98-1.84-3.25-1.84c0 0 1.22 1.1 1.59 1.63l12.59 23.59c.56 1.02-.18 2.26-1.34 2.26H7.96c-1.15 0-1.89-1.23-1.35-2.24l11.95-23.18c.35-.6 1.88-1.99 1.88-1.99h-.45c-1.27 0-2.54.77-3.25 1.99L3.28 117.88c-.59.88-.01 2.12.99 2.12h119.46c1.01 0 1.59-1.24 1-2.12"></path>
                    <path fill="none" stroke="#eee" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2.936} d="M25.97 28.02h13.21"></path>
                    <path fill="#75a7bc" d="M109.37 30.11c0-1.04-1.01-1.12-1.01.11v55.8c0 1.34-1.09 2.43-2.43 2.43H22.08c-1.34 0-2.43-1.09-2.43-2.43v-55.8c0-1.23-1.01-1.15-1.01-.11l-.95 55.91c0 2.42 1.24 4.39 4.39 4.39h83.85c2.73 0 4.39-1.97 4.39-4.39z"></path>
                  </svg>
                )
              },
              { 
                t: t('services.offerings.cards.ecommerceSolutions.title'), 
                d: t('services.offerings.cards.ecommerceSolutions.description'), 
                path: '/services/ecommerce-solutions',
                icon: (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <circle cx={117.33} cy={9.69} r={5.69} fill="#f44336"></circle>
                    <path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="M80.09 78.38s9.51 12.8 9.51 17.85s-4.1 9.15-9.15 9.15c-4.31 0-58.2-.11-64.15-.11s-9.32 3.49-9.32 3.49"></path>
                    <path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="M58.83 77.13s10.6 14.05 10.6 19.11s-4.64 9.12-9.69 9.12"></path>
                    <path fill="#2f7889" d="M82.77 86.73c-2.01-3.44-3.64-5.44-6.26-9.02c0 0 .69.15 2.55.15s3.2-.59 3.2-.59c2.64 3.73 3.43 4.68 4.84 7.18c0 0-.05 1.63-1.35 2.49s-2.98-.21-2.98-.21m-20.21.17c-2.79-4.26-5.02-7.51-5.02-7.51l6 .14s2.69 3.61 4.23 6.47c0 0 .23 1.3-1.49 1.98c-1.72.66-3.72-1.08-3.72-1.08"></path>
                    <path fill="none" stroke="#84b0c1" strokeMiterlimit={10} strokeWidth={4.913} d="m80.11 78.64l-69.94-4.66c-.23-.02-.4-.2-.4-.43V34.5c0-.37.29-.68.66-.7l88.63-5.64c.86-.06 1.48.8 1.17 1.6L81.41 77.82c-.21.53-.73.86-1.3.82z"></path>
                    <path fill="none" stroke="#84b0c1" strokeMiterlimit={10} strokeWidth={2.948} d="M23.67 33.06L21.83 74.5m17.71-42.52l-5.75 43.41M55.42 30.9l-9.67 45.38M71.3 29.82L57.71 77.17m29.46-48.43l-17.5 49.32M8.29 48.48l85.56-2.94M9.08 62.11h79.4"></path>
                    <circle cx={80.41} cy={116.46} r={7.54} fill="#424242"></circle>
                    <path fill="#84b0c1" d="M75.55 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"></path>
                    <path fill="#a8e3f0" d="M81.97 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.1 3.64-.21 4.73"></path>
                    <path fill="#2f7889" d="M80.53 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.53.59-1.68 1.54-3.29 1.54"></path>
                    <path fill="#757575" d="M78.04 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"></path>
                    <path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="m99.82 30.71l4.61-11.27c1.88-4.6 3.27-5.63 6.06-6.88l6.53-2.65"></path>
                    <circle cx={19.6} cy={116.46} r={7.54} fill="#424242"></circle>
                    <path fill="#84b0c1" d="M14.73 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"></path>
                    <path fill="#a8e3f0" d="M21.16 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.09 3.64-.21 4.73"></path>
                    <path fill="#2f7889" d="M19.72 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.54.59-1.69 1.54-3.29 1.54"></path>
                    <path fill="#757575" d="M17.22 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"></path>
                  </svg>
                )
              },
              { 
                t: t('services.offerings.cards.brandingDesign.title'), 
                d: t('services.offerings.cards.brandingDesign.description'), 
                path: '/services/branding-design',
                icon: (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path fill="#ac5810" d="M77.37 19.32C46.83 3.21 19.03 14.69 9.01 30.38c-3.28 5.13-5.6 14.46-5.51 21.86c.18 15.23 8.61 32.2 26.8 49.32c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.27-4.13 14.33-12.65c-.12-1.12-1.08-3.15-2.53-4.04c-4.65-2.82-14.36-4.29-18.93-11.08c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.29-4.33 16.52-14.84c1.1-9.51-12.78-39.9-46.14-57.5M89.84 71c-2.34 3.56-8.12 2.34-11.91-1.02s-4.28-8.96-1.82-11.16c2.5-2.23 7.2-1.72 10.99 1.64c3.78 3.37 4.57 7.74 2.74 10.54"></path>
                    <path fill="#f2a259" d="M78.71 15.69C48.17-.42 20.3 12.04 10.28 27.73C.25 43.43 4.61 72.5 31.63 97.93c22.38 21.06 45.22 19.22 52.48 17.45c9.14-2.23 15.59-6.58 11.57-12.13c-2.77-3.83-12.7-6.72-18.69-15.64c-6.64-9.89 1.62-10.39 9.53-6.16c8.47 4.53 13.31 7.36 21.81 6.58c6.23-.57 15.65-5.39 15.37-15.13c-.29-9.57-11.63-39.6-44.99-57.21m14.06 55.03c-2.85 3.08-8.92 2.24-13.56-1.86c-4.63-4.11-6.08-9.93-3.23-13c2.85-3.08 8.92-2.24 13.56 1.86s6.08 9.93 3.23 13"></path>
                    <path fill="#eee" d="M47.62 84.66c1.15-2.94 9.33-6.16 16.85-.81c2.11 1.5 4.75 5.32 4.48 10.12c-.88 15.68-26.61 4.22-21.33-9.31"></path>
                    <path fill="#2686c6" d="M23.73 58.07c2.63-4.2 9.02-4.68 14.61-1.05c4.98 3.23 9.14 11.18 3 16.38c-3.29 2.79-8.98 1.06-12.49-1.63c-4.26-3.25-7.95-9.18-5.12-13.7"></path>
                    <path fill="#ffee58" d="M57.67 21.42c.81-3.33 6.46-3.9 10.46-2.41c6.91 2.58 10.04 9.42 7.49 13.23c-3.73 5.57-11.86 3.66-14.94.47c-5.23-5.4-3.69-8.5-3.01-11.29"></path>
                    <path fill="#7cb342" d="M97.71 37.72c5.54 2.52 6.26 6.51 5.2 9.42c-.66 1.8-2.01 4.27-4.77 4.49c-4.67.38-5.32-3.48-8.65-4.54c-2.8-.89-3.94-4.72-2.84-7.29c1.02-2.37 4-5.3 11.06-2.08"></path>
                    <path fill="#b0b0b0" d="M66.97 96.96c-1.38 1.25-6.17 2.79-12.25-1.01c-2.06-1.29-4.03-3.16-5.14-5.96c-.87-2.2-.68-4.32-.29-5.26c1.12-2.71 2.83-3.21 2.83-3.21c-1.72-.12-4.97 2.16-5.51 5.15c-.17.94-1.38 6.82 6.41 12.15c6.71 4.6 16.63 4.17 15.98-5.09c-.3 1.14-1.15 2.44-2.03 3.23"></path>
                    <path fill="#01579b" d="M44.26 65.72c-.19 3.57-4.37 5.45-6.7 5.46c-6.59.01-12.51-4.13-12.92-11.5c-.07-1.32.58-3.23.58-3.23c-.87.37-2.1 2.25-2.36 3.31c-1.54 6.36 4.87 13.77 11.62 15.27c3.42.76 7.73-.41 9.3-3.47c1.12-2.18.9-4.05.48-5.84"></path>
                    <path fill="#df7f14" d="M67.32 32.72c-4.48-.51-6.96-3.44-7.61-4.11c-1.78-1.86-2.88-3.67-2.24-6.35c.2-.86.69-1.96 1.29-2.58c-.73.24-1.91 1.81-2.28 2.66c-.38.85-1.76 4.04 1.2 7.97c1.83 2.44 5.02 5.19 9.74 5.85c3.35.47 5.75-.73 7.75-2.68c1.36-1.33 1.96-4.33 1.15-5.88c.13 1.13-1.94 5.93-9 5.12"></path>
                    <path fill="#558b2f" d="M104.17 44.85c-.41-1.51-1.58-3.08-1.7-3.16c.51.98 1.52 3.92-.6 6.78c-1.07 1.44-4.29 3.21-8.09.13c-1.12-.91-2.02-1.81-4.04-2.55c-5.13-1.89-2.89-7.11-1.11-8.73c-1.4.73-2.67 2.04-3.2 4.04c-.74 2.79 1.09 5.71 3.87 7.11c3.16 1.59 4.18 4.66 8.51 4.66c.22 0 .45-.01.7-.03c2.92-.25 4.15-1.38 5.04-2.76c1.09-1.72 1.12-3.67.62-5.49"></path>
                    <path fill="#f44336" d="M25.82 25.79c2.28-2.25 6.25-4.63 12.06-1.6c3.5 1.82 7.57 3.96 5.73 11.36c-1.14 4.59-7.82 7.02-13.4 1.91c-2.21-2.02-10.61-5.53-4.39-11.67"></path>
                    <path fill="#c62828" d="M44.94 34.56c.07-1.75-.83-3.88-1.14-4.6c.05 1.05.96 3.7-3.21 7.21c-1.45 1.22-4.08 2.15-6.95 1.02c-1.47-.58-3.58-3.01-5.09-3.62c-5.61-2.26-3.19-8.27-2.4-9.09c-1.27.89-2.35 2.31-2.75 4.38c-.52 2.71-.04 5.27 3.68 8.2c10.56 8.33 13.8 3.31 14.95 2.03c1.45-1.56 2.83-3.6 2.91-5.53"></path>
                    <path fill="#fff" d="M65.74 19.36c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.51-1.1 4.28-2.44 2.22-3.41m-30.98 5.1c-1.45-.96-6.08-.97-7.47 2.58c-.84 2.13.47 4.6 2.04 4.56c1.79-.04.93-2.15 2.42-3.49c1.88-1.69 5.04-2.31 3.01-3.65m-.69 32.04c-1.37-.87-5.43-1.21-7.11 1.97c-1.23 2.34.46 4.92 1.93 4.85c1.67-.08 1.11-2.74 2.18-3.34c1.63-.91 4.92-2.26 3-3.48M57.4 83.13c-1.47-.69-5.67-.49-6.48 3.01c-.49 2.1 1.05 4.23 2.5 3.98c1.65-.28.77-2.85 1.76-3.58c1.5-1.1 4.27-2.44 2.22-3.41m37.68-45.08c-1.32-.94-5.49-1.49-6.91 1.81c-.85 1.98.28 4.35 1.75 4.36c1.67.01 1.26-2.67 2.37-3.21c1.67-.81 4.64-1.64 2.79-2.96"></path>
                  </svg>
                )
              },
              { 
                t: t('services.offerings.cards.contentCopywriting.title'), 
                d: t('services.offerings.cards.contentCopywriting.description'), 
                path: '/services/content-copywriting',
                icon: (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <g fill="none">
                      <path fill="#d67d00" d="M9.995 15.583a2.5 2.5 0 0 1 5 0v8.42h6.95v-4h8.04v8.76c0 .68-.55 1.24-1.24 1.24h-9.24c-2.49 0-4.51-2.02-4.51-4.51v2.01a2.5 2.5 0 0 1-5 0z"></path>
                      <path fill="#ffc83d" d="m13.045 9.653l15.85 6.88c.67.29 1.1.94 1.1 1.67v9.81h-6.81c-1.88 0-3.57-.86-4.62-2.3c-.49-.67-1.4-.85-2.12-.45l-3.26 1.82A3.005 3.005 0 0 1 9.095 26H8v-3.5l-1.325.013a2.52 2.52 0 0 1-2.17 1.25c-.43 0-.86-.11-1.25-.34c-1.2-.7-1.61-2.22-.92-3.42l5.2-8.68a4.42 4.42 0 0 1 5.51-1.67M8.125 20h4.125v.69l2.265-1.307q.228-.131.465-.218a3.487 3.487 0 0 0-3.475-3.162c-.67 0-1.29 1.36-1.62 1.95z"></path>
                      <path fill="#f95725" d="m19.185 2.083l2.38 1.38c.3.17.4.55.23.85l-9.401 16.294l-2.21 1.276a3.005 3.005 0 0 0-.991 4.272l-.558.968c-.16.28-.39.53-.66.72l-2.75 2.08a.468.468 0 0 1-.73-.42l.38-3.44c.03-.34.13-.67.3-.96l13.16-22.79c.17-.3.55-.4.85-.23"></path>
                      <path fill="#fbb8ab" d="m8.552 27.256l-3.43-2.058a2.3 2.3 0 0 0-.247.865L4.61 28.46l1.469.816l1.896-1.433c.226-.16.424-.361.577-.587"></path>
                      <path fill="#000" d="m4.685 27.723l-.19 1.78c-.03.39.41.64.73.42l1.4-1.07z"></path>
                      <path fill="#d3d3d3" d="m16.395 5.673l3.46 2l1.04-1.8l-3.46-2z"></path>
                    </g>
                  </svg>
                )
              },
              { 
                t: t('services.offerings.cards.digitalMarketing.title'), 
                d: t('services.offerings.cards.digitalMarketing.description'), 
                path: '/services/digital-marketing',
                icon: (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <g fill="none" strokeWidth={3}>
                      <path fill="#fff" d="M42.377 11.323c.664-3.235.657-6.087.601-7.43a.9.9 0 0 0-.869-.87a31.7 31.7 0 0 0-7.43.601c-.753.154-1.002 1.075-.46 1.618l6.54 6.54c.544.543 1.464.293 1.618-.459"></path>
                      <path fill="#8fbffa" d="M5.267 44.96c-1.128-.037-1.992-.719-2.106-1.841C3.07 42.239 3 40.932 3 39s.072-3.24.16-4.119c.115-1.122.979-1.804 2.107-1.842C5.934 33.017 6.827 33 8 33s2.066.017 2.733.04c1.128.037 1.992.719 2.106 1.841c.09.88.161 2.187.161 4.119s-.072 3.24-.16 4.119c-.115 1.122-.979 1.804-2.107 1.842c-.668.022-1.56.039-2.733.039s-2.066-.017-2.733-.04m32.29-.026c-1.3-.08-2.203-1.018-2.297-2.317C35.132 40.856 35 37.667 35 32s.132-8.856.26-10.617c.094-1.299.997-2.238 2.297-2.317C38.187 19.027 38.99 19 40 19s1.813.027 2.443.066c1.3.08 2.203 1.018 2.297 2.317c.128 1.761.26 4.95.26 10.617s-.132 8.856-.26 10.617c-.094 1.299-.997 2.238-2.297 2.317c-.63.039-1.432.066-2.443.066c-1.01 0-1.813-.027-2.443-.066m-16.057.018c-1.264-.055-2.187-.9-2.293-2.16C19.098 41.494 19 39.386 19 36s.098-5.494.207-6.792c.106-1.26 1.029-2.105 2.292-2.16A57 57 0 0 1 24 27c1.042 0 1.862.02 2.5.048c1.264.055 2.187.9 2.293 2.16c.109 1.298.207 3.406.207 6.792s-.098 5.494-.207 6.792c-.106 1.26-1.029 2.105-2.292 2.16c-.639.028-1.459.048-2.501.048a58 58 0 0 1-2.5-.048"></path>
                      <path stroke="#2859c5" strokeLinecap="round" strokeLinejoin="round" d="M5 26c5.86-6.959 11.184-10.966 13.613-12.612c.794-.539 1.841-.363 2.444.383a95 95 0 0 1 3.31 4.377c.808 1.132 2.513 1.168 3.408.104C31.911 13.34 37.501 8.5 37.501 8.5"></path>
                      <path stroke="#2859c5" strokeLinecap="round" strokeLinejoin="round" d="M42.376 11.323c.664-3.235.657-6.087.601-7.43a.9.9 0 0 0-.869-.87a31.7 31.7 0 0 0-7.43.601c-.753.154-1.002 1.075-.46 1.618l6.54 6.54c.544.543 1.464.293 1.618-.459M5.267 44.96c-1.128-.037-1.992-.719-2.106-1.841C3.07 42.239 3 40.932 3 39s.072-3.24.16-4.119c.115-1.122.979-1.804 2.107-1.842C5.934 33.017 6.827 33 8 33s2.066.017 2.733.04c1.128.037 1.992.719 2.106 1.841c.09.88.161 2.187.161 4.119s-.072 3.24-.16 4.119c-.115 1.122-.979 1.804-2.107 1.842c-.668.022-1.56.039-2.733.039s-2.066-.017-2.733-.04m32.29-.026c-1.3-.08-2.203-1.018-2.297-2.317C35.132 40.856 35 37.667 35 32s.132-8.856.26-10.617c.094-1.299.997-2.238 2.297-2.317C38.187 19.027 38.99 19 40 19s1.813.027 2.443.066c1.3.08 2.203 1.018 2.297 2.317c.128 1.761.26 4.95.26 10.617s-.132 8.856-.26 10.617c-.094 1.299-.997 2.238-2.297 2.317c-.63.039-1.432.066-2.443.066c-1.01 0-1.813-.027-2.443-.066m-16.057.018c-1.264-.055-2.187-.9-2.293-2.16C19.098 41.494 19 39.386 19 36s.098-5.494.207-6.792c.106-1.26 1.029-2.105 2.292-2.16A57 57 0 0 1 24 27c1.042 0 1.862.02 2.5.048c1.264.055 2.187.9 2.293 2.16c.109 1.298.207 3.406.207 6.792s-.098 5.494-.207 6.792c-.106 1.26-1.029 2.105-2.292 2.16c-.639.028-1.459.048-2.501.048a58 58 0 0 1-2.5-.048"></path>
                    </g>
                  </svg>
                )
              },
              { 
                t: t('services.offerings.cards.ongoingSupport.title'), 
                d: t('services.offerings.cards.ongoingSupport.description'), 
                path: '/services/ongoing-support',
                icon: (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M0 0h24v24H0z"></path>
                      <path fill="#42a5f5" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.6.6 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></path>
                    </g>
                  </svg>
                )
              },
            ].map((card, idx) => (
              <article
                key={card.t}
                className="[perspective:1000px] animate-slide-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="group relative h-56 w-full rounded-2xl border border-black/10 [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]">
                  {/* front */}
                  <div className="absolute inset-0 rounded-2xl bg-white p-6 [backface-visibility:hidden]">
                    <div className={`h-20 w-20 rounded-lg border-2 border-indigo-500 grid place-items-center transition-all duration-500 ${
                      isIconsDancing 
                        ? 'animate-dance' 
                        : 'hover:scale-110 hover:rotate-6 hover:border-indigo-600'
                    }`}>
                      {card.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{card.t}</h3>
                    <p className="mt-2 text-black/70 line-clamp-3" dangerouslySetInnerHTML={{ __html: card.d }}></p>
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
                      Know More
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

 <section
      id="capabilities"
      className={`py-20 transition-colors duration-300 ${
         isDark ? "bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white" : "bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 text-black"
      }`}
    >        <div className="mx-auto max-w-6xl px-4 text-center">
           <h2 className="text-3xl font-extrabold animate-fadeInUp">{t('services.capabilities.title')}</h2>
 <p className={`mt-2 animate-fadeInUp ${isDark ? "text-white/70" : "text-black/70"}`} style={{ animationDelay: '0.2s' }}>
      {t('services.capabilities.subtitle')}
    </p>
           {/* Gradient Divider */}
           <div className="w-24 h-1 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-300 dark:from-indigo-400 dark:via-indigo-600 dark:to-indigo-400 mx-auto mt-8 rounded-full animate-fadeInUp" style={{ animationDelay: '0.4s' }}></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {capabilities.map(({ key, title, points }, index) => (
              <div
                key={key}
                 className="group relative bg-white/5 border-2 border-indigo-200 dark:border-indigo-700 rounded-xl p-6 hover:bg-indigo-500/10 hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-2 hover:scale-105 shadow-lg shadow-black/20 dark:shadow-black/40 transition-all duration-500 animate-fadeInUp"
                 style={{ animationDelay: `${index * 0.1}s` }}
              >
                 <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors duration-300">{title}</h3>
                <ul className={`mt-4 space-y-2 text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>
       {points.map((p, pointIndex) => (
         <li key={pointIndex} className="flex gap-2 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${pointIndex * 0.05}s` }}>
           <span className="h-2 w-2 mt-1 rounded-full bg-indigo-400 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300"></span>
           <span className="group-hover:text-indigo-300 dark:group-hover:text-indigo-200 transition-colors duration-300">{p}</span>
        </li>
      ))}
    </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Zooming Packages (Freelancing-focused, Light Mode) */}
 <section
      id="packages"
      className={`border-t py-20 transition-colors duration-300 ${
        isDark
          ? "border-gray-700 bg-gray-900 text-white"
          : "border-black/10 bg-white text-black"
      }`}
    >        <div className="mx-auto max-w-6xl px-4 py-24">
          <h2 className={`text-3xl font-extrabold ${isDark ? "text-white" : "text-black"}`}>
        {t('services.packages.title')}
      </h2>
      <p className={`mt-1 ${isDark ? "text-white/70" : "text-black/70"}`}>
        {t('services.packages.subtitle')}
      </p>
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
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-500 transition-colors"
                >
                  Connect Us
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
<section
      id="case-studies"
      className={`border-t py-20 transition-colors duration-300 ${
        isDark
          ? "border-gray-700 bg-black text-white"
          : "border-black/10 bg-gray-100 text-white"
      }`}
    >        <div className="mx-auto max-w-6xl px-4 py-24">
      <div>
        <h2 className={`text-3xl font-extrabold ${isDark ? "text-white" : "text-black"}`}>
          {t('services.caseStudies.title')}
        </h2>
        <p className={`mt-1 ${isDark ? "text-white/70" : "text-black/70"}`}>
          {t('services.caseStudies.subtitle')}
        </p>
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
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url(/images/CTAs.jpg)' }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Blur Effect */}
        <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold text-white">{t('services.cta.title')}</h2>
               <p className="mt-2 text-white/80">
      {t('services.cta.description')}
    </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
      {benefits.map((b) => (
        <li key={b} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-indigo-400" />
          <span className="text-white/90">{b}</span>
        </li>
      ))}
    </ul>
          </div>
          <div className="md:justify-self-end">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-indigo-600 border border-white/20"
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


