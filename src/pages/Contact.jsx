import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [videoLoading, setVideoLoading] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])


  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser()
        setUser(currentUser)
      } else {
        navigate('/login')
      }
    }
    checkAuth()
  }, [navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  if (!user) {
    return null
  }

  return (
    <div className=" text-black dark:text-white transition-colors">
      <Navbar user={user} />


      {/* Showcase */}
<section
  id="showcase"
  className="relative overflow-hidden h-screen flex items-center justify-center text-center"
>
  {/* Fallback Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
  
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    onLoadedData={() => {
      console.log('Video loaded successfully')
    }}
    onError={(e) => {
      console.error('Video error:', e)
    }}
  >
    <source src="/showcase-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (darken video for readability) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    
    <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
       {t('contact.showcase.title')}
    </h1>
    <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
      {t('contact.showcase.subtitle')}
    </p>
    <div className="mt-8 flex gap-4 justify-center">
      {/* Primary Button */}
      <a
        href="#contact"
        className="rounded-md bg-indigo-500 text-black px-5 py-2.5 hover:bg-indigo-600 hover:text-white transition"
      >
        {t('contact.showcase.contactButton')}
      </a>

      
    </div>
  </div>
</section>
      
      

      {/* Contact Form Section */}
<section
  className={`py-20 transition-colors duration-500 ${
    isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
  }`}>        <div className="mx-auto max-w-4xl px-4">
          <div
  className={`text-center mb-16 transition-colors duration-500 ${
    isDark ? "text-white" : "text-gray-900"
  }`}
>
  <h2 className="text-4xl font-bold mb-4" id="contact2">
    {t('contact.form.title')}
  </h2>
  <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
    {t('contact.form.subtitle')}
  </p>
</div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            {submitSuccess && (
              <div className="mb-8 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {t('contact.form.successMessage')}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} id='contact' className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder={t('contact.form.fullNamePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <div className="text-center">
                <button
  type="submit"
  disabled={isSubmitting}
  className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg 
             hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 
             transition-all duration-300 transform hover:scale-105 
             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
>
  {isSubmitting ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
             5.291A7.962 7.962 0 014 12H0c0 3.042 
             1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {t('contact.form.sendingMessage')}
    </>
  ) : (
    t('contact.form.sendMessage')
  )}
</button>

              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
    {t('contact.map.title')}
  </h2>
  <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
    {t('contact.map.subtitle')}
  </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9 h-96 md:h-[500px]">
              {/* Placeholder for Google Maps - Replace with actual map integration */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953736315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1620211234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
<section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-indigo-900' : 'bg-indigo-100'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
    {t('contact.contactInfo.title')}
  </h2>
  <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white' : 'text-black'}`}>
    {t('contact.contactInfo.subtitle')}
  </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('contact.contactInfo.phone')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {t('contact.contactInfo.phoneNumber')}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {t('contact.contactInfo.phoneHours')}
              </p>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('contact.contactInfo.email')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {t('contact.contactInfo.emailAddress')}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {t('contact.contactInfo.emailResponse')}
              </p>
            </div>

            {/* Office */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('contact.contactInfo.office')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {t('contact.contactInfo.officeAddress')}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {t('contact.contactInfo.officeCity')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
<section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>

  <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* reduced overlay opacity */}
  
  <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
    <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {t('contact.cta.title')}
    </h2>
    <p className={`text-lg md:text-xl mb-10 leading-relaxed ${isDark ? 'text-white' : 'text-gray-600'}`}>
      {t('contact.cta.subtitle')}
    </p>
    <a
      href='#contact2'
      className="px-10 py-4 bg-purple-600 text-white font-semibold rounded-lg 
                 shadow-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 
                 transition-all duration-300 transform hover:scale-105"
    >
      {t('contact.cta.getStartedButton')}
    </a>
  </div>
</section>

      <Footer />
    </div>
  )
}
