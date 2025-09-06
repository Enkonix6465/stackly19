import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Home2() {
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
  

  const user = getCurrentUser()

  function handleLogout() {
    logoutUser()
    navigate('/login', { replace: true })
  }
  

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
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
          {t('common.videoNotSupported')}
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('home2.showcase.title')}
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('home2.showcase.subtitle')}
          </motion.p>
          <motion.div 
            className="mt-8 flex gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Services / Portfolio Grid */}
      <section id="portfolio" className={`border-t transition-colors duration-300 ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-black/10'
      }`}>
        <div className="mx-auto max-w-7xl px-4 py-24">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className={`text-5xl md:text-6xl font-extrabold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('home2.portfolio.title')}
            </motion.h2>
            <motion.p 
              className={`mt-6 text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("home2.portfolio.subtitle")}
            </motion.p>
            
            {/* Simple Divider Line */}
            <motion.div 
              className={`mt-6 w-24 h-1 mx-auto rounded-full ${
                isDark ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* Enhanced Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: t('home2.portfolio.services.webDevelopment.title'), 
                category: t('home2.portfolio.services.webDevelopment.category'), 
                image: '/images/web-dev.jpg',
                icon: '🌐',
                gradient: 'from-blue-500 to-purple-600'
              },
              { 
                title: t('home2.portfolio.services.mobileAppDevelopment.title'), 
                category: t('home2.portfolio.services.mobileAppDevelopment.category'), 
                image: '/images/mobile-app.jpg',
                icon: '📱',
                gradient: 'from-green-500 to-teal-600'
              },
              { 
                title: t('home2.portfolio.services.uiuxDesign.title'), 
                category: t('home2.portfolio.services.uiuxDesign.category'), 
                image: '/images/uiux.jpg',
                icon: '🎨',
                gradient: 'from-pink-500 to-rose-600'
              },
              { 
                title: t('home2.portfolio.services.contentWriting.title'), 
                category: t('home2.portfolio.services.contentWriting.category'), 
                image: '/images/content.jpg',
                icon: '✍️',
                gradient: 'from-orange-500 to-red-600'
              },
              { 
                title: t('home2.portfolio.services.digitalMarketing.title'), 
                category: t('home2.portfolio.services.digitalMarketing.category'), 
                image: '/images/marketing.jpg',
                icon: '📈',
                gradient: 'from-yellow-500 to-orange-600'
              },
              { 
                title: t('home2.portfolio.services.ecommerceSolutions.title'), 
                category: t('home2.portfolio.services.ecommerceSolutions.category'), 
                image: '/images/ecommerce.jpg',
                icon: '🛒',
                gradient: 'from-indigo-500 to-purple-600'
              },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Enhanced Service Card */}
                <div className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}>
                  {/* Service Image with Enhanced Hover Effect */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Floating Icon */}
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Hover Overlay with CTA */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <motion.button
                        className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
{t('common.viewDetails')}
                      </motion.button>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6">
                    <motion.h3 
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-white group-hover:text-indigo-300' : 'text-gray-900 group-hover:text-indigo-600'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {service.category}
                    </p>
                    
                    {/* Progress Bar Animation */}
                    <motion.div 
                      className={`mt-4 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => navigate('/services')}
              className={`px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/25' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/25'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
{t('home2.portfolio.exploreAllServices')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section
        id="testimonials"
        className="relative overflow-hidden border-t transition-colors duration-300 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-gray-700"
      >

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-extrabold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('home2.testimonials.title')}
            </motion.h2>
            <motion.p 
              className="mt-6 text-xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("home2.testimonials.subtitle")}
            </motion.p>
            
            {/* Divider Line */}
            <motion.div 
              className="mt-8 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* Enhanced Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('home2.testimonials.clients.sophia.name'),
                role: t('home2.testimonials.clients.sophia.role'),
                content: t('home2.testimonials.clients.sophia.content'),
                rating: 5,
                image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                name: t('home2.testimonials.clients.david.name'),
                role: t('home2.testimonials.clients.david.role'),
                content: t('home2.testimonials.clients.david.content'),
                rating: 5,
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                name: t('home2.testimonials.clients.aisha.name'),
                role: t('home2.testimonials.clients.aisha.role'),
                content: t('home2.testimonials.clients.aisha.content'),
                rating: 5,
                image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: 'from-pink-500 to-rose-600'
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/25 group-hover:bg-white/10">
                  {/* White and Purple Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Quote Icon */}
                  <motion.div 
                    className="absolute top-6 right-6 w-8 h-8 text-indigo-400/30"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </motion.div>

                  {/* Profile + Stars */}
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-white/20 object-cover shadow-lg"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </motion.div>
                    <div className="ml-4">
                      <div className="flex mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">{t('home2.testimonials.verifiedClient')}</div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <motion.p 
                    className="mb-6 text-gray-200 leading-relaxed text-lg relative z-10 line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Name + Role */}
                  <div className="relative z-10">
                    <motion.p 
                      className="font-bold text-white text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {testimonial.name}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-400 mt-1"
                      whileHover={{ x: 5 }}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Our Achievements - Black, White, Purple */}
      <section
        id="statistics"
        className={`border-t transition-colors duration-300 ${
          isDark
            ? "bg-black text-white border-gray-800"
            : "bg-white text-black border-gray-200"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-24">
          {/* Clean Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className={`text-4xl md:text-5xl font-bold ${
                isDark ? 'text-white' : 'text-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("home2.statistics.title")}
            </motion.h2>
            <motion.p 
              className={`mt-4 text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("home2.statistics.subtitle")}
            </motion.p>
            
            {/* Gradient Divider with Shadow */}
            <motion.div 
              className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 shadow-lg shadow-purple-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* Circular Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                target: 50, 
                suffix: "+", 
                label: t('home2.statistics.stats.projectsCompleted')
              },
              { 
                target: 25, 
                suffix: "+", 
                label: t('home2.statistics.stats.happyClients')
              },
              { 
                target: 3, 
                suffix: "+", 
                label: t('home2.statistics.stats.yearsExperience')
              },
              { 
                target: 100, 
                suffix: "%", 
                label: t('home2.statistics.stats.clientSatisfaction')
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="group flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Circular Container */}
                <div className={`relative w-32 h-32 ${
                  isDark 
                    ? 'bg-gray-900 border-4 border-purple-500' 
                    : 'bg-white border-4 border-purple-500'
                } rounded-full flex flex-col items-center justify-center shadow-lg shadow-black/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/30 group-hover:border-purple-400 group-hover:scale-105`}>
                  
                  {/* Counter */}
                  <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </motion.div>
                </div>

                {/* Label */}
                <motion.p 
                  className={`mt-4 text-sm font-medium text-center ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
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
          {t('common.videoNotSupported')}
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-white">
          {/* Heading */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('home2.process.title')}
            </motion.h2>
            <motion.p 
              className="text-gray-200 mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t('home2.process.subtitle')}
            </motion.p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: t('home2.process.steps.step1.title'), 
                desc: t('home2.process.steps.step1.desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              { 
                step: '02', 
                title: t('home2.process.steps.step2.title'), 
                desc: t('home2.process.steps.step2.desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                step: '03', 
                title: t('home2.process.steps.step3.title'), 
                desc: t('home2.process.steps.step3.desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              { 
                step: '04', 
                title: t('home2.process.steps.step4.title'), 
                desc: t('home2.process.steps.step4.desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((process, idx) => (
              <motion.div 
                key={idx} 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {process.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  {process.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  {process.desc}
                </motion.p>
              </motion.div>
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
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 flex flex-col items-center justify-center text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('home2.contactCta.title')}
          </motion.h2>
          
          {/* Subtext */}
          <motion.p 
            className="text-lg text-white/80 mb-8 whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('home2.contactCta.subtitle')}
          </motion.p>

          {/* Button */}
          <motion.button
            className="px-10 py-4 rounded-full bg-indigo-500 
                       text-black font-semibold shadow-md 
                       transition-all duration-300
                       hover:bg-white hover:text-indigo-500 hover:border hover:border-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('home2.contactCta.button')}
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  )
}