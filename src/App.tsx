"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
              
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Github, Mail, Download, Code, Database, Gamepad2, Globe, MessageSquare, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"

interface Project {
  title: string
  description: string
  tech: string[]
  features: string[]
  category: string
  videoUrl: string
  thumbnail: string
}

export default function FiveMDeveloperCV() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "Lua", level: 95, icon: Code },
    { name: "JavaScript/TypeScript", level: 90, icon: Code },
    { name: "React", level: 85, icon: Globe },
    { name: "Three.js", level: 80, icon: Gamepad2 },
    { name: "SQL/MySQL", level: 85, icon: Database },
    { name: "Git/GitHub", level: 90, icon: Github },
  ]

  const projects = [
    {
      title: "Racing System",
      description: "System racing for fivem server with custom UI and dui system",
      tech: ["Lua", "React", "Tailwind CSS"],
      features: ["Custom UI", "Track Creator", "MMR System"],
      category: "Framework",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ganti dengan URL video YouTube Anda
      thumbnail: "/api/placeholder/600/400"
    },
    {
      title: "Banking System",
      description: "Modern banking system with transaction history and security features",
      tech: ["Lua", "React", "MySQL", "QBCore"],
      features: ["Account Management", "Transfer System", "Transaction History", "Security Logs"],
      category: "Framework",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ganti dengan URL video YouTube Anda
      thumbnail: "/api/placeholder/600/400"
    },
    {
      title: "Job Management UI",
      description: "Comprehensive job system with progression and rewards",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Job Progression", "Reward System", "Statistics Dashboard"],
      category: "UI/UX",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ganti dengan URL video YouTube Anda
      thumbnail: "/api/placeholder/600/400"
    },
    {
      title: "Gang Territory System",
      description: "Territory control system with real-time battles and management",
      tech: ["Lua", "React", "WebSocket", "MySQL"],
      features: ["Territory Control", "Real-time Battles", "Gang Management", "Statistics"],
      category: "Gameplay",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ganti dengan URL video YouTube Anda
      thumbnail: "/api/placeholder/600/400"
    },
  ]

  const openVideoModal = (project: Project) => {
    setSelectedProject(project)
    setShowVideoModal(true)
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <h1 className="text-xl font-bold text-blue-400">Elzein</h1>
              <p className="text-sm text-slate-400">FiveM Developer</p>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : "text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Elzein
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">FiveM Developer</h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Building immersive GTA V experiences with Lua, React, and creativity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Passionate FiveM Developer</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Hi, I'm <strong>Elzein</strong>, a dedicated <strong>FiveM Developer</strong> with over <strong>2 years of intensive experience</strong> in creating, optimizing, and customizing immersive gameplay systems for GTA V roleplay servers. I specialize in both <strong>client-side</strong> and <strong>server-side</strong> scripting, delivering high-performance solutions with a focus on security, scalability, and exceptional user experience.
                  </p>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    I'm highly proficient in popular FiveM frameworks including <strong>ESX</strong>, <strong>QBCore</strong>, and <strong>Qbox</strong>, with extensive expertise in seamlessly converting scripts between frameworks to meet unique server requirements. My technical arsenal includes advanced <strong>database optimization</strong>, <strong>performance monitoring</strong>, <strong>resource management</strong>, and <strong>anti-cheat integration</strong>.
                  </p>


                  <p className="text-slate-300 leading-relaxed">
                    I’m always exploring better ways to build immersive RP systems and improve the overall experience for players and server owners alike.<br />
                    <strong>Let’s build something great together.</strong>
                  </p>
              </div>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-blue-400">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Years of Experience</span>
                    <span className="text-white font-semibold">2+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Projects Completed</span>
                    <span className="text-white font-semibold">10+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Servers Worked With</span>
                    <span className="text-white font-semibold">4+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">GitHub Repositories</span>
                    <span className="text-white font-semibold">5+</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Featured Projects</h2>

            <Tabs defaultValue="all" className="w-full">
       

              <TabsContent value="all" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
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
                              onClick={() => openVideoModal(project)}
                              className="flex items-center text-slate-400 hover:text-blue-400 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              <span className="text-xs">Watch Demo</span>
                            </button>
                          </div>
                          
                          {/* Video Thumbnail */}
                          <div 
                            className="relative mt-4 cursor-pointer rounded-lg overflow-hidden bg-slate-700/50 group/video"
                            onClick={() => openVideoModal(project)}
                          >
                            <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center relative">
                              <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center group-hover/video:bg-blue-400 transition-colors">
                                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-slate-300 text-sm font-medium">Click to Watch Demo</div>
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
                            <div>
                              <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                              <ul className="text-sm text-slate-300 space-y-1">
                                {project.features.map((feature) => (
                                  <li key={feature} className="flex items-center">
                                    <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {["Framework", "UI/UX", "Gameplay"].map((category) => (
                <TabsContent key={category} value={category} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {projects
                      .filter((project) => project.category === category)
                      .map((project, index) => (
                        <motion.div
                          key={project.title}
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
                                  onClick={() => openVideoModal(project)}
                                  className="flex items-center text-slate-400 hover:text-blue-400 transition-colors"
                                >
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Watch Demo</span>
                                </button>
                              </div>
                              
                              {/* Video Thumbnail */}
                              <div 
                                className="relative mt-4 cursor-pointer rounded-lg overflow-hidden bg-slate-700/50 group/video"
                                onClick={() => openVideoModal(project)}
                              >
                                <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center relative">
                                  <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center group-hover/video:bg-blue-400 transition-colors">
                                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="text-slate-300 text-sm font-medium">Click to Watch Demo</div>
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
                                <div>
                                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                                  <ul className="text-sm text-slate-300 space-y-1">
                                    {project.features.map((feature) => (
                                      <li key={feature} className="flex items-center">
                                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-700/50 border-slate-600">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Icon className="h-6 w-6 text-blue-400 mr-3" />
                          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                          <span className="ml-auto text-blue-400 font-semibold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Let's Work Together</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you need a custom FiveM
                  script, UI development, or consultation on your roleplay server, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-slate-300">alex.rodriguez@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-slate-300">Discord: AlexDev#1234</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-slate-300">github.com/alexrodriguez</span>
                  </div>
                </div>
              </div>

              <Card className="bg-slate-800/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-blue-400">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">© 2024 Elzein. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideoModal && selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-white">{selectedProject.title}</h3>
                <p className="text-slate-400 text-sm mt-1">Project Demo Video</p>
              </div>
              <button
                onClick={closeVideoModal}
                className="text-slate-400 hover:text-white transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {selectedProject.features.map((feature: string) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
