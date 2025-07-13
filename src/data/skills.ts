import { Code, Database, Gamepad2, Globe, Github, Server, Shield, Cpu } from "lucide-react"
import { Skill } from "./content"

export const skills: Skill[] = [
  { name: "Lua Scripting", level: "Expert", icon: Code, color: "blue" },
  { name: "JavaScript/TypeScript", level: "Intermediate", icon: Code, color: "yellow" },
  { name: "React & UI Development", level: "Intermediate", icon: Globe, color: "cyan" },
  { name: "FiveM Framework (ESX/QBCore/QBOX)", level: "Expert", icon: Server, color: "green" },
  { name: "MySQL", level: "Intermediate", icon: Database, color: "purple" },
  { name: "Github", level: "Intermediate", icon: Github, color: "orange" },
  { name: "Performance Optimization", level: "Intermediate", icon: Cpu, color: "red" },
  { name: "Server Security", level: "Intermediate", icon: Shield, color: "emerald" },

]
