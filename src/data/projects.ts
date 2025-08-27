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
    description: "System Multicharacter for fivem server Include Loading Screen, Multicharacter UI, and Spawn System, Inspired 17 Mov And ZSX",
    
    tech: ["Lua", "React", "Tailwind CSS", "QBOX"],

    category: "Custom",
    videoUrl: "/videos/multichar.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/multichar.png"
  },
  {
    title: "Devtool System",
    description: "Project Devtool from 17 Movement Script, this project is a tool for developers to help them in development",
    tech: ["Lua", "React", "CSS","Three Js", "STANDALONE"],
    category: "Custom",
    videoUrl: "/videos/devtool.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/devtool.png"
  },
  {
    title: "Billing System",
    description: "Billing System form fivem server, custom script for my roleplay server ",
    tech: ["Lua", "React", "Tailwind CSS", "Shadcn UI", "QBOX", "MySQL"],
    category: "Custom",
    videoUrl: "/videos/billing.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/billing.png"
  },
  {
    title: "Racing System",
    description: "Racing System for fivem server, this project is a racing system with UI and Dui System , Leaderboard, Club, Mmr System, and more",
    tech: ["Lua", "React", "Tailwind CSS", "Typescripts", "Standalone", "Shadcn UI", "More"],
    category: "Custom",
    videoUrl: "/videos/racing.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/racing.png"
  },
  {
    title: "Job Selector",
    description: "Job Selector for fivem script and support esx/qb/qbox or standlone",
    tech: ["Lua", "HTML", "CSS", "Javascripts"],
    category: "Custom",
    videoUrl: "/videos/jobselector.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/jobselector.png"
  },
  {
    title: "Bus Job",
    description: "Bus Job for fivem script and support esx/qb/qbox or standlone",
    tech: ["Lua", "HTML", "CSS", "Javascripts"],
    category: "Custom",
    videoUrl: "/videos/busjob.mp4", // File MP4 di folder public/videos/
    thumbnail: "/videos/thumbnails/busjob.png"
  },

]
