import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function About() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

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

  const user = getCurrentUser()
   const highlights = [
    t("about.aboutSection.highlights.verifiedFreelancers"),
    t("about.aboutSection.highlights.securePayments"),
    t("about.aboutSection.highlights.globalTalentPool"),
    t("about.aboutSection.highlights.support"),
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
    <source src="/vedi03.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (darken video for readability) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    
    <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
      {t('about.showcase.title')}
    </h1>
    <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
      {t('about.showcase.subtitle')}
    </p>
    <div className="mt-8 flex gap-4 justify-center">
      {/* Primary Button */}
      <a
        href="/contact"
        className="rounded-md bg-indigo-500 text-black px-5 py-2.5 hover:bg-indigo-600 hover:text-white transition"
      >
        {t('about.showcase.connectButton')}
      </a>

      
    </div>
  </div>
</section>




      {/* 2) Mission & Values (upgraded design) */}
<section
      id="mission"
      className={`relative border-t transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white border-gray-700"
          : "bg-gradient-to-b from-white to-indigo-50 text-black border-black/10"
      }`}
    >  <div className="mx-auto max-w-6xl px-4 py-24">
    <h2 className="text-3xl font-extrabold">{t('about.mission.title')}</h2>
  <p
      className={`mt-1 ${
        isDark ? "text-gray-300" : "text-black/70"
      }`}
    >
      {t("about.mission.subtitle")}
    </p>
    <div className="mt-12 grid md:grid-cols-3 gap-8">
      {[{
        t: t('about.mission.trust.title'), 
        d: t('about.mission.trust.description'), 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 36 36"><path fill="#ef9645" d="M16.428 30.331a2.31 2.31 0 0 0 3.217-.568a.8.8 0 0 0-.197-1.114l-1.85-1.949l4.222 2.955a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-3.596-3.305l5.375 3.763a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-4.766-4.073l5.864 4.105a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089L4.733 11.194l-3.467 5.521c-.389.6-.283 1.413.276 1.891l7.786 6.671q.533.456 1.107.859z"></path><path fill="#ffdc5d" d="M29.802 21.752L18.5 13.601l-.059-.08l.053-.08l.053-.053l.854.469c.958.62 3.147 1.536 4.806 1.536c1.135 0 1.815-.425 2.018-1.257a1.41 1.41 0 0 0-1.152-1.622a6.8 6.8 0 0 1-2.801-1.091l-.555-.373c-.624-.421-1.331-.898-1.853-1.206c-.65-.394-1.357-.585-2.163-.585c-1.196 0-2.411.422-3.585.83l-1.266.436a5.2 5.2 0 0 1-1.696.271c-1.544 0-3.055-.586-4.516-1.152l-.147-.058a1.39 1.39 0 0 0-1.674.56L1.35 15.669a1.36 1.36 0 0 0 .257 1.761l7.785 6.672c.352.301.722.588 1.1.852l6.165 4.316a2 2 0 0 0 2.786-.491a.803.803 0 0 0-.196-1.115l-1.833-1.283a.424.424 0 0 1-.082-.618a.42.42 0 0 1 .567-.075l3.979 2.785a1.4 1.4 0 0 0 1.606-2.294l-3.724-2.606a.424.424 0 0 1-.082-.618a.423.423 0 0 1 .567-.075l5.132 3.593a1.4 1.4 0 0 0 1.606-2.294l-4.868-3.407a.42.42 0 0 1-.081-.618a.377.377 0 0 1 .506-.066l5.656 3.959a1.4 1.4 0 0 0 1.606-2.295"></path><path fill="#ef9645" d="M16.536 27.929c-.07.267-.207.498-.389.681l-1.004.996a1.5 1.5 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.5 1.5 0 0 1 1.437-.396a1.5 1.5 0 0 1 1.072 1.831M5.992 23.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.495 1.495 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.5 1.5 0 0 0 1.673-.31m5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 23.94a1.5 1.5 0 1 0 2.122 2.118zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.49 1.49 0 0 0-1.173.44L9.323 25.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44zm16.555-4.137l.627-.542l-6.913-10.85l-12.27 1.985a1.507 1.507 0 0 0-1.235 1.737c.658 2.695 6.003.693 8.355-.601z"></path><path fill="#ffcc4d" d="M16.536 26.929c-.07.267-.207.498-.389.681l-1.004.996a1.5 1.5 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.5 1.5 0 0 1 1.437-.396a1.5 1.5 0 0 1 1.072 1.831M5.992 22.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.5 1.5 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.5 1.5 0 0 0 1.673-.31m5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 22.94a1.5 1.5 0 1 0 2.122 2.118zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.49 1.49 0 0 0-1.173.44L9.323 23.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44zm21.557-7.456a1.45 1.45 0 0 0 .269-1.885l-.003-.005l-3.467-6.521a1.49 1.49 0 0 0-1.794-.6c-1.992.771-4.174 1.657-6.292.937l-1.098-.377c-1.948-.675-4.066-1.466-6-.294c-.695.409-1.738 1.133-2.411 1.58a6.9 6.9 0 0 1-2.762 1.076a1.5 1.5 0 0 0-1.235 1.737c.613 2.512 5.3.908 7.838-.369a.97.97 0 0 1 1.002.081l11.584 8.416z"></path></svg>
      }, {
        t: t('about.mission.quality.title'), 
        d: t('about.mission.quality.description'), 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 512 512"><path fill="#ffb636" d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"></path><path fill="#ffd469" d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"></path></svg>
      }, {
        t: t('about.mission.collaboration.title'), 
        d: t('about.mission.collaboration.description'), 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 48 48"><g fill="none" strokeLinecap="round" strokeWidth={4}><path stroke="#000" strokeLinejoin="round" d="M33 38H22V30H36V22H44V38H39L36 41L33 38Z"></path><path fill="#2f88ff" stroke="#000" strokeLinejoin="round" d="M4 6H36V30H17L13 34L9 30H4V6Z"></path><path stroke="#fff" d="M19 18H20"></path><path stroke="#fff" d="M26 18H27"></path><path stroke="#fff" d="M12 18H13"></path></g></svg>
      }].map((item) => (
        <div 
          key={item.t} 
          className="group relative rounded-2xl bg-white p-8 border border-black/10 shadow-sm 
                     hover:shadow-2xl hover:-translate-y-2 hover:scale-105 
                     transition-all duration-500 ease-out cursor-pointer
                     hover:border-indigo-300 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50
                     before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r 
                     before:from-indigo-500/10 before:to-purple-500/10 before:opacity-0 
                     hover:before:opacity-100 before:transition-opacity before:duration-500
                     overflow-hidden"
        >
          {/* Enhanced Accent bar with gradient animation */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl 
                         group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500
                         transition-all duration-500" />

          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-purple-50/0 to-pink-50/0 
                         group-hover:from-indigo-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30
                         transition-all duration-500 rounded-2xl" />

          {/* Icon with enhanced hover effects */}
          <div className="relative text-3xl mb-4 group-hover:scale-110 group-hover:rotate-3 
                         transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                           rounded-full blur-xl scale-0 group-hover:scale-150 
                           transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative z-10">{item.icon}</div>
          </div>

          {/* Title with enhanced hover effects */}
          <h3 className={`relative text-xl font-bold mb-2 group-hover:text-indigo-700 
                         transition-colors duration-300 ${
                           isDark ? "text-black" : "text-black"
                         }`}>
            {item.t}
          </h3>
          
          {/* Description with enhanced hover effects */}
          <p className="relative text-black/70 group-hover:text-black/90 
                       transition-colors duration-300 leading-relaxed">
            {item.d}
          </p>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 
                         rounded-full blur-2xl scale-0 group-hover:scale-100 
                         transition-all duration-700 ease-out" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 
                         rounded-full blur-xl scale-0 group-hover:scale-100 
                         transition-all duration-700 ease-out delay-100" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 3) About (new section) */}
  <section
      id="about"
      className={`relative border-t transition-colors duration-300 overflow-hidden ${
        isDark
          ? "bg-black text-white border-gray-700"
          : "bg-white text-black border-black/10"
      }`}
    >  
    {/* Animated background elements */}
    <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
    
    <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
    
    {/* Left Content */}
<div
      className={`order-2 md:order-1 group ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <h2 className="text-3xl font-extrabold mb-6 opacity-0 animate-fade-in-up" 
          style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
        {t('about.aboutSection.title')}
      </h2>
     <p
        className={`mt-3 opacity-0 animate-fade-in-up ${
          isDark ? "text-white/70" : "text-black/70"
        }`}
        style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}
      >
        {t("about.aboutSection.description1")}
      </p>
      <p
        className={`mt-3 opacity-0 animate-fade-in-up ${
          isDark ? "text-white/70" : "text-black/70"
        }`}
        style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
      >
        {t("about.aboutSection.description2")}
      </p>

       {/* Key Highlights */}
       <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
         {highlights.map((b, index) => {
           const indigoVariations = [
             { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-700 dark:text-indigo-300', hover: 'hover:bg-indigo-500/20' },
             { bg: 'bg-indigo-400/10', border: 'border-indigo-400/30', text: 'text-indigo-600 dark:text-indigo-400', hover: 'hover:bg-indigo-400/20' },
             { bg: 'bg-indigo-600/10', border: 'border-indigo-600/30', text: 'text-indigo-800 dark:text-indigo-200', hover: 'hover:bg-indigo-600/20' },
             { bg: 'bg-indigo-300/10', border: 'border-indigo-300/30', text: 'text-indigo-500 dark:text-indigo-500', hover: 'hover:bg-indigo-300/20' }
           ];
           const colorScheme = indigoVariations[index % indigoVariations.length];
           
           return (
             <li
               key={b}
               className={`rounded-xl px-5 py-3 opacity-0 animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${colorScheme.bg} ${colorScheme.border} ${colorScheme.text} ${colorScheme.hover}`}
               style={{
                 animationDelay: `${0.8 + index * 0.1}s`,
                 animationFillMode: 'forwards'
               }}
             >
               <div className="flex items-center gap-3">
                 <div className={`w-8 h-8 rounded-lg ${colorScheme.bg.replace('/10', '/20')} flex items-center justify-center`}>
                   {index === 0 && (
                     <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   )}
                   {index === 1 && (
                     <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                     </svg>
                   )}
                   {index === 2 && (
                     <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   )}
                   {index === 3 && (
                     <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                     </svg>
                   )}
                 </div>
                 <span className="font-medium text-sm">{b}</span>
               </div>
             </li>
           );
         })}
       </ul>
    </div>

     {/* Right Image */}
     <div className="order-1 md:order-2 justify-self-center group">
       <div className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem] opacity-0 animate-fade-in-up" 
            style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
        {/* Decorative background elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl scale-0 group-hover:scale-100 transition-all duration-700 ease-out" />
        <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg scale-0 group-hover:scale-100 transition-all duration-500 ease-out delay-100" />
        
        {/* Main image container */}
        <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-500">
          <img
            src="/images/platform.jpg"   
            alt="Freelancing Platform"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>

  </div>
</section>

     {/* 4) Journey (Timeline) */}
<section id="journey" className="border-t border-black/10">
  <div className="mx-auto max-w-6xl px-4 py-24">
    <h2 className="text-3xl font-extrabold">{t('about.journey.title')}</h2>
 <p
      className={`mt-1 ${
        isDark ? "text-white/70" : "text-black/70"
      }`}
    >
      {t("about.journey.subtitle")}
    </p>
    <div className="mt-10 grid md:grid-cols-2 gap-8 items-stretch">
      
      {/* Left Timeline Box */}
      <div className="flex flex-col justify-between rounded-xl border border-black/10 p-8 bg-gradient-to-br from-white to-indigo-50 shadow-lg animate-fade-in">
        <div className="space-y-8">
          {[
            { y: '2018', h: t('about.journey.timeline.2018.title'), d: t('about.journey.timeline.2018.description') },
            { y: '2020', h: t('about.journey.timeline.2020.title'), d: t('about.journey.timeline.2020.description') },
            { y: '2022', h: t('about.journey.timeline.2022.title'), d: t('about.journey.timeline.2022.description') },
            { y: '2024', h: t('about.journey.timeline.2024.title'), d: t('about.journey.timeline.2024.description') }
          ].map((it, i) => (
            <div key={it.y} className="relative pl-6 group transition-all hover:translate-x-2">
              <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
              {i !== 3 && ( // hides last line
                <div className="absolute left-1.5 top-5 bottom-[-2rem] w-[2px] bg-black/10" />
              )}
<div
      className={`font-bold ${
        isDark ? "text-black" : "text-black"
      }`}
    >
      {it.y} — {it.h}
    </div>              <p className="text-black/70">{it.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a 
    href="/services"  // 🔗 replace with your page link or external URL
    className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-md animate-bounce inline-block"
  >
    {t('about.journey.exploreButton')}
  </a>
        </div>
      </div>

      {/* Right Content Box */}
      <div className="flex flex-col justify-between rounded-xl border border-black/10 p-8 bg-gradient-to-br from-indigo-50 to-white shadow-lg animate-fade-in">
        <div>
  <h3
      className={`font-semibold text-lg ${
        isDark ? "text-black" : "text-black"
      }`}
    >
      {t('about.journey.whatMeansTitle')}
    </h3>          <ul className="mt-4 space-y-3 text-black/80 text-sm">
            {t('about.journey.benefits', { returnObjects: true }).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-indigo-500">▸</span> {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <a 
    href="/contact" 
    className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-md animate-bounce inline-block"
  >
    {t('about.journey.getInTouchButton')}
  </a>
        </div>
      </div>

    </div>
  </div>
</section>





      {/* 5) Engagement Models - Freelancing Focused */}
    <section
      id="engagement"
      className={`border-t relative overflow-hidden ${
        isDark ? "bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white border-gray-700" : "bg-gradient-to-br from-indigo-50 to-indigo-100 text-black border-black/10"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-20 h-48 w-48 rounded-full bg-indigo-400/5 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-indigo-300/5 blur-xl pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 py-24 relative">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
     <div>
      <h2
        className={`text-3xl font-extrabold ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {t('about.engagement.title')}
      </h2>
      <p
        className={`mt-1 ${
          isDark ? "text-white/70" : "text-black/70"
        }`}
      >
        {t('about.engagement.subtitle')}
      </p>
    </div>
      <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm ${
        isDark 
          ? "border-white/20 bg-white text-black" 
          : "border-black/10 bg-white text-black"
      }`}>
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
        {t('about.engagement.remoteBadge')}
      </div>
    </div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Project-Based */}
      <div className={`group relative rounded-2xl border-2 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up ${
        isDark 
          ? "bg-white/5 border-indigo-400/40 hover:border-indigo-400/70 hover:shadow-indigo-500/30 backdrop-blur-sm hover:bg-white/10" 
          : "bg-white border-black/10 hover:border-indigo-300 hover:shadow-indigo-500/20"
      }`}>
        <div className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-bold ${
          isDark 
            ? "border-indigo-400 bg-indigo-400/30 text-white shadow-lg" 
            : "border-black/10 bg-white/70 text-black"
        }`}>
          {t('about.engagement.models.projectBased.badge')}
        </div>
        <div className={`h-12 w-12 rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
          isDark 
            ? "bg-gradient-to-br from-indigo-400 to-indigo-500 text-white" 
            : "bg-indigo-500 text-white"
        }`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
          </svg>
        </div>
        <h3 className={`mt-4 text-xl font-bold group-hover:text-indigo-400 transition-colors ${
          isDark ? "text-white" : "text-black"
        }`}>
          {t('about.engagement.models.projectBased.title')}
        </h3>
        <p className={`mt-2 leading-relaxed ${
          isDark ? "text-white/90" : "text-black/70"
        }`}>
          {t('about.engagement.models.projectBased.description')}
        </p>
        <ul className={`mt-4 space-y-2 text-sm ${
          isDark ? "text-white/85" : "text-black/80"
        }`}>
          {t('about.engagement.models.projectBased.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${
                isDark ? "bg-indigo-400" : "bg-indigo-500"
              }`} /> {feature}
            </li>
          ))}
        </ul>
        <button className={`mt-5 inline-flex items-center gap-2 font-semibold transition-colors ${
          isDark 
            ? "text-indigo-300 hover:text-indigo-200" 
            : "text-indigo-600 hover:text-indigo-700"
        }`}>
          {t('about.engagement.models.projectBased.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hourly Work */}
      <div className={`group relative rounded-2xl border-2 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up [animation-delay:80ms] ${
        isDark 
          ? "bg-white/5 border-indigo-400/40 hover:border-indigo-400/70 hover:shadow-indigo-500/30 backdrop-blur-sm hover:bg-white/10" 
          : "bg-white border-black/10 hover:border-indigo-300 hover:shadow-indigo-500/20"
      }`}>
        <div className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-bold ${
          isDark 
            ? "border-indigo-400 bg-indigo-400/30 text-white shadow-lg" 
            : "border-black/10 bg-white/70 text-black"
        }`}>
          {t('about.engagement.models.hourlyWork.badge')}
        </div>
        <div className={`h-12 w-12 rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
          isDark 
            ? "bg-gradient-to-br from-indigo-300 to-indigo-400 text-white" 
            : "bg-indigo-500 text-white"
        }`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
        </div>
        <h3 className={`mt-4 text-xl font-bold group-hover:text-indigo-400 transition-colors ${
          isDark ? "text-white" : "text-black"
        }`}>
          {t('about.engagement.models.hourlyWork.title')}
        </h3>
        <p className={`mt-2 leading-relaxed ${
          isDark ? "text-white/90" : "text-black/70"
        }`}>
          {t('about.engagement.models.hourlyWork.description')}
        </p>
        <ul className={`mt-4 space-y-2 text-sm ${
          isDark ? "text-white/85" : "text-black/80"
        }`}>
          {t('about.engagement.models.hourlyWork.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${
                isDark ? "bg-indigo-300" : "bg-indigo-500"
              }`} /> {feature}
            </li>
          ))}
        </ul>
        <button className={`mt-5 inline-flex items-center gap-2 font-semibold transition-colors ${
          isDark 
            ? "text-indigo-300 hover:text-indigo-200" 
            : "text-indigo-600 hover:text-indigo-700"
        }`}>
          {t('about.engagement.models.hourlyWork.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Monthly Retainer */}
      <div className={`group relative rounded-2xl border-2 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up [animation-delay:160ms] ${
        isDark 
          ? "bg-white/5 border-indigo-400/40 hover:border-indigo-400/70 hover:shadow-indigo-500/30 backdrop-blur-sm hover:bg-white/10" 
          : "bg-white border-black/10 hover:border-indigo-300 hover:shadow-indigo-500/20"
      }`}>
        <div className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-bold ${
          isDark 
            ? "border-indigo-400 bg-indigo-400/30 text-white shadow-lg" 
            : "border-black/10 bg-white/70 text-black"
        }`}>
          {t('about.engagement.models.monthlyRetainer.badge')}
        </div>
        <div className={`h-12 w-12 rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
          isDark 
            ? "bg-gradient-to-br from-indigo-400 to-indigo-500 text-white" 
            : "bg-indigo-500 text-white"
        }`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
        </div>
        <h3 className={`mt-4 text-xl font-bold group-hover:text-indigo-400 transition-colors ${
          isDark ? "text-white" : "text-black"
        }`}>
          {t('about.engagement.models.monthlyRetainer.title')}
        </h3>
        <p className={`mt-2 leading-relaxed ${
          isDark ? "text-white/90" : "text-black/70"
        }`}>
          {t('about.engagement.models.monthlyRetainer.description')}
        </p>
        <ul className={`mt-4 space-y-2 text-sm ${
          isDark ? "text-white/85" : "text-black/80"
        }`}>
          {t('about.engagement.models.monthlyRetainer.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${
                isDark ? "bg-indigo-400" : "bg-indigo-500"
              }`} /> {feature}
            </li>
          ))}
        </ul>
        <button className={`mt-5 inline-flex items-center gap-2 font-semibold transition-colors ${
          isDark 
            ? "text-indigo-300 hover:text-indigo-200" 
            : "text-indigo-600 hover:text-indigo-700"
        }`}>
          {t('about.engagement.models.monthlyRetainer.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Sprint / Weekly Packages */}
      <div className={`group relative rounded-2xl border-2 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up [animation-delay:240ms] ${
        isDark 
          ? "bg-white/5 border-indigo-400/40 hover:border-indigo-400/70 hover:shadow-indigo-500/30 backdrop-blur-sm hover:bg-white/10" 
          : "bg-white border-black/10 hover:border-indigo-300 hover:shadow-indigo-500/20"
      }`}>
        <div className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-bold ${
          isDark 
            ? "border-indigo-400 bg-indigo-400/30 text-white shadow-lg" 
            : "border-black/10 bg-white/70 text-black"
        }`}>
          {t('about.engagement.models.weeklySprints.badge')}
        </div>
        <div className={`h-12 w-12 rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
          isDark 
            ? "bg-gradient-to-br from-indigo-300 to-indigo-400 text-white" 
            : "bg-indigo-500 text-white"
        }`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
          </svg>
        </div>
        <h3 className={`mt-4 text-xl font-bold group-hover:text-indigo-400 transition-colors ${
          isDark ? "text-white" : "text-black"
        }`}>
          {t('about.engagement.models.weeklySprints.title')}
        </h3>
        <p className={`mt-2 leading-relaxed ${
          isDark ? "text-white/90" : "text-black/70"
        }`}>
          {t('about.engagement.models.weeklySprints.description')}
        </p>
        <ul className={`mt-4 space-y-2 text-sm ${
          isDark ? "text-white/85" : "text-black/80"
        }`}>
          {t('about.engagement.models.weeklySprints.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${
                isDark ? "bg-indigo-300" : "bg-indigo-500"
              }`} /> {feature}
            </li>
          ))}
        </ul>
        <button className={`mt-5 inline-flex items-center gap-2 font-semibold transition-colors ${
          isDark 
            ? "text-indigo-300 hover:text-indigo-200" 
            : "text-indigo-600 hover:text-indigo-700"
        }`}>
          {t('about.engagement.models.weeklySprints.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</section>


      {/* 6) FAQ - Redesigned */}
      <section
        id="faq"
        className={`relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-50 text-black"
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        
        <div className="mx-auto max-w-5xl px-4 py-24 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              {t('about.faq.title')}
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {t("about.faq.subtitle")}
            </p>
          </div>
          
          {/* FAQ Grid */}
          <div className="space-y-4">
            {t("about.faq.questions", { returnObjects: true }).map((item, index) => {
              const isOpen = openFAQ === index
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${
                    isOpen 
                      ? (isDark 
                          ? "border-indigo-400/50 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 shadow-2xl shadow-indigo-500/10" 
                          : "border-indigo-300 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 shadow-xl shadow-indigo-500/5")
                      : (isDark 
                          ? "border-gray-700/50 bg-gray-800/30 hover:border-indigo-400/30 hover:bg-gray-800/50 hover:shadow-lg" 
                          : "border-gray-200 bg-white/50 hover:border-indigo-200 hover:bg-white hover:shadow-lg")
                  }`}
                >
                  {/* Question */}
                  <button
                    className={`w-full text-left p-6 transition-all duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    } ${isOpen ? 'pb-4' : ''}`}
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Question Number */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isOpen
                            ? (isDark ? "bg-indigo-500 text-white" : "bg-indigo-500 text-white")
                            : (isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600")
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        
                        {/* Question Text */}
                        <h3 className={`text-lg font-semibold leading-relaxed transition-colors duration-300 ${
                          isOpen 
                            ? (isDark ? "text-indigo-300" : "text-indigo-700")
                            : (isDark ? "text-white group-hover:text-indigo-300" : "text-gray-900 group-hover:text-indigo-600")
                        }`}>
                          {item.question}
                        </h3>
                      </div>
                      
                      {/* Toggle Icon */}
                      <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? (isDark 
                              ? "bg-indigo-500/20 text-indigo-300 rotate-180" 
                              : "bg-indigo-100 text-indigo-600 rotate-180")
                          : (isDark 
                              ? "bg-gray-700/50 text-gray-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300" 
                              : "bg-gray-100 text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600")
                      }`}>
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          className="w-5 h-5 transition-transform duration-300"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className={`h-px mb-4 ${
                        isDark ? "bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" : "bg-gradient-to-r from-transparent via-indigo-200 to-transparent"
                      }`} />
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          isDark ? "bg-indigo-500/20" : "bg-indigo-100"
                        }`}>
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className={`text-base leading-relaxed ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className={`text-lg mb-6 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {t('about.faq.cta.text')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t('about.faq.cta.button')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


