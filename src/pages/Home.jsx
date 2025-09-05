import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import { ThemeDebug } from '../components/theme-debug'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function Home() {
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
  const [isDark, setIsDark] = useState(false)
  const [servicesSectionVisible, setServicesSectionVisible] = useState(false)
  const servicesSectionRef = useRef(null)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Intersection Observer for Services section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setServicesSectionVisible(true)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before section is fully visible
      }
    )

    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current)
    }

    return () => {
      if (servicesSectionRef.current) {
        observer.unobserve(servicesSectionRef.current)
      }
    }
  }, [])

  const blogPosts = [
    {
      title: t('home.blog.posts.gettingStarted.title'),
      excerpt: t('home.blog.posts.gettingStarted.excerpt'),
      image: "/images/freelancer-start.jpg",
    },
    {
      title: t('home.blog.posts.highPayingClients.title'),
      excerpt: t('home.blog.posts.highPayingClients.excerpt'),
      image: "/images/high-paying-clients.jpg",
    },
    {
      title: t('home.blog.posts.multipleProjects.title'),
      excerpt: t('home.blog.posts.multipleProjects.excerpt'),
      image: "/images/project-balance.jpg",
    },
  ]

  const displayedBlogs = blogPosts

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Navbar user={user} />
      <ThemeDebug />


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
    <source src="/Vedio1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (darken video for readability) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    
    <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white animate-fade-in-up-strong animate-delay-100">
      {t('home.showcase.title')}
    </h1>
    <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up-strong animate-delay-200">
      {t('home.showcase.subtitle')}
    </p>
    <div className="mt-8 flex gap-4 justify-center animate-fade-in-up-strong animate-delay-300">
      {/* Primary Button */}
      <a
        href="/services"
        className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl"
      >
        {t('home.showcase.exploreButton')}
      </a>

      {/* Secondary Button */}
      <a
        href="/contact"
        className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-white text-indigo-600 border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white shadow-lg hover:shadow-xl"
      >
        {t('home.showcase.reachOutButton')}
      </a>
    </div>
  </div>
</section>

      

      {/* Hero */}
<section
      id="hero"
      className={`relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-black/10"
      }`}
    >
      
      <div className="mx-auto max-w-6xl px-4 py-28 grid md:grid-cols-2 gap-10 items-center relative z-10">
    <div className="space-y-6">
      {/* Tagline with line-by-line fade-in from left animation */}
      <p
        className={`text-sm tracking-widest animate-hero-line-1 ${
          isDark ? "text-white" : "text-indigo-600 font-semibold"
        }`}
        style={{ width: 'fit-content' }}
      >
        {t("home.hero.tagline")}
      </p>        
      
      {/* Title broken into lines with line-by-line fade-in from left animation */}
      <div className="space-y-2">
        <h1
          className={`text-4xl md:text-5xl font-extrabold leading-tight animate-hero-line-2 ${
            isDark ? "text-white text-glow" : "text-black text-glow-strong"
          }`}
        >
          {t("home.hero.title").split(' ').slice(0, 3).join(' ')}
        </h1>
        <h1
          className={`text-4xl md:text-5xl font-extrabold leading-tight animate-hero-line-3 ${
            isDark ? "text-white text-glow" : "text-black text-glow-strong"
          }`}
        >
          {t("home.hero.title").split(' ').slice(3).join(' ')}
        </h1>
      </div>

      {/* Description broken into lines with line-by-line fade-in from left animation */}
      <div className="space-y-2">
        <p
          className={`text-lg animate-hero-line-4 ${
            isDark ? "text-gray-300" : "text-gray-700 font-medium"
          }`}
        >
          {t("home.hero.description").split('. ')[0] + '.'}
        </p>
        {t("home.hero.description").split('. ').length > 1 && (
          <p
            className={`text-lg animate-hero-line-5 ${
              isDark ? "text-gray-300" : "text-gray-700 font-medium"
            }`}
          >
            {t("home.hero.description").split('. ').slice(1).join('. ')}
          </p>
        )}
      </div>
      
      {/* Buttons with line-by-line fade-in from left animation */}
      <div className="flex gap-4 animate-hero-line-enhanced animate-hero-delay-600">
        {/* Latest Blog Button */}
        <a
          href="/services"
          className={`btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 ${
            isDark 
              ? "bg-indigo-500 text-black hover:bg-white hover:text-indigo-500 hover:border hover:border-black" 
              : "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl"
          }`}
        >
          {t('home.hero.exploreBlogsButton')}
        </a>

        {/* Contact Button */}
        <a
          href="/contact"
          className={`btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 ${
            isDark 
              ? "bg-white text-indigo-500 border border-black hover:bg-indigo-500 hover:text-black hover:border-0" 
              : "bg-white text-indigo-600 border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white shadow-lg hover:shadow-xl"
          }`}
        >
          {t('home.hero.getStartedButton')}
        </a>
      </div>
    </div>

    {/* Image with enhanced floating animation */}
    <div className="justify-self-center relative animate-scale-in-strong animate-delay-500">
      <img
        src="/images/hero.jpg" 
        alt="Freelancing illustration"
        className={`h-56 w-56 md:h-72 md:w-72 rounded-full object-cover shadow-2xl hover-lift-strong animate-float-enhanced ${
          isDark ? "shadow-gray-800" : "shadow-indigo-200"
        }`}
      />
    </div>
  </div>
</section>


      {/* About - Redesigned */}
<section
      id="about"
      className={`relative overflow-hidden ${
        isDark ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white" : "bg-black text-white"
      } border-t transition-colors duration-300`}
    >

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${
            isDark ? "text-white" : "text-white"
          } animate-fade-in-up animate-delay-100`}>
            {t("home.about.title")}
          </h2>
          
          <p className={`mt-4 text-lg ${
            isDark ? "text-gray-300" : "text-gray-300"
          } animate-fade-in-up animate-delay-200`}>
            {t("home.about.subtitle")}
          </p>
          
          <div className={`mt-4 w-24 h-1 mx-auto rounded-full ${
            isDark ? "bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"
          } animate-fade-in-up animate-delay-250`}></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-8 animate-slide-in-left animate-delay-300">
            <div className={`p-8 rounded-2xl ${
              isDark 
                ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700" 
                : "bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"
            } about-card`}>
              <p className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-300"
              }`}>
                {t('home.about.description')}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl text-center ${
                isDark 
                  ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30" 
                  : "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
              } about-card animate-count-up animate-delay-400`}>
                <div className="text-3xl font-bold text-indigo-500 mb-2">500+</div>
                <div className={`text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-300"
                }`}>{t('home.about.stats.projectsCompleted')}</div>
              </div>
              
              <div className={`p-6 rounded-xl text-center ${
                isDark 
                  ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30" 
                  : "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
              } about-card animate-count-up animate-delay-500`}>
                <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
                <div className={`text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-300"
                }`}>{t('home.about.stats.happyClients')}</div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6 animate-slide-in-right animate-delay-600">
            <div className="grid gap-6">
              {/* Feature 1 */}
              <div className={`p-6 rounded-xl ${
                isDark 
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700" 
                  : "bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
              } about-card group`}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDark ? "bg-indigo-500/20" : "bg-indigo-500/20"
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-indigo-500 animate-icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>{t('home.about.features.fastDelivery.title')}</h3>
                    <p className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-400"
                    }`}>{t('home.about.features.fastDelivery.description')}</p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={`p-6 rounded-xl ${
                isDark 
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700" 
                  : "bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
              } about-card group`}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDark ? "bg-purple-500/20" : "bg-purple-100"
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-purple-500 animate-icon-bounce animate-delay-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>{t('home.about.features.qualityAssurance.title')}</h3>
                    <p className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-400"
                    }`}>{t('home.about.features.qualityAssurance.description')}</p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className={`p-6 rounded-xl ${
                isDark 
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700" 
                  : "bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
              } about-card group`}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDark ? "bg-pink-500/20" : "bg-pink-100"
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-pink-500 animate-icon-bounce animate-delay-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>{t('home.about.features.support24.title')}</h3>
                    <p className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-400"
                    }`}>{t('home.about.features.support24.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 animate-fade-in-scale animate-delay-700">
              <a
                href="/about"
                className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl inline-flex items-center"
              >
{t('home.about.ctaButton')}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
</section>



      {/* Services */}
<section
      id="services"
      className={`${
        isDark
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-black border-black/10"
      } border-t transition-colors duration-300`}
    >  <div className="mx-auto max-w-6xl px-4 py-24">
                 <h2
        className={`text-3xl font-extrabold ${
          isDark ? "text-white" : "text-black"
        } animate-fade-in-up-fast animate-delay-fast-100`}
      >
        {t("home.services.title")}
      </h2>

      <p
        className={`mt-1 ${
          isDark ? "text-gray-300" : "text-black/70"
        } animate-fade-in-up-fast animate-delay-fast-200`}
      >
        {t("home.services.subtitle")}
      </p>
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
                 { t: t('home.services.webDevelopment'), d: t('home.services.webDevelopmentDesc') },
         { t: t('home.services.graphicUIDesign'), d: t('home.services.graphicUIDesignDesc') },
         { t: t('home.services.contentWriting'), d: t('home.services.contentWritingDesc') },
         { t: t('home.services.digitalMarketing'), d: t('home.services.digitalMarketingDesc') },
         { t: t('home.services.videoAnimation'), d: t('home.services.videoAnimationDesc') },
         { t: t('home.services.businessSupport'), d: t('home.services.businessSupportDesc') },
      ].map((card, idx) => {
        // Create fast staggered delays for each card
        const delays = ['animate-delay-fast-300', 'animate-delay-fast-400', 'animate-delay-fast-500', 'animate-delay-fast-600', 'animate-delay-fast-700', 'animate-delay-fast-800'];
        const delayClass = delays[idx] || 'animate-delay-fast-300';
        
        return (
                 <div
           key={card.t}
           className={`rounded-xl border border-black/10 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 transition-shadow hover:shadow-lg hover:shadow-indigo-500/70 animate-fade-in-up-fast ${delayClass}`}
         >
           <div className="h-10 w-10 rounded-md bg-indigo-500/90 text-white grid place-items-center font-bold">
             {idx + 1}
           </div>
           <h3 className="mt-4 text-xl font-bold text-black dark:text-white">{card.t}</h3>
           <p className="mt-2 text-black/70 dark:text-gray-300">{card.d}</p>
         </div>
        );
      })}
    </div>
  </div>
</section>



      {/* Blog */}
<section
      id="blog"
      className={`relative overflow-hidden border-t transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-gray-700"
          : "bg-black text-white border-black/10"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-5 animate-float ${
          isDark ? "bg-indigo-500" : "bg-indigo-200"
        }`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full opacity-5 animate-pulse-slow ${
          isDark ? "bg-purple-500" : "bg-purple-200"
        }`}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        {/* Header with enhanced styling */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${
            isDark ? "text-white" : "text-white"
          } animate-fade-in-up animate-delay-100`}>
            {t("home.blog.title")}
          </h2>
          
          <p
            className={`mt-4 text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-300"
            } animate-fade-in-up animate-delay-200`}
          >
            {t("home.blog.subtitle")}
          </p>
          
          <div className={`mt-6 w-24 h-1 mx-auto rounded-full ${
            isDark ? "bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-gradient-to-r from-indigo-600 to-purple-600"
          } animate-fade-in-up animate-delay-250`}></div>
        </div>

        {/* Blog Posts with enhanced animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((post, i) => {
            // Create staggered delays for each blog card
            const delays = ['animate-delay-300', 'animate-delay-400', 'animate-delay-500'];
            const delayClass = delays[i] || 'animate-delay-300';
            
            return (
            <article
              key={i}
              className={`blog-card rounded-2xl border ${
                isDark 
                  ? "border-white/10 bg-white/5 hover:bg-white/10" 
                  : "border-white/10 bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-xl"
              } transition-all duration-300 animate-fade-in-up ${delayClass}`}
            >
              {/* Blog Image with overlay */}
              <div className="blog-image-container aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover animate-blog-image"
                />
                <div className="blog-image-overlay"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6 animate-blog-content">
                <h3 className={`text-xl font-bold mb-3 animate-blog-title ${
                  isDark ? "text-white" : "text-white"
                } group-hover:text-indigo-500 transition-colors duration-300`}>
                  {post.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-300"
                  }`}
                >
                  {post.excerpt}
                </p>
                
                {/* Read more link */}
                <div className="mt-4">
                  <span className={`inline-flex items-center text-sm font-medium ${
                    isDark ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-400 hover:text-indigo-300"
                  } transition-colors duration-300 cursor-pointer`}>
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
            )
          })}
        </div>
      </div>
</section>



      {/* Categories */}
  <section
      id="categories"
      className={`border-t transition-colors duration-300 ${
        isDark
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-gray-50 text-black border-black/10"
      }`}
    >  <div className="mx-auto max-w-6xl px-4 py-24 text-center">
         <h2
        className={`text-3xl font-extrabold ${
          isDark ? "text-white" : "text-black"
        } animate-fade-in-up animate-delay-100`}
      >
        {t("home.categories.title")}
      </h2>

      <p
        className={`mt-1 ${
          isDark ? "text-gray-300" : "text-black/70"
        } animate-fade-in-up animate-delay-200`}
      >
        {t("home.categories.subtitle")}
      </p>

    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-10">
      {[
                 { title: t('home.categories.developmentIT'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><g fill="none"><path fill="#66e1ff" d="M18.218 1.478H5.783A1.913 1.913 0 0 0 3.87 3.391v7.652a1.913 1.913 0 0 0 1.913 1.914h12.435a1.913 1.913 0 0 0 1.913-1.914V3.391a1.913 1.913 0 0 0-1.913-1.913"></path><path fill="#c2f3ff" d="M5.783 12.957h1.195L18.444 1.49a2 2 0 0 0-.226-.013H5.783A1.913 1.913 0 0 0 3.87 3.391v7.652a1.913 1.913 0 0 0 1.913 1.914"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M18.218 1.478H5.783A1.913 1.913 0 0 0 3.87 3.391v7.652a1.913 1.913 0 0 0 1.913 1.914h12.435a1.913 1.913 0 0 0 1.913-1.914V3.391a1.913 1.913 0 0 0-1.913-1.913" strokeWidth={1}></path><path fill="#e3e3e3" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M22.93 20.89a1.227 1.227 0 0 1-1.155 1.632H2.225a1.224 1.224 0 0 1-1.155-1.633l2.162-6.128a2.7 2.7 0 0 1 2.55-1.805h12.436a2.7 2.7 0 0 1 2.549 1.805z" strokeWidth={1}></path><path fill="#808080" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.348 22.522H8.652l.956-2.87h4.783z" strokeWidth={1}></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M5.778 15.826h.956m1.913 0h.957m4.783 0h.956m1.913 0h.957m-6.696 0h.957M4.821 17.74h.957m1.912 0h8.61m1.913 0h.956" strokeWidth={1}></path></g></svg> },
        { title: t('home.categories.designCreative'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#SVGXv8lpc2Y)"><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M1 22.958L16.493 7.561" strokeWidth={1}></path><path fill="#fff9bf" d="M21.547 2.188c.25-.084.383.052.303.302l-.923 2.768a.85.85 0 0 0 .192.793l1.773 1.774c.186.185.125.315-.138.287L20.03 7.81a.78.78 0 0 0-.708.366l-1.577 2.837c-.128.23-.281.209-.34-.048l-.704-3.05a.84.84 0 0 0-.575-.575l-3.052-.702c-.257-.06-.279-.212-.048-.34l2.839-1.575a.78.78 0 0 0 .365-.708l-.305-2.728c-.028-.262.096-.324.288-.137l1.774 1.773a.85.85 0 0 0 .793.187z"></path><path fill="#ffef5e" d="m22.75 8.107l-2.719-.297a.78.78 0 0 0-.708.365l-1.578 2.834c-.125.24-.278.21-.345-.049l-.699-3.044a.66.66 0 0 0-.172-.307a.34.34 0 0 0-.096-.105l5.333-5.333c.01.01.03.02.039.03c.067.047.086.151.048.286l-.92 2.768a.83.83 0 0 0 .192.793l1.771 1.772c.18.192.123.317-.145.287"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M21.547 2.188c.25-.084.383.052.303.302l-.923 2.768a.85.85 0 0 0 .192.793l1.773 1.774c.186.185.125.315-.138.287L20.03 7.81a.78.78 0 0 0-.708.366l-1.577 2.837c-.128.23-.281.209-.34-.048l-.704-3.05a.84.84 0 0 0-.575-.575l-3.052-.702c-.257-.06-.279-.212-.048-.34l2.839-1.575a.78.78 0 0 0 .365-.708l-.305-2.728c-.028-.262.096-.324.288-.137l1.774 1.773a.85.85 0 0 0 .793.187z" strokeWidth={1}></path></g><defs><clipPath id="SVGXv8lpc2Y"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g></svg> },
        { title: t('home.categories.writingTranslation'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 64 64"><path fill="#eba352" d="M20.6 55c1 1.1 7.9 1 9.1.2c2.5-1.5 19.9-22.4 4.8-28.5c-11.5-4.7-14 5.9-15.2 6.8c-2.3 1.8-.6 19.4 1.3 21.5"></path><g fill="#ffdd67"><path d="M57.6 54.3c-17.4.1-8.9 2.6-22.8 2.6c-5.5 0-10.2-3.6-10.2-8.6v-.1c8.6-5.7-5.8-3.2-3.6-16.7c.7-4.5 5.5-4.8 11.8-5.4c5.3-.5 23.2 6.3 23.2 6.3c6.4 2.3 8.8 21.9 1.6 21.9"></path><path d="M20.1 23.2c2.8-1.9 16 3.2 16 3.2L28 46.8S-.6 46 8.7 38.2c7.8-6.5 7.5-12.3 11.4-15"></path></g><g fill="#eba352"><path d="M7.8 39.1c-2.2 5.5 17.9 6.4 20.6 6.5l-.5 1.2S1.5 46 7.8 39.1m19.8-4c3.4 5.2 4.9 6.3 4.9 6.3s-3.4-.8-5.7-4.2z"></path><path d="M27.4 34c1.5 0 0 7.3 1.7 9.3c-.4 1.3-3 .5-3 .5s.8-9 .7-9.5z"></path><path d="m19.6 40.5l1.5 1.5s13.7-12.6 17.5-15.1l-4.5-1z"></path></g><path fill="#428bc1" d="m8.5 44.5l4.4 4.3l34.6-34.5l-4.3-4.3z"></path><g fill="#574137"><path d="m43.9 10.8l2.9 2.8l3.8-3.7L47.7 7zm-6.1 3.3l5.6 5.5l1-.9l-5.7-5.6z"></path><path d="m28.8 21.5l.8.7l9.1-9.1l-.7-.7z"></path></g><path fill="#a9b5ae" d="m12.9 48.8l-9.8 5.4l5.4-9.7z"></path><path fill="#574137" d="m2 54.6l.7.7l2-2l-.7-.7z"></path><path fill="#ffdd67" d="M39.4 51.4c.2-.6.3-1.1.4-1.7c.1-.3.2-.6.3-1c1-4.3-15.3-7.1-15.3-7.1l-1.2-.3c-2.6-.6-8.3-1.3-12.5 3.5c-2.9 3.4.1 6.8 2.8 7c7.3.7 12.7 2.5 16.8 4.2c3.6 1.7 7.2-.2 8.7-4.6"></path><path fill="#eba352" d="M23.5 42.9c-2.6-.9-6.8-3.2-12.2 1.6c5-6.1 13.1-3 13.4-2.9c7.6 1 12.6-2 12.6-2c-1.5 3.8-10.1 4.6-13.8 3.3m11.8 12.7c13.9 0 5.5-2.5 22.8-2.6c1.5 0 2.7-1.5 3.4-2.9c-.5 2.7-2 4.2-3.9 4.2c-17.4.1-9 2.7-22.9 2.7c-5.5 0-10.7-2.8-15.1-4.2c-.1-.1 10.5 2.8 15.7 2.8"></path></svg> },
        { title: t('home.categories.marketingSales'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><g fill="none"><path fill="#ffef5e" d="M1 4.826a.957.957 0 0 1 .957-.956h20.087a.956.956 0 0 1 .956.956v14.348a.956.956 0 0 1-.956.956H1.957A.956.956 0 0 1 1 19.174z"></path><path fill="#fff9bf" d="M1.957 3.87A.957.957 0 0 0 1 4.826v14.348a.94.94 0 0 0 .398.756l16.06-16.06z"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m4.826 15.348l2.459-4.1a.48.48 0 0 1 .82 0l2.114 3.526a.478.478 0 0 0 .777.06l1.593-1.913a.478.478 0 0 1 .734 0l1.583 1.9a.478.478 0 0 0 .783-.07l3.484-6.099" strokeWidth={1}></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M1 4.826a.957.957 0 0 1 .957-.956h20.087a.956.956 0 0 1 .956.956v14.348a.956.956 0 0 1-.956.956H1.957A.956.956 0 0 1 1 19.174z" strokeWidth={1}></path></g></svg> },
        { title: t('home.categories.videoAnimation'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 48 48"><g fill="none" strokeWidth={4}><path fill="#2f88ff" stroke="#000" strokeLinejoin="round" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></path><path fill="#43ccf8" stroke="#fff" strokeLinejoin="round" d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"></path><path fill="#43ccf8" stroke="#fff" strokeLinejoin="round" d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z"></path><path fill="#43ccf8" stroke="#fff" strokeLinejoin="round" d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z"></path><path fill="#43ccf8" stroke="#fff" strokeLinejoin="round" d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z"></path><path stroke="#000" strokeLinecap="round" d="M24 44H44"></path></g></svg>},
        { title: t('home.categories.adminSupport'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 64 64"><g fill="#f4ae7f"><path d="M52.11 58.32c0 3.056-2.289 5.531-5.116 5.531H14.379c-2.824 0-5.114-2.476-5.114-5.531V8.447c0-3.059 2.291-5.534 5.114-5.534h32.615c2.827 0 5.116 2.475 5.116 5.534z"></path><path d="M30.899 10.509c0 .581-1.158 1.051-2.58 1.051H11.848c-1.426 0-2.582-.47-2.582-1.051v-9.46C9.266.47 10.421 0 11.848 0h16.471c1.422 0 2.58.47 2.58 1.049z"></path></g><path fill="#d0d2d3" d="M54.662 56c0 2.593-2.312 4.69-5.167 4.69H16.536c-2.851 0-5.167-2.098-5.167-4.69V13.73c0-2.591 2.316-4.69 5.167-4.69h32.959c2.855 0 5.167 2.1 5.167 4.69z"></path><path fill="#fff" d="M54.662 52.694c0 2.593-2.312 4.69-5.167 4.69H16.536c-2.851 0-5.167-2.098-5.167-4.69v-42.27c0-2.591 2.316-4.688 5.167-4.688h32.959c2.855 0 5.167 2.098 5.167 4.688z"></path><path fill="#d0d2d3" d="M43.1 8.28c0 .312-1.538.566-3.43.566h-21.9c-1.896 0-3.434-.254-3.434-.566V3.185c0-.315 1.538-.566 3.434-.566h21.9c1.892 0 3.43.251 3.43.566z"></path><path fill="#35494d" d="M20.07 18.03h28.562c1.922 0 1.922-2.7 0-2.7H20.07c-1.915 0-1.915 2.7 0 2.7m0 5.485h28.562c1.922 0 1.922-2.698 0-2.698H20.07c-1.915 0-1.915 2.698 0 2.698m0 5.605h28.562c1.922 0 1.922-2.7 0-2.7H20.07c-1.915 0-1.915 2.7 0 2.7m0 5.48h28.562c1.922 0 1.922-2.698 0-2.698H20.07c-1.915 0-1.915 2.698 0 2.698m0 10.58h13.148c1.916 0 1.916-2.699 0-2.699H20.07c-1.915-.001-1.915 2.699 0 2.699"></path></svg> },
      ].map((cat, i) => {
        // Create staggered delays for each category card (one by one) - faster timing
        const delays = ['animate-delay-fast-100', 'animate-delay-fast-200', 'animate-delay-fast-300', 'animate-delay-fast-400', 'animate-delay-fast-500', 'animate-delay-fast-600'];
        const delayClass = delays[i] || 'animate-delay-fast-100';
        
        return (
        <div key={i} className={`flex flex-col items-center animate-fade-in-up ${delayClass}`}>
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-indigo-500/10 text-3xl hover-lift-strong transition-all duration-300 cursor-pointer">
            {cat.icon}
          </div>
<h3
      className={`mt-3 text-lg font-semibold ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      {cat.title}
    </h3>        </div>
        );
      })}
    </div>
  </div>
</section>




      {/* Contact */}
  <section
      id="contact"
      className={`relative overflow-hidden border-t transition-colors duration-300 ${
        isDark
          ? "bg-black text-white border-gray-700"
          : "bg-black text-white border-black/10"
      }`}
    >

 <div
      className={`relative z-10 mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-10 items-center ${
        isDark ? "text-white" : "text-white"
      }`}
    >    {/* Left - Text + Bullet Points */}
    <div className="space-y-6 animate-fade-in-up-strong animate-delay-200">
      <div className="space-y-2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-glow-strong animate-slide-in-left animate-delay-300">
          {t('home.contact.title').split(' ').slice(0, 2).join(' ')}
        </h2>
        <h2 className="text-4xl md:text-5xl font-extrabold text-glow-strong animate-slide-in-left animate-delay-400">
          {t('home.contact.title').split(' ').slice(2).join(' ')}
        </h2>
      </div>
      <div className="space-y-2">
        <p
          className={`text-lg animate-slide-in-left animate-delay-500 ${
            isDark ? "text-gray-300" : "text-gray-300"
          }`}
        >
          {t("home.contact.description").split('. ')[0] + '.'}
        </p>
        {t("home.contact.description").split('. ').length > 1 && (
          <p
            className={`text-lg animate-slide-in-left animate-delay-600 ${
              isDark ? "text-gray-300" : "text-gray-300"
            }`}
          >
            {t("home.contact.description").split('. ').slice(1).join('. ')}
          </p>
        )}
      </div>

<ul
      className={`mt-6 space-y-4 ${
        isDark ? "text-gray-300" : "text-gray-300"
      }`}
    >        <li className="flex items-center gap-3 group animate-slide-in-left animate-delay-700">
          <span className="text-indigo-400 text-xl group-hover:scale-110 transition-transform duration-300">✔</span>
          <span className="group-hover:text-indigo-300 transition-colors duration-300">{t('home.contact.features.webMobile')}</span>
        </li>
        <li className="flex items-center gap-3 group animate-slide-in-left animate-delay-800">
          <span className="text-indigo-400 text-xl group-hover:scale-110 transition-transform duration-300">✔</span>
          <span className="group-hover:text-indigo-300 transition-colors duration-300">{t('home.contact.features.futureReady')}</span>
        </li>
        <li className="flex items-center gap-3 group animate-slide-in-left animate-delay-900">
          <span className="text-indigo-400 text-xl group-hover:scale-110 transition-transform duration-300">✔</span>
          <span className="group-hover:text-indigo-300 transition-colors duration-300">{t('home.contact.features.transparent')}</span>
        </li>
        <li className="flex items-center gap-3 group animate-slide-in-left animate-delay-1000">
          <span className="text-indigo-400 text-xl group-hover:scale-110 transition-transform duration-300">✔</span>
          <span className="group-hover:text-indigo-300 transition-colors duration-300">{t('home.contact.features.support')}</span>
        </li>
      </ul>

 <a
      href="/contact"
      className={`mt-10 rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 inline-block btn-animate-strong animate-slide-in-left animate-delay-1100 ${
        isDark
          ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl"
          : "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl"
      }`}
    >
      {t("home.contact.startProjectButton")}
    </a>


    </div>

    {/* Right - Image */}
    <div className="justify-self-center animate-slide-in-right animate-delay-300">
      <img
        src="/images/contact-side.jpg" // image
        alt="Team collaboration illustration"
        className="rounded-xl shadow-2xl object-cover w-[350px] h-[350px] hover-lift-strong transition-all duration-300"
      />
    </div>
  </div>
</section>

             

              <Footer />
    </div>
  )
} 