import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f5f4] to-[#e0e0e0] dark:from-[#010101] dark:to-[#484948] py-20 px-4 flex items-center justify-center relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="container mx-auto max-w-2xl text-center">
        <div className="mb-12 flex justify-center">
          <Link href="/" className="text-[#01c953] hover:text-[#010101] dark:hover:text-white font-semibold flex items-center gap-2 transition-colors text-lg">
            ← Back to Home
          </Link>
        </div>
        
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#01c953] to-[#69df9b] bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto">
              CS Major | Jr. Developer | AI/ML Enthusiast | Driven to Build Ethical & Sustainable Technology
            </p>
          </div>

          <div className="flex flex-col gap-8 items-center">
            
            <div className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm w-full max-w-md hover:bg-[#01c953] dark:hover:bg-[#01c953] transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#f4f5f4] dark:bg-slate-800 group-hover:bg-white flex items-center justify-center text-[#01c953] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-white mb-1 transition-colors">Email</h3>
                <a href="mailto:masonmgreene@gmail.com" className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors">
                  masonmgreene@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm w-full max-w-md hover:bg-[#01c953] dark:hover:bg-[#01c953] transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#f4f5f4] dark:bg-slate-800 group-hover:bg-white flex items-center justify-center text-[#01c953] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 5 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-white mb-1 transition-colors">GitHub</h3>
                <a href="https://github.com/GreeneMason" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors">
                  github.com/GreeneMason
                </a>
              </div>
            </div>

            <div className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm w-full max-w-md hover:bg-[#01c953] dark:hover:bg-[#01c953] transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#f4f5f4] dark:bg-slate-800 group-hover:bg-white flex items-center justify-center text-[#01c953] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-white mb-1 transition-colors">LinkedIn</h3>
                <a href="https://linkedin.com/in/mason-greene" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors">
                  linkedin.com/in/mason-greene
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
