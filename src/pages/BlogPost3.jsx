import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPost3() {
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
    backgroundImage: "url('/images/project-balance.jpg')", // <--  image
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative mx-auto max-w-6xl px-4 py-16">
    <div className="max-w-4xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Productivity</span>
        <span className="text-white/80">•</span>
        <span className="text-white/80">10 min read</span>
        <span className="text-white/80">•</span>
        <span className="text-white/80">Dec 10, 2024</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Balancing Multiple Projects: Time Management Mastery
      </h1>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold">
          ED
        </div>
        <div>
          <p className="font-semibold">Emma Davis</p>
          <p className="text-white/80 text-sm">Productivity Coach</p>
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
                  src="/images/project-balance.jpg"
                  alt="Balancing Multiple Projects"
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Juggling multiple projects simultaneously is a common challenge for freelancers. While it can 
                  be overwhelming, mastering this skill is essential for scaling your business and increasing 
                  your income. This guide will teach you proven strategies to manage multiple projects effectively.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  The Challenge of Multiple Projects
                </h2>
                <p className="mb-6">
                  Managing multiple projects requires more than just good time management; it demands strategic 
                  thinking, clear communication, and the ability to prioritize effectively. Many freelancers 
                  struggle with this because they try to treat all projects equally, which leads to burnout 
                  and subpar results.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Common Pitfalls When Managing Multiple Projects
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✗</span>
                    <span>Trying to work on all projects simultaneously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✗</span>
                    <span>Poor communication with multiple clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✗</span>
                    <span>Lack of clear project boundaries and timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">✗</span>
                    <span>Insufficient planning and organization</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 1: Master the Art of Prioritization
                </h2>
                <p className="mb-6">
                  Not all projects are created equal. Some are more urgent, some are more valuable, and some 
                  are more complex. Learning to prioritize effectively is the foundation of successful 
                  multi-project management.
                </p>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
                    Priority Matrix Framework
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-indigo-600">High Priority, High Urgency</h5>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        Do these first - critical deadlines and high-value projects
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-indigo-600">High Priority, Low Urgency</h5>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        Schedule these - important but not time-sensitive
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-600">Low Priority, High Urgency</h5>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        Delegate if possible - urgent but not critical
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-indigo-600">Low Priority, Low Urgency</h5>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        Eliminate or postpone - not worth your time
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Factors to Consider When Prioritizing
                </h3>
                <ol className="mb-8 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>Deadline:</strong> How soon does the project need to be completed?
                  </li>
                  <li>
                    <strong>Value:</strong> What is the financial or strategic value of the project?
                  </li>
                  <li>
                    <strong>Complexity:</strong> How much time and effort will the project require?
                  </li>
                  <li>
                    <strong>Client Relationship:</strong> How important is this client to your business?
                  </li>
                  <li>
                    <strong>Dependencies:</strong> Are other projects waiting on this one?
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 2: Implement Effective Time Blocking
                </h2>
                <p className="mb-6">
                  Time blocking is a powerful technique that involves dedicating specific time slots to different 
                  projects or tasks. This approach helps you focus deeply on one project at a time while ensuring 
                  all projects receive adequate attention.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  How to Implement Time Blocking
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Morning Blocks:</strong> Reserve your most productive hours for high-priority projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Project-Specific Blocks:</strong> Dedicate entire days or half-days to single projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Buffer Time:</strong> Include breaks and transition time between projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Flexible Blocks:</strong> Leave some time for unexpected tasks and emergencies.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 3: Use Project Management Tools
                </h2>
                <p className="mb-6">
                  The right tools can make managing multiple projects much easier. From simple task managers 
                  to comprehensive project management platforms, these tools help you stay organized and on track.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Essential Tools for Multi-Project Management
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Trello</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Visual project management with kanban boards
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Asana</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Comprehensive project and task management
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Notion</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      All-in-one workspace for notes and projects
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Monday.com</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Team collaboration and project tracking
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 4: Set Clear Boundaries and Expectations
                </h2>
                <p className="mb-6">
                  One of the biggest challenges when managing multiple projects is setting and maintaining 
                  clear boundaries with clients. Without proper boundaries, projects can easily overlap and 
                  create conflicts.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                    Setting Project Boundaries
                  </h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• Define clear project scope and deliverables</li>
                    <li>• Set realistic timelines and milestones</li>
                    <li>• Establish communication protocols and response times</li>
                    <li>• Define revision limits and change request processes</li>
                    <li>• Set clear payment terms and project completion criteria</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Managing Client Expectations
                </h3>
                <p className="mb-6">
                  Be transparent about your workload and availability. Let clients know upfront that you're 
                  working on multiple projects and set realistic expectations about response times and delivery 
                  dates. This honesty builds trust and prevents misunderstandings.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 5: Batch Similar Tasks
                </h2>
                <p className="mb-6">
                  Batching similar tasks together can significantly improve your productivity when managing 
                  multiple projects. Instead of switching between different types of work, you can focus on 
                  one category of tasks at a time.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Task Batching Examples
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Communication Batch:</strong> Handle all client emails and calls in one time block.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Creative Batch:</strong> Work on design, writing, or creative tasks together.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Administrative Batch:</strong> Handle invoicing, scheduling, and planning tasks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Review Batch:</strong> Review and revise multiple projects in one session.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 6: Learn to Say No
                </h2>
                <p className="mb-6">
                  One of the most important skills for managing multiple projects is knowing when to say no. 
                  Taking on too many projects will lead to poor quality work, missed deadlines, and burnout.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  When to Decline New Projects
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span>When your current workload is at maximum capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span>When the project doesn't align with your expertise or interests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span>When the client has unrealistic expectations or timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span>When the project doesn't fit your current business goals</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategy 7: Regular Review and Adjustment
                </h2>
                <p className="mb-6">
                  Managing multiple projects is not a set-it-and-forget-it process. You need to regularly 
                  review your progress, assess your workload, and make adjustments as needed.
                </p>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
                    Weekly Review Checklist
                  </h4>
                  <ul className="space-y-2 text-indigo-700 dark:text-indigo-300">
                    <li>• Review all project timelines and deadlines</li>
                    <li>• Assess your current workload and capacity</li>
                    <li>• Identify any bottlenecks or conflicts</li>
                    <li>• Update project priorities based on new information</li>
                    <li>• Plan the upcoming week's schedule</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Maintaining Work-Life Balance
                </h2>
                <p className="mb-6">
                  Managing multiple projects can be stressful, so it's crucial to maintain a healthy work-life 
                  balance. Remember that you're not a machine, and taking breaks is essential for long-term success.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Self-Care Strategies for Busy Freelancers
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Take Regular Breaks:</strong> Step away from your work every hour or two.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Set Work Hours:</strong> Establish clear start and end times for your workday.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Exercise Regularly:</strong> Physical activity helps reduce stress and improve focus.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">•</span>
                    <span><strong>Practice Mindfulness:</strong> Meditation or deep breathing can help manage stress.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Conclusion
                </h2>
                <p className="mb-8">
                  Managing multiple projects successfully is a skill that takes time to develop. By implementing 
                  these strategies consistently, you can handle multiple projects without sacrificing quality or 
                  your well-being. Remember, the goal is not just to survive multiple projects but to thrive 
                  with them.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Start with one or two strategies and gradually incorporate more as you become comfortable. 
                  With practice and patience, you'll find the perfect balance that works for your unique 
                  situation and allows you to scale your freelancing business successfully.
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    ED
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Emma Davis</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Emma is a productivity coach who specializes in helping freelancers optimize their 
                      workflows and manage multiple projects effectively. With over 6 years of experience, 
                      she has helped hundreds of freelancers increase their productivity and reduce stress.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Time Management
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Workflow Optimization
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                        Mindset
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
                    onClick={() => navigate('/blog/2')}
                  >
                    <h4 className="font-semibold group-hover:text-indigo-600 transition-colors">
                      How to Attract High-Paying Clients
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Proven strategies to build trust and grow your income.
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
