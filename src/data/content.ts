import { LucideIcon } from "lucide-react"

export interface Skill {
  name: string
  level: string
  icon: LucideIcon
  color: string
}

export interface NavItem {
  name: string
  href: string
}

export interface ContactInfo {
  email: string
  discord: string
  github: string
}

export const contactInfo: ContactInfo = {
  email: "alampojok1928@gmail.com",
  discord: "forelz",
  github: "github.com/Elzeinn"
}

export const navItems: NavItem[] = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" }
]

export const aboutContent = {
  title: "Passionate FiveM Developer",
  paragraphs: [
    "Hi, I'm <strong>Alam</strong>, a dedicated <strong>FiveM Developer</strong> with over <strong>3+ years of intensive experience</strong> in creating, optimizing, and customizing immersive gameplay systems for GTA V roleplay servers. I specialize in both <strong>client-side</strong> and <strong>server-side</strong> scripting, delivering high-performance solutions with a focus on security, scalability, and exceptional user experience.",
    "I'm highly proficient in popular FiveM frameworks including <strong>ESX</strong>, <strong>QBCore</strong>, and <strong>Qbox</strong>, with extensive expertise in seamlessly converting scripts between frameworks to meet unique server requirements. My technical arsenal includes advanced <strong>database optimization</strong>, <strong>performance monitoring</strong>, <strong>resource management</strong>, and <strong>anti-cheat integration</strong>.",
    "I'm always exploring better ways to build immersive RP systems and improve the overall experience for players and server owners alike.<br /><strong>Let's build something great together.</strong>"
  ],
  stats: [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Servers Worked With", value: "4+" },
    { label: "GitHub Repositories", value: "5+" }
  ]
}
