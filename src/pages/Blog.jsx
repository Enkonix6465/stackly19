import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function Blog() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
   const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])


  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()

  const blogPosts = [
    {
      id: 1,
      title: t('blogPage.blogPosts.gettingStarted.title'),
      excerpt: t('blogPage.blogPosts.gettingStarted.excerpt'),
      image: "/images/freelancer-start.jpg",
      category: t('blogPage.blogPosts.gettingStarted.category'),
      author: t('blogPage.blogPosts.gettingStarted.author'),
      date: t('blogPage.blogPosts.gettingStarted.date'),
      readTime: t('blogPage.blogPosts.gettingStarted.readTime'),
      featured: true
    },
    {
      id: 2,
      title: t('blogPage.blogPosts.highPayingClients.title'),
      excerpt: t('blogPage.blogPosts.highPayingClients.excerpt'),
      image: "/images/high-paying-clients.jpg",
      category: t('blogPage.blogPosts.highPayingClients.category'),
      author: t('blogPage.blogPosts.highPayingClients.author'),
      date: t('blogPage.blogPosts.highPayingClients.date'),
      readTime: t('blogPage.blogPosts.highPayingClients.readTime'),
      featured: true
    },
    {
      id: 3,
      title: t('blogPage.blogPosts.multipleProjects.title'),
      excerpt: t('blogPage.blogPosts.multipleProjects.excerpt'),
      image: "/images/project-balance.jpg",
      category: t('blogPage.blogPosts.multipleProjects.category'),
      author: t('blogPage.blogPosts.multipleProjects.author'),
      date: t('blogPage.blogPosts.multipleProjects.date'),
      readTime: t('blogPage.blogPosts.multipleProjects.readTime'),
      featured: true
    }
  ]

  const categories = [
    { name: 'all', label: t('blogPage.categories.all'), count: 3 },
    { name: 'freelancing', label: t('blogPage.categories.freelancing'), count: 1 },
    { name: 'client-acquisition', label: t('blogPage.categories.clientAcquisition'), count: 1 },
    { name: 'productivity', label: t('blogPage.categories.productivity'), count: 1 }
  ]

  const trendingTopics = t('blogPage.trendingTopics.topics', { returnObjects: true })

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`)
  }

  return (
<div
      className={`transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >      <Navbar user={user} />

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
    <source src="/vedio5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (darken video for readability) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    <p className="text-sm tracking-widest text-indigo-300 font-medium">
      {t('blogPage.showcase.tagline')}
    </p>
    <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
      {t('blogPage.showcase.title')}
    </h1>
    <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
      {t('blogPage.showcase.subtitle')}
    </p>
    <div className="mt-8 flex gap-4 justify-center">
      {/* Primary Button */}
      <a
        href="/services"
        className="rounded-md bg-indigo-500 text-black px-5 py-2.5 hover:bg-indigo-600 hover:text-white transition"
      >
        {t('blogPage.showcase.subscribeButton')}
      </a>

      
    </div>
  </div>
</section>





      

      {/* Section 1: Featured Blog Posts */}
      <section className="py-20 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('blogPage.featuredArticles.title')}</h2>
            <p className={`${isDark ? 'text-white' : 'text-black'}`}>{t('blogPage.featuredArticles.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => handleBlogClick(post.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Our Freelancing Platform */}
<section
  className={`py-20 transition-colors duration-500 ${
    isDark ? "bg-indigo-900 text-white" : "bg-indigo-100 text-black"
  }`}
>  <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        {t('blogPage.whyChoosePlatform.title')}
      </h2>
      <p className={`${isDark ? 'text-white' : 'text-black'}`}>
        {t('blogPage.whyChoosePlatform.subtitle')}
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
      {/* Feature Card */}
      {[
        {
          title: t('blogPage.whyChoosePlatform.features.globalTalent.title'),
          desc: t('blogPage.whyChoosePlatform.features.globalTalent.description'),
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" className="w-12 h-12">
              <path fill="#7cb342" d="M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4"></path>
              <path fill="#0277bd" d="M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21m-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2s.2-.2.2-.4c0-.6-.6-1.3-1-1.7s-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9m.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5s1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8s.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7"></path>
            </svg>
          ),
        },
        {
          title: t('blogPage.whyChoosePlatform.features.securePayments.title'),
          desc: t('blogPage.whyChoosePlatform.features.securePayments.description'),
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" className="w-12 h-12">
              <g fill="none">
                <path fill="#00a6ed" d="M27.752 30H4.248A2.25 2.25 0 0 1 2 27.751V14.25A2.25 2.25 0 0 1 4.248 12h23.504A2.25 2.25 0 0 1 30 14.249V27.75A2.245 2.245 0 0 1 27.752 30"></path>
                <path fill="#f4f4f4" d="M23.386 24H5.614A.617.617 0 0 1 5 23.384v-2.768c0-.333.272-.616.614-.616h17.772c.332 0 .614.273.614.616v2.778a.61.61 0 0 1-.614.606"></path>
                <path fill="#fff478" d="M25.353 28h1.794a.85.85 0 0 0 .853-.853v-1.794a.85.85 0 0 0-.853-.853h-1.794a.85.85 0 0 0-.853.853v1.794a.86.86 0 0 0 .853.853"></path>
                <path fill="#321b41" d="M30 15H2v3h28z"></path>
                <path fill="#9b9b9b" d="M6 22a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 6 22"></path>
              </g>
            </svg>
          ),
        },
        {
          title: t('blogPage.whyChoosePlatform.features.verifiedClients.title'),
          desc: t('blogPage.whyChoosePlatform.features.verifiedClients.description'),
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" className="w-12 h-12">
              <g fill="none">
                <path fill="#d7e0ff" d="M7.354 13.384a1 1 0 0 1-.715 0A9.49 9.49 0 0 1 .55 4.517V1.542A.99.99 0 0 1 1.542.55h10.91a.99.99 0 0 1 .991.992v2.975a9.49 9.49 0 0 1-6.09 8.867Z"></path>
                <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M7.354 13.384a1 1 0 0 1-.715 0v0A9.49 9.49 0 0 1 .55 4.517V1.542A.99.99 0 0 1 1.542.55h10.91a.99.99 0 0 1 .991.992v2.975a9.49 9.49 0 0 1-6.09 8.867v0Z" strokeWidth={1}></path>
                <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M10 4L6 8.5L4 7" strokeWidth={1}></path>
              </g>
            </svg>
          ),
        },
        {
          title: t('blogPage.whyChoosePlatform.features.support24x7.title'),
          desc: t('blogPage.whyChoosePlatform.features.support24x7.description'),
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="w-12 h-12">
              <path fill="#000" d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"></path>
            </svg>
          ),
        },
        {
          title: t('blogPage.whyChoosePlatform.features.skillMatching.title'),
          desc: t('blogPage.whyChoosePlatform.features.skillMatching.description'),
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 72 72" className="w-12 h-12">
              <path fill="#92d3f5" d="M39.78 57.882h12.99V44.85c5.298 0 11.631 1.4 11.631-6.193c0-6.762-6.333-5.854-11.631-5.854v-13.29H39.78c1.823-5.816 1.823-11.632-4.978-11.632s-6.73 6.334-6.73 11.631h-13.67v14.01c4.243-1.57 11.631-4.418 11.631 5.175s-8.48 6.581-11.631 5.173v14.01h11.97c0-5.297 0-12.382 7.214-12.31c6.783.067 6.193 7.013 6.193 12.31"></path>
              <path fill="#61b2e4" d="M39.054 51.1c1.736 1.735 1.11 4.133 1.11 6.782H52.77v-14.01c5.816 1.035 10.997 3.604 10.997-5.214c0-5.298-4.974-6.194-10.272-6.194V19.815h-4.116"></path>
              <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path d="M14.402 33.524V19.513h15.226M28 57.882H14.402V43.871m38.368 0v14.011H38.348m1.628-38.369H52.77v14.011m-38.368 0c2.68-2.341 11.631-3.287 11.631 5.174m-11.631 5.173c2.68 2.342 11.631 3.288 11.631-5.173M28 57.882C25.66 55.2 24.714 46.25 33.175 46.25"></path>
                <path d="M38.348 57.882c2.341-2.681 3.287-11.631-5.174-11.631m-3.546-26.738c-2.341-2.681-3.287-11.631 5.174-11.631m5.174 11.631c2.34-2.681 3.287-11.631-5.174-11.631M52.77 43.871c2.681 2.342 11.631 3.288 11.631-5.173M52.77 33.524c2.681-2.341 11.631-3.287 11.631 5.174"></path>
              </g>
            </svg>
          ),
        },
        {
          title: t('blogPage.whyChoosePlatform.features.portfolioShowcase.title'),
          desc: t('blogPage.whyChoosePlatform.features.portfolioShowcase.description'),
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" className="w-12 h-12">
              <path fill="#ffa000" d="M40 12H22l-4-4H8c-2.2 0-4 1.8-4 4v8h40v-4c0-2.2-1.8-4-4-4"></path>
              <path fill="#ffca28" d="M40 12H8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4"></path>
            </svg>
          ),
        },
      ].map((feature, index) => (
        <div
          key={index}
          className={`bg-gradient-to-b from-gray-800 to-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-700 hover:border-indigo-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up hover:animate-glow`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {/* Icon */}
          <div className="mb-4 transform transition-transform duration-200 hover:scale-110 hover:rotate-6 hover:animate-flip animate-bounce-gentle">
            {feature.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 text-white transform transition-all duration-200 hover:text-indigo-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-white text-sm transform transition-all duration-200 hover:text-gray-200">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>




      

      {/* Section 4: Trending Topics */}
<section
  className={`py-20 transition-colors duration-500 ${
    isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
  }`}
>  <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
    <div className={`text-center mb-16 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
  <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
    {t('blogPage.trendingTopics.title')}
  </h2>
  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
    {t('blogPage.trendingTopics.subtitle')}
  </p>
</div>

    {/* Topics Grid */}
    <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-6">
      {trendingTopics.map((topic, index) => (
        <div
          key={index}
          className="p-6 rounded-xl shadow-md cursor-pointer text-center 
                     transform transition-transform duration-300 
                     bg-gradient-to-br from-indigo-600 via-indigo-400 to-indigo-200 text-white 
                     hover:scale-105 hover:shadow-xl hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-300"
        >
          <h3 className="font-semibold text-lg">{topic}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Section 5: Author Spotlight */}
<section
  className={`py-20 transition-colors duration-500 ${
    isDark ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'
  }`}
>  <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
   <div className="text-center mb-16">
  <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
    {t('blogPage.authors.title')}
  </h2>
  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
    {t('blogPage.authors.subtitle')}
  </p>
</div>

    {/* Authors Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: t('blogPage.authors.sarah.name'),
          role: t('blogPage.authors.sarah.role'),
          bio: t('blogPage.authors.sarah.bio'),
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          expertise: t('blogPage.authors.sarah.expertise', { returnObjects: true })
        },
        {
          name: t('blogPage.authors.mike.name'),
          role: t('blogPage.authors.mike.role'),
          bio: t('blogPage.authors.mike.bio'),
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          expertise: t('blogPage.authors.mike.expertise', { returnObjects: true })
        },
        {
          name: t('blogPage.authors.emma.name'),
          role: t('blogPage.authors.emma.role'),
          bio: t('blogPage.authors.emma.bio'),
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          expertise: t('blogPage.authors.emma.expertise', { returnObjects: true })
        }
      ].map((author, index) => (
        <div
          key={index}
          className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:shadow-xl hover:scale-105 transform transition duration-300"
        >
          {/* Author Image */}
          <img
            src={author.image}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-indigo-500 shadow-md"
          />
          <h3 className="text-xl font-bold mb-2 text-white">{author.name}</h3>
          <p className="text-indigo-400 mb-3">{author.role}</p>
          <p className="text-gray-400 mb-4">{author.bio}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {author.expertise.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Section 6: Call to Action */}
<section className="relative py-24 bg-gradient-to-r from-black via-indigo-900 to-gray-900 text-white overflow-hidden">
  <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover"></div>

  <div className="relative mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      {t('blogPage.cta.title')}
    </h2>
    <p className="text-lg md:text-xl text-gray-300 mb-10">
      {t('blogPage.cta.description')}
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <a
        href="/contact"
        className="px-8 py-3 rounded-xl bg-white text-black font-semibold 
                 shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300"
      >
        {t('blogPage.cta.startFreelancingButton')}
      </a>
      <a
        href="/about"
        className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold 
                 hover:bg-white hover:text-black transition duration-300"
      >
        {t('blogPage.cta.learnMoreButton')}
      </a>
    </div>
  </div>
</section>





      <Footer />
    </div>
  )
}
