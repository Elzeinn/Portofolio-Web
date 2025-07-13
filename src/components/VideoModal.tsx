import { Badge } from "@/components/ui/badge"
import { Project } from "../data/projects"
import VideoPlayer from "./VideoPlayer"

interface VideoModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ project, isOpen, onClose }: VideoModalProps) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-slate-400 text-sm mt-1">Project Demo Video</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <VideoPlayer 
              src={project.videoUrl}
              poster={project.thumbnail}
              title={project.title}
              className="w-full h-full"
            />
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
           
          </div>
          
          <div className="mt-6">
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
