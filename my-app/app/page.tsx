import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f5f4] to-[#e0e0e0] dark:from-[#010101] dark:to-[#484948]">
      {/* Header Navigation */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-[#01c953]/20 rounded-full px-8 py-4 shadow-2xl flex items-center justify-between w-full max-w-3xl">
          <div className="text-xl font-bold bg-gradient-to-r from-[#01c953] to-[#69df9b] bg-clip-text text-transparent">
            Mason Greene
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#01c953] to-[#69df9b] hover:from-[#69df9b] hover:to-[#01c953] text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm">
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
            <span className="bg-gradient-to-r from-[#01c953] via-[#34d376] to-[#69df9b] bg-clip-text text-transparent drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)] dark:drop-shadow-none">
              Full-Stack
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#01c953] to-[#69df9b] bg-clip-text text-transparent drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] dark:drop-shadow-none">
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
              className="border-2 border-[#01c953] text-[#01c953] hover:bg-[#01c953] hover:text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf"
              download="Mason_Greene_Resume.pdf"
              className="border-2 border-[#01c953] text-[#01c953] hover:bg-[#01c953] hover:text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-[#01c953] text-white px-4 py-2 rounded-full text-base font-medium">Java</span>
            <span className="bg-[#69df9b] text-white px-4 py-2 rounded-full text-base font-medium">Python</span>
            <span className="bg-[#69df9b] text-white px-4 py-2 rounded-full text-base font-medium">JavaScript</span>
            <span className="bg-[#484948] text-white px-4 py-2 rounded-full text-base font-medium">SQL</span>
            <span className="bg-[#69df9b] text-white px-4 py-2 rounded-full text-base font-medium">AWS</span>
            <span className="bg-[#010101] text-white px-4 py-2 rounded-full text-base font-medium">Next.js</span>
          </div>
        </div>
      </section>

      {/* About Section - Full Width */}
      <section className="min-h-screen flex items-center px-4 py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#01c953] to-[#69df9b] bg-clip-text text-transparent">About Me</h2>
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
                    <h3 className="text-2xl font-bold text-[#01c953] mb-4">Languages</h3>
                    <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-300">
                      <li>Java & Python</li>
                      <li>JavaScript & HTML/CSS</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#01c953] mb-4">Tools & Practices</h3>
                    <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-300">
                      <li>GitHub & Git Bash</li>
                      <li>AWS & Next.js</li>
                      <li>Agile & JUnit</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-[#01c953] via-[#34d376] to-[#69df9b] rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
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
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#01c953] to-[#69df9b] bg-clip-text text-transparent">Featured Projects</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#01c953]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#69df9b]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#01c953]">ML UFC Predictor</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Used Python to create databases from 28 years of UFC events. Trained and evaluated multiple algorithms to identify the best-performing model.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#01c953] text-white px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-[#69df9b] text-white px-3 py-1 rounded-full text-sm">XGBoost</span>
                    <span className="bg-[#69df9b] text-white px-3 py-1 rounded-full text-sm">Pandas</span>
                    <span className="bg-[#484948] text-white px-3 py-1 rounded-full text-sm">SQLite</span>
                  </div>
                  <a href="https://github.com/GreeneMason/cs_330" target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-[#01c953] text-[#01c953] hover:bg-[#01c953] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#01c953]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#69df9b]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#01c953]">Solar Investment Calculator</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Terminal app to calculate ROI for solar panel installs using AI-generated irradiance data for 150+ WA zipcodes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#69df9b] text-white px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-[#484948] text-white px-3 py-1 rounded-full text-sm">GitHub</span>
                    <span className="bg-[#69df9b] text-white px-3 py-1 rounded-full text-sm">AI Data</span>
                  </div>
                  <a href="https://github.com/GreeneMason/finals-SolarCalc" target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-[#01c953] text-[#01c953] hover:bg-[#01c953] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-[#01c953]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#69df9b]/40 hover:transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#01c953]">Seed Suggestor</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    Planting scheduler using HashMaps and ArrayLists with O(1) search capability. Optimized for Washington climate.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#69df9b] text-white px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-[#484948] text-white px-3 py-1 rounded-full text-sm">Data Structures</span>
                    <span className="bg-[#010101] text-white px-3 py-1 rounded-full text-sm">Algorithms</span>
                  </div>
                  <button className="w-full border-2 border-[#01c953] text-[#01c953] hover:bg-[#01c953] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <footer className="bg-gradient-to-r from-[#010101] to-[#484948] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl text-[#f4f5f4] mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and see what we can build together!
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-[#01c953] to-[#69df9b] hover:from-[#69df9b] hover:to-[#01c953] text-white font-semibold text-xl px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
            Get In Touch
          </Link>
        </div>
      </footer>
    </div>
  );
}
