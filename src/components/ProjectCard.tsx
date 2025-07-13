import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  onVideoClick: (project: Project) => void
}

export default function ProjectCard({ project, index, onVideoClick }: ProjectCardProps) {
          console.log(project)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-slate-800/50 border-slate-600 hover:border-blue-500/50 transition-colors h-full group">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="border-blue-500 text-blue-400">
              {project.category}
            </Badge>
            <button
              onClick={() => onVideoClick(project)}
              className="flex items-center text-slate-400 hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              <span className="text-xs">Watch Demo</span>
            </button>
          </div>
          
          {/* Video Thumbnail */}
          <div 
            className="relative mt-4 cursor-pointer rounded-lg overflow-hidden bg-slate-700/50 group/video"
            onClick={() => onVideoClick(project)}
          >
            <div className="aspect-video relative">
                
              <img 
          
               src={project.thumbnail} 
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback jika thumbnail tidak ditemukan
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.classList.add('bg-gradient-to-br', 'from-slate-600', 'to-slate-700', 'flex', 'items-center', 'justify-center');
                  target.parentElement!.innerHTML = '<div class="text-slate-300 text-sm font-medium">Click to Watch Demo</div>';
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center group-hover/video:bg-blue-400 transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <CardTitle className="text-white mt-4">{project.title}</CardTitle>
          <CardDescription className="text-slate-300">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
           
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
