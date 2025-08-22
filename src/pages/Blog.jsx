import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blog() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started as a Freelancer",
      excerpt: "A step-by-step guide to landing your first project online.",
      image: "/images/freelancer-start.jpg",
      category: "Freelancing",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "How to Attract High-Paying Clients",
      excerpt: "Proven strategies to build trust.",
      image: "/images/high-paying-clients.jpg",
      category: "Client Acquisition",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "Balancing Multiple Projects",
      excerpt: "Time management hacks every freelancer should know.",
      image: "/images/project-balance.jpg",
      category: "Productivity",
      author: "Emma Davis",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      featured: true
    }
  ]

  const categories = [
    { name: 'all', label: 'All Posts', count: 3 },
    { name: 'freelancing', label: 'Freelancing', count: 1 },
    { name: 'client-acquisition', label: 'Client Acquisition', count: 1 },
    { name: 'productivity', label: 'Productivity', count: 1 }
  ]

  const trendingTopics = [
    "Remote Work Trends 2025",
    "AI in Freelancing",
    "Building Personal Brand",
    "Financial Planning for Freelancers",
    "Networking Strategies"
  ]

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`)
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
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
    <source src="/public/vedio5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (darken video for readability) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    <p className="text-sm tracking-widest text-indigo-300 font-medium">
      Freelancer Blog
    </p>
    <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
      Stay Ahead, Stay Inspired
    </h1>
    <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
      Tips, tools, and trends to fuel your freelancing journey.    </p>
    <div className="mt-8 flex gap-4 justify-center">
      {/* Primary Button */}
      <a
        href="/services"
        className="rounded-md bg-indigo-500 text-black px-5 py-2.5 hover:bg-indigo-600 hover:text-white transition"
      >
        Subscribe 
      </a>

      
    </div>
  </div>
</section>





      

      {/* Section 1: Featured Blog Posts */}
      <section className="py-20 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-gray-600 dark:text-gray-400">Our most popular and insightful posts</p>
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
<section className="py-20 bg-gray-900 text-white">
  <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Why Choose Our Freelancing Platform?
      </h2>
      <p className="text-gray-400">
        Designed for freelancers & clients to connect, collaborate, and grow 🚀
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
      {/* Feature Card */}
      {[
        {
          title: "Global Talent",
          desc: "Access top freelancers from around the world for any project.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-indigo-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12h19.5M12 2.25c2.4853 2.9196 3.75 6.0775 3.75 9.75s-1.2647 6.8304-3.75 9.75M12 2.25c-2.4853 2.9196-3.75 6.0775-3.75 9.75s1.2647 6.8304 3.75 9.75"
              />
            </svg>
          ),
        },
        {
          title: "Secure Payments",
          desc: "Safe & transparent payment system for both clients and freelancers.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-indigo-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 12h7.5m-7.5 3h4.5"
              />
            </svg>
          ),
        },
        {
          title: "Verified Clients",
          desc: "Work only with trusted and verified clients to avoid scams.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-indigo-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        },
        {
          title: "24/7 Support",
          desc: "Our team is available around the clock to help you succeed.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-indigo-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75A4.5 4.5 0 016.75 2.25h10.5a4.5 4.5 0 014.5 4.5v10.5a4.5 4.5 0 01-4.5 4.5H6.75a4.5 4.5 0 01-4.5-4.5V6.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9.75h7.5m-7.5 4.5h4.5"
              />
            </svg>
          ),
        },
        {
          title: "Skill Matching",
          desc: "Smart matching system to connect freelancers with the right projects.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-indigo-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15M12 4.5v15"
              />
            </svg>
          ),
        },
        {
          title: "Portfolio Showcase",
          desc: "Easily display your work to attract high-paying clients.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-indigo-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.25h18M3 12h18M3 15.75h18"
              />
            </svg>
          ),
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-700 hover:border-indigo-500"
        >
          {/* Icon */}
          <div className="mb-4">{feature.icon}</div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

          {/* Description */}
          <p className="text-gray-400 text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>




      

      {/* Section 4: Trending Topics */}
<section className="py-20 bg-gray-50">
  <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Trending Topics
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        What the freelancing community is talking about
      </p>
    </div>

    {/* Topics Grid */}
    <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-6">
      {trendingTopics.map((topic, index) => (
        <div
          key={index}
          className="p-6 rounded-xl shadow-md cursor-pointer text-center 
                     transform transition-transform duration-300 
                     bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                     hover:scale-105 hover:shadow-xl"
        >
          <h3 className="font-semibold text-lg">{topic}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Section 5: Author Spotlight */}
<section className="py-20 bg-gray-900 text-gray-100">
  <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
         Meet Our Authors
      </h2>
      <p className="text-gray-400">
        Expert freelancers sharing their knowledge
      </p>
    </div>

    {/* Authors Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah Johnson",
          role: "Freelance Writer & Consultant",
          bio: "10+ years helping freelancers build successful careers",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          expertise: ["Content Strategy", "Personal Branding", "Client Relations"]
        },
        {
          name: "Mike Chen",
          role: "Digital Marketing Expert",
          bio: "Specialized in helping freelancers scale their businesses",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          expertise: ["Marketing", "Growth Strategy", "Analytics"]
        },
        {
          name: "Emma Davis",
          role: "Productivity Coach",
          bio: "Teaching freelancers to work smarter, not harder",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          expertise: ["Time Management", "Workflow Optimization", "Mindset"]
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
      Take the Next Step in Your Freelancing Journey
    </h2>
    <p className="text-lg md:text-xl text-gray-300 mb-10">
      Join a thriving community of freelancers and unlock the tools, insights, 
      and opportunities you need to succeed. 
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <a
        href="/contact"
        className="px-8 py-3 rounded-xl bg-white text-black font-semibold 
                 shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300"
      >
        Start Freelancing
      </a>
      <a
        href="/about"
        className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold 
                 hover:bg-white hover:text-black transition duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
</section>





      <Footer />
    </div>
  )
}
