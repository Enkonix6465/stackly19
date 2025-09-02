import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function About() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()



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
    <source src="/public/vedi03.mp4" type="video/mp4" />
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
<section id="mission" className="relative border-t border-black/10 bg-gradient-to-b from-white to-indigo-50">
  <div className="mx-auto max-w-6xl px-4 py-24">
    <h2 className="text-3xl font-extrabold">{t('about.mission.title')}</h2>
    <p className="text-black/70 mt-1">{t('about.mission.subtitle')}</p>

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
          className="relative rounded-2xl bg-white p-8 border border-black/10 shadow-sm 
                     hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
        >
          {/* Accent bar */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-2xl" />

          {/* Icon */}
          <div className="text-3xl mb-4">{item.icon}</div>

          <h3 className="text-xl font-bold">{item.t}</h3>
          <p className="mt-2 text-black/70">{item.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 3) About (new section) */}
<section id="about" className="border-t border-black/10 bg-black text-white">
  <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Content */}
    <div className="order-2 md:order-1">
      <h2 className="text-3xl font-extrabold">{t('about.aboutSection.title')}</h2>
      <p className="text-white/70 mt-3">
        {t('about.aboutSection.description1')}
      </p>
      <p className="text-white/70 mt-3">
        {t('about.aboutSection.description2')}
      </p>

      {/* Key Highlights */}
      <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
        {[
          t('about.aboutSection.highlights.verifiedFreelancers'),
          t('about.aboutSection.highlights.securePayments'),
          t('about.aboutSection.highlights.globalTalentPool'),
          t('about.aboutSection.highlights.support')
        ].map(b => (
          <li 
            key={b} 
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/80"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>

    {/* Right Image */}
    <div className="order-1 md:order-2 justify-self-center">
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        <img
          src="/images/platform.jpg"   
          alt="Freelancing Platform"
          className="h-full w-full object-cover rounded-2xl border border-white/20 shadow-lg"
        />
      </div>
    </div>

  </div>
</section>

     {/* 4) Journey (Timeline) */}
<section id="journey" className="border-t border-black/10">
  <div className="mx-auto max-w-6xl px-4 py-24">
    <h2 className="text-3xl font-extrabold">{t('about.journey.title')}</h2>
    <p className="text-black/70 mt-1">{t('about.journey.subtitle')}</p>

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
              <div className="font-bold">{it.y} — {it.h}</div>
              <p className="text-black/70">{it.d}</p>
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
          <h3 className="font-semibold text-lg">{t('about.journey.whatMeansTitle')}</h3>
          <ul className="mt-4 space-y-3 text-black/80 text-sm">
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
<section id="engagement" className="border-t border-black/10 relative overflow-hidden">
  <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
  <div className="mx-auto max-w-6xl px-4 py-24 relative">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <h2 className="text-3xl font-extrabold">{t('about.engagement.title')}</h2>
        <p className="text-black/70 mt-1">{t('about.engagement.subtitle')}</p>
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm">
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
        {t('about.engagement.remoteBadge')}
      </div>
    </div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Project-Based */}
      <div className="group relative rounded-2xl border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 animate-slide-up">
        <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/70 backdrop-blur px-2 py-0.5 text-xs font-medium">{t('about.engagement.models.projectBased.badge')}</div>
        <div className="h-11 w-11 rounded-md bg-indigo-500 text-black grid place-items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M3 5h18M7 3v4M17 3v4M5 9h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9z" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold">{t('about.engagement.models.projectBased.title')}</h3>
        <p className="mt-2 text-black/70">{t('about.engagement.models.projectBased.description')}</p>
        <ul className="mt-4 space-y-2 text-sm text-black/80">
          {t('about.engagement.models.projectBased.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> {feature}
            </li>
          ))}
        </ul>
        <button className="mt-5 inline-flex items-center gap-2 text-indigo-600 font-semibold">
          {t('about.engagement.models.projectBased.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hourly Work */}
      <div className="group relative rounded-2xl border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 animate-slide-up [animation-delay:80ms]">
        <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/70 backdrop-blur px-2 py-0.5 text-xs font-medium">{t('about.engagement.models.hourlyWork.badge')}</div>
        <div className="h-11 w-11 rounded-md bg-indigo-500 text-black grid place-items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z" />
            <path d="M12 7v5l3 3" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold">{t('about.engagement.models.hourlyWork.title')}</h3>
        <p className="mt-2 text-black/70">{t('about.engagement.models.hourlyWork.description')}</p>
        <ul className="mt-4 space-y-2 text-sm text-black/80">
          {t('about.engagement.models.hourlyWork.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> {feature}
            </li>
          ))}
        </ul>
        <button className="mt-5 inline-flex items-center gap-2 text-indigo-600 font-semibold">
          {t('about.engagement.models.hourlyWork.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Monthly Retainer */}
      <div className="group relative rounded-2xl border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 animate-slide-up [animation-delay:160ms]">
        <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/70 backdrop-blur px-2 py-0.5 text-xs font-medium">{t('about.engagement.models.monthlyRetainer.badge')}</div>
        <div className="h-11 w-11 rounded-md bg-indigo-500 text-black grid place-items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M4 12a8 8 0 0 0 16 0" />
            <path d="M8 12a4 4 0 0 0 8 0" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold">{t('about.engagement.models.monthlyRetainer.title')}</h3>
        <p className="mt-2 text-black/70">{t('about.engagement.models.monthlyRetainer.description')}</p>
        <ul className="mt-4 space-y-2 text-sm text-black/80">
          {t('about.engagement.models.monthlyRetainer.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> {feature}
            </li>
          ))}
        </ul>
        <button className="mt-5 inline-flex items-center gap-2 text-indigo-600 font-semibold">
          {t('about.engagement.models.monthlyRetainer.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Sprint / Weekly Packages */}
      <div className="group relative rounded-2xl border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 animate-slide-up [animation-delay:240ms]">
        <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/70 backdrop-blur px-2 py-0.5 text-xs font-medium">{t('about.engagement.models.weeklySprints.badge')}</div>
        <div className="h-11 w-11 rounded-md bg-indigo-500 text-black grid place-items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold">{t('about.engagement.models.weeklySprints.title')}</h3>
        <p className="mt-2 text-black/70">{t('about.engagement.models.weeklySprints.description')}</p>
        <ul className="mt-4 space-y-2 text-sm text-black/80">
          {t('about.engagement.models.weeklySprints.features', { returnObjects: true }).map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> {feature}
            </li>
          ))}
        </ul>
        <button className="mt-5 inline-flex items-center gap-2 text-indigo-600 font-semibold">
          {t('about.engagement.models.weeklySprints.button')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</section>


      {/* 6) FAQ */}
<section id="faq" className="border-t border-black/10 bg-black text-white">
  <div className="mx-auto max-w-6xl px-4 py-24">
    <div className="mb-10">
      <h2 className="text-3xl font-extrabold">{t('about.faq.title')}</h2>
      <p className="text-white/70 mt-1">{t('about.faq.subtitle')}</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {t('about.faq.questions', { returnObjects: true }).map((item, index) => (
        <details key={index} className="rounded-xl border border-white/15 bg-white/5 p-5 open:animate-fade-in">
          <summary className="cursor-pointer font-semibold list-none flex items-center justify-between">
            <span>{item.question}</span>
            <span className="ml-4 text-white/60">+</span>
          </summary>
          <p className="mt-3 text-white/80">{item.answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}


