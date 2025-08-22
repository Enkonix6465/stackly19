import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPost2() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Navbar user={user} />

      {/* Hero Section */}
      <section 
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/high-paying-clients.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Client Acquisition</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">12 min read</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">Dec 12, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Attract High-Paying Clients: Proven Strategies
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold">
                MC
              </div>
              <div>
                <p className="font-semibold">Mike Chen</p>
                <p className="text-white/80 text-sm">Digital Marketing Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none dark:prose-invert">
                <img
                  src="/images/high-paying-clients.jpg"
                  alt="How to Attract High-Paying Clients"
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Attracting high-paying clients is the holy grail of freelancing. While it may seem challenging, 
                  it's entirely achievable with the right mindset, strategies, and execution. This comprehensive 
                  guide will show you exactly how to position yourself as a premium service provider.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Understanding High-Paying Clients
                </h2>
                <p className="mb-6">
                  High-paying clients are not just clients who can afford premium rates; they're clients who 
                  understand the value of quality work and are willing to invest in it. These clients typically 
                  have larger budgets, more complex projects, and higher expectations.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Characteristics of High-Paying Clients
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>They value quality over price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>They have larger, more complex projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>They understand the ROI of professional services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>They're willing to pay for expertise and experience</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 1: Build a Strong Personal Brand
                </h2>
                <p className="mb-6">
                  Your personal brand is how you present yourself to the world. It's what makes you memorable 
                  and differentiates you from your competition. A strong personal brand can command premium rates 
                  because it builds trust and credibility.
                </p>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
                    Personal Branding Elements
                  </h4>
                  <ul className="space-y-2 text-indigo-700 dark:text-indigo-300">
                    <li>• Professional website and portfolio</li>
                    <li>• Consistent social media presence</li>
                    <li>• Thought leadership content</li>
                    <li>• Professional headshots and branding</li>
                    <li>• Clear value proposition</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 2: Position Yourself as an Expert
                </h2>
                <p className="mb-6">
                  High-paying clients want to work with experts, not generalists. They're looking for someone 
                  who deeply understands their industry, challenges, and needs. Positioning yourself as an expert 
                  in a specific niche can significantly increase your earning potential.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
                    Establish Expertise Tips
                  </h4>
                  <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                    <li>• Specialize in a niche</li>
                    <li>• Create educational content</li>
                    <li>• Speak at events</li>
                    <li>• Get published in respected outlets</li>
                    <li>• Obtain relevant certifications</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 3: Deliver Exceptional Results
                </h2>
                <p className="mb-6">
                  The best way to attract high-paying clients is to consistently deliver exceptional results 
                  for your current clients. Happy clients become repeat clients and refer you to others, 
                  creating a virtuous cycle of growth.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                    Keys to Exceptional Delivery
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• Over-deliver on client expectations</li>
                    <li>• Communicate proactively</li>
                    <li>• Meet deadlines consistently</li>
                    <li>• Provide value-added insights</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 4: Network Strategically
                </h2>
                <p className="mb-6">
                  Networking is crucial for attracting high-paying clients. The people you know and the relationships 
                  you build can open doors to opportunities that might not be available through traditional channels.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                    Networking Strategies
                  </h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• Attend industry conferences and events</li>
                    <li>• Join professional groups</li>
                    <li>• Participate in online communities</li>
                    <li>• Connect with professionals in your field</li>
                    <li>• Build relationships before clients need you</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Conclusion
                </h2>
                <p className="mb-8">
                  Attracting high-paying clients is about implementing the right strategies consistently. By 
                  building a strong personal brand, positioning yourself as an expert, delivering exceptional results, 
                  networking strategically, and leveraging social proof, you can attract the clients you deserve.
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    MC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mike Chen</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Mike is a digital marketing expert who helps freelancers scale their businesses and attract premium clients.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Marketing
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Growth Strategy
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Analytics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              

              {/* Related Posts */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-4">Related Posts</h3>
                <div className="space-y-4">
                  <div 
                    className="cursor-pointer group"
                    onClick={() => navigate('/blog/1')}
                  >
                    <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">
                      Getting Started as a Freelancer
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      A step-by-step guide to landing your first project online.
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group"
                    onClick={() => navigate('/blog/3')}
                  >
                    <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">
                      Balancing Multiple Projects
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Time management hacks every freelancer should know.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
