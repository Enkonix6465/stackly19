import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPost1() {
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
    backgroundImage: "url('/images/freelancer-start.jpg')", // <-- replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative mx-auto max-w-6xl px-4 py-16">
    <div className="max-w-4xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Freelancing</span>
        <span className="text-white/80">•</span>
        <span className="text-white/80">8 min read</span>
        <span className="text-white/80">•</span>
        <span className="text-white/80">Dec 15, 2024</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Getting Started as a Freelancer: A Complete Guide
      </h1>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold">
          SJ
        </div>
        <div>
          <p className="font-semibold">Sarah Johnson</p>
          <p className="text-white/80 text-sm">Freelance Writer & Consultant</p>
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
                  src="/images/freelancer-start.jpg"
                  alt="Getting Started as a Freelancer"
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Embarking on a freelancing journey can be both exciting and overwhelming. With the right approach, 
                  you can build a successful career that offers flexibility, financial freedom, and personal fulfillment. 
                  This comprehensive guide will walk you through every step of the process.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Understanding the Freelancing Landscape
                </h2>
                <p className="mb-6">
                  Freelancing has evolved significantly over the past decade. What once was considered a side hustle 
                  has now become a legitimate career path for millions of professionals worldwide. The gig economy 
                  continues to grow, offering opportunities across virtually every industry.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Key Benefits of Freelancing
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>Flexible work hours and location independence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>Unlimited earning potential based on your skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>Ability to choose projects that align with your interests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✓</span>
                    <span>Professional growth through diverse client experiences</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Step 1: Assess Your Skills and Market Demand
                </h2>
                <p className="mb-6">
                  Before diving into freelancing, it's crucial to evaluate your current skill set and understand 
                  what the market demands. This self-assessment will help you position yourself effectively and 
                  identify areas for improvement.
                </p>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
                    Skills Assessment Checklist
                  </h4>
                  <ul className="space-y-2 text-indigo-700 dark:text-indigo-300">
                    <li>• Technical skills relevant to your field</li>
                    <li>• Communication and client management abilities</li>
                    <li>• Time management and organizational skills</li>
                    <li>• Problem-solving and critical thinking</li>
                    <li>• Marketing and self-promotion capabilities</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Step 2: Choose Your Freelancing Platform
                </h2>
                <p className="mb-6">
                  There are numerous platforms where you can find freelance work. Each has its own advantages 
                  and target audience. Research and choose the ones that best align with your skills and goals.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Popular Freelancing Platforms
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Upwork</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Great for beginners, wide variety of projects
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Fiverr</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Service-based marketplace, good for creative work
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Freelancer.com</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Competitive bidding system, various project types
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Toptal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Premium platform for top-tier professionals
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Step 3: Create a Compelling Profile
                </h2>
                <p className="mb-6">
                  Your profile is your digital business card. It's often the first impression potential clients 
                  have of you, so make it count. A well-crafted profile can significantly increase your chances 
                  of landing projects.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Profile Optimization Tips
                </h3>
                <ol className="mb-8 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>Professional Headshot:</strong> Use a high-quality, professional photo that conveys trust and competence.
                  </li>
                  <li>
                    <strong>Compelling Headline:</strong> Create a headline that clearly states what you do and your unique value proposition.
                  </li>
                  <li>
                    <strong>Detailed Overview:</strong> Write a comprehensive overview that highlights your expertise, experience, and achievements.
                  </li>
                  <li>
                    <strong>Portfolio Showcase:</strong> Include your best work samples to demonstrate your capabilities.
                  </li>
                  <li>
                    <strong>Skills and Certifications:</strong> List relevant skills and any certifications that add credibility.
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Step 4: Set Your Pricing Strategy
                </h2>
                <p className="mb-6">
                  Pricing is one of the most challenging aspects of freelancing. Set your rates too low, and you 
                  might struggle to make ends meet. Set them too high, and you might price yourself out of the market.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
                    Pricing Strategy Considerations
                  </h4>
                  <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                    <li>• Research market rates for your skills and experience level</li>
                    <li>• Consider your living expenses and financial goals</li>
                    <li>• Factor in taxes, healthcare, and other business expenses</li>
                    <li>• Start with competitive rates and increase as you gain experience</li>
                    <li>• Offer different pricing tiers for different service levels</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Step 5: Land Your First Client
                </h2>
                <p className="mb-6">
                  Getting your first client can be the most challenging part of your freelancing journey. 
                  However, with persistence and the right approach, you can overcome this hurdle and start building your client base.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Strategies for Landing Your First Client
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Start with Small Projects:</strong> Offer to do smaller, simpler projects to build your portfolio and gain reviews.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Leverage Your Network:</strong> Reach out to friends, family, and professional contacts who might need your services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Cold Outreach:</strong> Identify potential clients and reach out with personalized proposals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Social Media Marketing:</strong> Use platforms like LinkedIn, Twitter, and Instagram to showcase your expertise.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Building Long-term Success
                </h2>
                <p className="mb-6">
                  Freelancing is not just about landing individual projects; it's about building a sustainable 
                  business. Focus on delivering exceptional value, building strong client relationships, and 
                  continuously improving your skills.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                    Success Principles for Freelancers
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• Always exceed client expectations</li>
                    <li>• Communicate clearly and regularly</li>
                    <li>• Meet deadlines consistently</li>
                    <li>• Ask for feedback and testimonials</li>
                    <li>• Continuously learn and adapt</li>
                    <li>• Build a strong personal brand</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Conclusion
                </h2>
                <p className="mb-8">
                  Starting your freelancing journey requires preparation, patience, and persistence. By following 
                  these steps and maintaining a professional approach, you can build a successful freelancing career 
                  that offers the freedom and flexibility you're looking for.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Remember, every successful freelancer started exactly where you are now. The key is to take 
                  action, learn from your experiences, and never stop improving. Your freelancing success story 
                  is waiting to be written.
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    SJ
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Sarah is a freelance writer and consultant with over 10 years of experience helping 
                      freelancers build successful careers. She specializes in content strategy, personal branding, 
                      and client relations.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Content Strategy
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Personal Branding
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Client Relations
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
                    onClick={() => navigate('/blog/2')}
                  >
                    <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">
                      How to Attract High-Paying Clients
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Proven strategies to build trust and grow your income.
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
