import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  color: string
}

export default function ProjectCard({ title, description, technologies, githubUrl, liveUrl, color }: ProjectCardProps) {
  return (
    <Card className={`bg-gray-800 border-2 border-${color} rounded-2xl 
      transition-all duration-500
      shadow-lg shadow-${color}/20 hover:shadow-${color}/40
      animate-pulse-slow`}>
      <CardHeader className="rounded-t-2xl">
        <CardTitle className={`text-${color}`}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className={`bg-gray-700 text-${color} rounded-lg
                transition-shadow duration-300
                shadow-sm shadow-${color}/10`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className={`border-${color} hover:bg-${color}/10 
                rounded-xl transition-all duration-300
                shadow-sm hover:shadow-md hover:shadow-${color}/30
                text-${color} hover:text-${color}`}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className={`border-${color} hover:bg-${color}/10
                  rounded-xl transition-all duration-300
                  shadow-sm hover:shadow-md hover:shadow-${color}/30
                  text-${color} hover:text-${color}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
