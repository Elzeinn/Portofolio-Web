import { useState } from "react"

interface VideoPlayerProps {
  src: string
  poster?: string
  title: string
  className?: string
}

export default function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoadStart = () => {
    setIsLoading(true)
    setHasError(false)
  }

  const handleCanPlay = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            <span className="text-sm text-slate-400">Loading video...</span>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="aspect-video bg-slate-800 flex items-center justify-center">
          <div className="text-center text-slate-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-sm">Video not available</p>
            <p className="text-xs text-slate-500 mt-1">Please add the video file to public/videos/</p>
          </div>
        </div>
      ) : (
        <video
          src={src}
          title={title}
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          poster={poster}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
