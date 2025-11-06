import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 dark:from-slate-900 dark:to-purple-900">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-orange-200/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#ff6d00] to-[#9d4edd] bg-clip-text text-transparent">
            Mason Greene
          </div>
          <button className="bg-gradient-to-r from-[#ff6d00] to-[#5a189a] hover:from-[#ff8500] hover:to-[#240046] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Me
          </button>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#ff6d00] via-[#ff8500] to-[#9d4edd] bg-clip-text text-transparent">
              Full-Stack
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#5a189a] to-[#240046] bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto">
            CS Student building innovative web solutions with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-gradient-to-r from-[#ff6d00] to-[#5a189a] hover:from-[#ff8500] hover:to-[#240046] text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="border-2 border-[#5a189a] text-[#5a189a] hover:bg-[#5a189a] hover:text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300">
              Download Resume
            </button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-[#ff6d00] text-white px-4 py-2 rounded-full text-base font-medium">React</span>
            <span className="bg-[#ff8500] text-white px-4 py-2 rounded-full text-base font-medium">Next.js</span>
            <span className="bg-[#ff9e00] text-white px-4 py-2 rounded-full text-base font-medium">TypeScript</span>
            <span className="bg-[#5a189a] text-white px-4 py-2 rounded-full text-base font-medium">Python</span>
            <span className="bg-[#9d4edd] text-white px-4 py-2 rounded-full text-base font-medium">Node.js</span>
            <span className="bg-[#240046] text-white px-4 py-2 rounded-full text-base font-medium">MongoDB</span>
          </div>
        </div>
      </section>

      {/* About Section - Full Width */}
      <section className="min-h-screen flex items-center px-4 py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#ff6d00] to-[#9d4edd] bg-clip-text text-transparent">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm a Computer Science student passionate about creating meaningful digital experiences. 
                  With a focus on full-stack development, I enjoy turning complex problems into simple, 
                  beautiful solutions.
                </p>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently studying at university while building projects that make a difference. 
                  I'm always eager to learn new technologies and collaborate on exciting projects.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#5a189a] mb-4">Frontend</h3>
                    <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-300">
                      <li>React & Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#5a189a] mb-4">Backend</h3>
                    <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-300">
                      <li>Node.js & Python</li>
                      <li>MongoDB & SQL</li>
                      <li>REST APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-[#ff6d00] via-[#ff8500] to-[#9d4edd] rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <span className="text-8xl text-white font-bold">MG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Full Width */}
      <section className="min-h-screen flex items-center px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#ff6d00] to-[#9d4edd] bg-clip-text text-transparent">Featured Projects</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#ff6d00]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#ff8500]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#5a189a]">EcoSite Portfolio</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    A modern portfolio website built with Next.js and shadcn/ui featuring responsive design and custom animations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#ff6d00] text-white px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-[#ff8500] text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-[#ff9e00] text-white px-3 py-1 rounded-full text-sm">Tailwind</span>
                  </div>
                  <button className="w-full border-2 border-[#5a189a] text-[#5a189a] hover:bg-[#5a189a] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#ff6d00]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#ff8500]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#5a189a]">Task Manager App</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Full-stack productivity app with real-time updates, user authentication, and collaborative features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#ff8500] text-white px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-[#5a189a] text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-[#9d4edd] text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                  </div>
                  <button className="w-full border-2 border-[#5a189a] text-[#5a189a] hover:bg-[#5a189a] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#ff6d00]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#ff8500]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#5a189a]">Weather Dashboard</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Interactive weather app with beautiful visualizations, forecasts, and location-based services.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#ff9e00] text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-[#5a189a] text-white px-3 py-1 rounded-full text-sm">API Integration</span>
                    <span className="bg-[#240046] text-white px-3 py-1 rounded-full text-sm">Chart.js</span>
                  </div>
                  <button className="w-full border-2 border-[#5a189a] text-[#5a189a] hover:bg-[#5a189a] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <footer className="bg-gradient-to-r from-[#240046] to-[#5a189a] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and see what we can build together!
          </p>
          <button className="bg-gradient-to-r from-[#ff6d00] to-[#ff8500] hover:from-[#ff8500] hover:to-[#ff9e00] text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Get In Touch
          </button>
        </div>
      </footer>
    </div>
  );
}
