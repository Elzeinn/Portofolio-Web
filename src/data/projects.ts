export interface Project {
  title: string
  description: string
  tech: string[]
  features: string[]
  category: string
  videoUrl: string
  thumbnail: string
}

export const projects: Project[] = [
  {
    title: "Multicharacter System",
    description: "System Multicharacter for fivem server Include Loading Screen, Multicharacter UI, and Spawn System",
    tech: ["Lua", "React", "Tailwind CSS", "QBOX"],
    features: ["Custom UI", "Track Creator", "MMR System"],
    category: "Framework",
    videoUrl: "/videos/multichar.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/multichar.png"
  },

]
