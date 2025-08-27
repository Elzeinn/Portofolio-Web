"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
              
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"

// Import data from external files
import { projects, Project } from "./data/projects"
import { skills } from "./data/skills"
import { navItems, contactInfo, aboutContent } from "./data/content"
import VideoModal from "./components/VideoModal"
import ProjectCard from "./components/ProjectCard"

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
              <h1 className="text-xl font-bold text-blue-400">Alam</h1>
              <p className="text-sm text-slate-400">FiveM Developer</p>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.href ? "text-blue-400" : "text-slate-300"
                  }`}
                >
                  {item.name}
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
              Alam
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
                    Hi, I'm <strong>Alam</strong>, a dedicated <strong>FiveM Developer</strong> with over <strong>3 years of intensive experience</strong> in creating, optimizing, and customizing immersive gameplay systems for GTA V roleplay servers. I specialize in both <strong>client-side</strong> and <strong>server-side</strong> scripting, delivering high-performance solutions with a focus on security, scalability, and exceptional user experience.
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
                  {aboutContent.stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-300">{stat.label}</span>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  ))}
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
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                      onVideoClick={openVideoModal}
                    />
                  ))}
                </div>
              </TabsContent>

              {["Framework", "UI/UX", "Gameplay"].map((category) => (
                <TabsContent key={category} value={category} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {projects
                      .filter((project) => project.category === category)
                      .map((project, index) => (
                        <ProjectCard
                          key={project.title}
                          project={project}
                          index={index}
                          onVideoClick={openVideoModal}
                        />
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                
                // Function to get badge color and style based on level
                const getLevelStyle = (level: string) => {
                  switch (level) {
                    case "Expert":
                      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    case "Advanced":
                      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
                    case "Intermediate":
                      return "bg-amber-500/20 text-amber-400 border-amber-500/30"
                    case "Beginner":
                      return "bg-slate-500/20 text-slate-400 border-slate-500/30"
                    default:
                      return "bg-slate-500/20 text-slate-400 border-slate-500/30"
                  }
                }

                const getIconColor = (color: string) => {
                  switch (color) {
                    case "blue": return "text-blue-400"
                    case "yellow": return "text-yellow-400"
                    case "cyan": return "text-cyan-400"
                    case "purple": return "text-purple-400"
                    case "green": return "text-green-400"
                    case "orange": return "text-orange-400"
                    case "red": return "text-red-400"
                    case "emerald": return "text-emerald-400"
                    case "pink": return "text-pink-400"
                    default: return "text-blue-400"
                  }
                }

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-800/50 border-slate-600 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg bg-slate-700/50 mr-3 group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`h-5 w-5 ${getIconColor(skill.color)}`} />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Badge 
                            variant="outline" 
                            className={`${getLevelStyle(skill.level)} font-medium`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
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
                    <span className="text-slate-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-slate-300">Discord: {contactInfo.discord}</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-slate-300">{contactInfo.github}</span>
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
            <p className="text-slate-400 text-sm">© 2024 Alam. All rights reserved.</p>
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
      <VideoModal 
        project={selectedProject} 
        isOpen={showVideoModal} 
        onClose={closeVideoModal} 
      />
    </div>
  )
}
