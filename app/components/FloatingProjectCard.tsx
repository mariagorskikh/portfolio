"use client"

import { useEffect, useRef } from "react"
import ProjectCard from "./ProjectCard"

interface FloatingProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveUrl?: string
    color: string
  }
}

export default function FloatingProjectCard({ project }: FloatingProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    let x = Math.random() * (window.innerWidth - card.offsetWidth)
    let y = Math.random() * (window.innerHeight - card.offsetHeight)
    let vx = (Math.random() - 0.5) * 2
    let vy = (Math.random() - 0.5) * 2

    const animate = () => {
      if (!card) return

      x += vx
      y += vy

      if (x + card.offsetWidth > window.innerWidth || x < 0) vx = -vx
      if (y + card.offsetHeight > window.innerHeight || y < 0) vy = -vy

      card.style.transform = `translate(${x}px, ${y}px)`

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Clean up animation if component unmounts
    }
  }, [])

  return (
    <div ref={cardRef} className="absolute" style={{ width: "300px" }}>
      <ProjectCard {...project} />
    </div>
  )
}
