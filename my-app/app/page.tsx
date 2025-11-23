import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 dark:from-slate-900 dark:to-purple-900">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-orange-200/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#ff6d00] to-[#9d4edd] bg-clip-text text-transparent">
            Mason Greene
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#ff6d00] to-[#5a189a] hover:from-[#ff8500] hover:to-[#240046] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Me
            </Link>
            <ModeToggle />
          </div>
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
            Computer Science undergraduate with strong skills in Java, data structures, databases, and software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://github.com/GreeneMason"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#ff6d00] to-[#5a189a] hover:from-[#ff8500] hover:to-[#240046] text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf"
              download="Mason_Greene_Resume.pdf"
              className="border-2 border-[#5a189a] text-[#5a189a] hover:bg-[#5a189a] hover:text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-[#ff6d00] text-white px-4 py-2 rounded-full text-base font-medium">Java</span>
            <span className="bg-[#ff8500] text-white px-4 py-2 rounded-full text-base font-medium">Python</span>
            <span className="bg-[#ff9e00] text-white px-4 py-2 rounded-full text-base font-medium">JavaScript</span>
            <span className="bg-[#5a189a] text-white px-4 py-2 rounded-full text-base font-medium">SQL</span>
            <span className="bg-[#9d4edd] text-white px-4 py-2 rounded-full text-base font-medium">AWS</span>
            <span className="bg-[#240046] text-white px-4 py-2 rounded-full text-base font-medium">Next.js</span>
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
                  I'm a Computer Science undergraduate with strong skills in Java, data structures, databases, and software development. 
                  Experienced in building efficient, user-centered applications and collaborating in Agile environments.
                </p>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently seeking a software development internship to apply strong problem-solving and coding skills in a fast-paced tech environment.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#5a189a] mb-4">Languages</h3>
                    <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-300">
                      <li>Java & Python</li>
                      <li>JavaScript & HTML/CSS</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#5a189a] mb-4">Tools & Practices</h3>
                    <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-300">
                      <li>GitHub & Git Bash</li>
                      <li>AWS & Next.js</li>
                      <li>Agile & JUnit</li>
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
                  <h3 className="text-2xl font-semibold mb-4 text-[#5a189a]">ML UFC Predictor</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Used Python to create databases from 28 years of UFC events. Trained and evaluated multiple algorithms to identify the best-performing model.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#ff6d00] text-white px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-[#ff8500] text-white px-3 py-1 rounded-full text-sm">XGBoost</span>
                    <span className="bg-[#ff9e00] text-white px-3 py-1 rounded-full text-sm">Pandas</span>
                    <span className="bg-[#5a189a] text-white px-3 py-1 rounded-full text-sm">SQLite</span>
                  </div>
                  <button className="w-full border-2 border-[#5a189a] text-[#5a189a] hover:bg-[#5a189a] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#ff6d00]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#ff8500]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#5a189a]">Solar Investment Calculator</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Terminal app to calculate ROI for solar panel installs using AI-generated irradiance data for 150+ WA zipcodes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#ff8500] text-white px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-[#5a189a] text-white px-3 py-1 rounded-full text-sm">GitHub</span>
                    <span className="bg-[#9d4edd] text-white px-3 py-1 rounded-full text-sm">AI Data</span>
                  </div>
                  <button className="w-full border-2 border-[#5a189a] text-[#5a189a] hover:bg-[#5a189a] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#ff6d00]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#ff8500]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#5a189a]">Seed Suggestor</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Planting scheduler using HashMaps and ArrayLists with O(1) search capability. Optimized for Washington climate.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#ff9e00] text-white px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-[#5a189a] text-white px-3 py-1 rounded-full text-sm">Data Structures</span>
                    <span className="bg-[#240046] text-white px-3 py-1 rounded-full text-sm">Algorithms</span>
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
