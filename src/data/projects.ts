export interface Project {
  title: string
  description: string
  tech: string[]

  category: string
  videoUrl: string
  thumbnail: string
}

export const projects: Project[] = [
  {
    title: "Multicharacter System",
    description: "System Multicharacter for fivem server Include Loading Screen, Multicharacter UI, and Spawn System",
    
    tech: ["Lua", "React", "Tailwind CSS", "QBOX"],

    category: "Custom",
    videoUrl: "/videos/multichar.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/multichar.png"
  },
  {
    title: "Devtool System",
    description: "Project Devtool from 17 Movement Script, this project is a tool for developers to help them in development",
    tech: ["Lua", "React", "CSS", "STANDALONE"],
    category: "Custom",
    videoUrl: "/videos/devtool.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/devtool.png"
  },
  {
    title: "Billing System",
    description: "Billing System form fivem server, ",
    tech: ["Lua", "React", "Tailwind CSS", "QBOX", "MySQL"],
    category: "Custom",
    videoUrl: "/videos/billing.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/billing.png"
  },
  {
    title: "Racing System",
    description: "Racing System for fivem server, this project is a racing system with UI , Leaderboard, Club, Mmr System, and more",
    tech: ["Lua", "React", "Tailwind CSS", "Standalone", "Shadcn UI", "More"],
    category: "Custom",
    videoUrl: "/videos/racing.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/racing.png"
  },

]
