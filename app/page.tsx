"use client"

import { useState } from "react"
import Header from "./components/Header"
import FloatingProjectCard from "./components/FloatingProjectCard"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [projects] = useState([
    {
      title: "OpenSeek",
      description: "Avoid deepseek sensorship",
      technologies: ["Language", "OpenAI API", "DeepSeek API"],
      githubUrl: "https://openseek.vercel.app",
      liveUrl: "https://github.com/gigialc/openseek",
      color: "neon-orange"
    },
    {
      title: "Camo AI",
      description: "Protect your photos from deepfakes!",
      technologies: ["Photos", "Face", "AI"],
      githubUrl: "https://github.com/mariagorskikh/camo-ai",
      liveUrl: "https://mariagorskikh.github.io/camoai-landing/",
      color: "neon-pink"
    },
    {
      title: "Moodify",
      description: "Remix Youtube Music",
      technologies: ["Music", "Python", "Youtube"],
      githubUrl: "https://github.com/mariagorskikh/openmoodify",
      liveUrl: "https://moodify-vercel.vercel.app",
      color: "neon-blue"
    },
    {
      title: "Grantly",
      description: "Find grants for your research",
      technologies: ["Candid", "AI", "MongoDB"],
      githubUrl: "https://github.com/mariagorskikh/grandly-candid",
      liveUrl: "https://github.com/mariagorskikh/grandly-candid",
      color: "neon-green"
    }
  ])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="relative">
        <section className="container mx-auto px-4 py-16 text-center z-10 relative">
          <h1 className="text-4xl font-bold mb-4 text-neon-blue">
            welcome to <span className="text-neon-pink">my mind</span>
          </h1>
          <p className="text-xl mb-4">
            I like to build cool things
          </p>
        </section>

        <section className="fixed inset-0 z-0">
          <div className="container mx-auto px-4 py-16">
            {projects.map((project, index) => (
              <FloatingProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
