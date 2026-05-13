import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Code,
  Database,
  Layout,
  Globe,
  Smartphone,
  BarChart3,
  Wifi,
  FileCode,
  Layers,
  Cpu,
  Monitor,
  Star,
} from 'lucide-react'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const sage = '#5a7d5a'
const forest = '#3d5c3d'
const brownLight = '#8a7a6a'

const projects = [
  {
    title: 'Student Grade Management System',
    desc: 'Built a desktop application that allows lecturers to input, track, and manage student grades. Features include GPA calculation, transcript generation, and grade analytics dashboard.',
    skills: ['Java', 'MySQL', 'JavaFX', 'JUnit'],
    icon: <BarChart3 className="w-5 h-5" />,
    type: 'Application',
    color: '#5a7d5a',
  },
  {
    title: 'Personal Portfolio Website',
    desc: 'Designed and developed a responsive personal website using HTML, CSS, and JavaScript. Implemented smooth scroll animations and a mobile-friendly layout.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    icon: <Layout className="w-5 h-5" />,
    type: 'Web',
    color: '#6a7d9a',
  },
  {
    title: 'Library Database System',
    desc: 'Created a relational database for managing a university library. Includes tables for books, borrowers, loans, and fines with complex SQL queries and reporting.',
    skills: ['SQL', 'PostgreSQL', 'ER Diagrams', 'Normalization'],
    icon: <Database className="w-5 h-5" />,
    type: 'Database',
    color: '#8a7d5a',
  },
  {
    title: 'Weather Forecast App',
    desc: 'Developed a simple weather application that fetches real-time data from a public API. Displays temperature, humidity, and forecasts with a clean user interface.',
    skills: ['Python', 'API', 'Tkinter', 'JSON'],
    icon: <Globe className="w-5 h-5" />,
    type: 'Application',
    color: '#5a7d5a',
  },
  {
    title: 'Calculator with History',
    desc: 'Built a feature-rich calculator that stores calculation history, supports scientific operations, and has a clean graphical interface with keyboard shortcuts.',
    skills: ['C#', '.NET', 'WinForms', 'OOP'],
    icon: <Code className="w-5 h-5" />,
    type: 'Application',
    color: '#8a6a7a',
  },
  {
    title: 'To-Do List Mobile App',
    desc: 'Created a task management app with features like categories, due dates, reminders, and priority levels. Designed with user experience as the top priority.',
    skills: ['React Native', 'Firebase', 'UI/UX'],
    icon: <Smartphone className="w-5 h-5" />,
    type: 'Mobile',
    color: '#6a8a7a',
  },
  {
    title: 'Network Configuration Lab',
    desc: 'Set up and configured a small office network using Cisco Packet Tracer. Implemented DHCP, DNS, VLANs, and basic firewall rules for secure communication.',
    skills: ['Cisco PT', 'DHCP', 'VLAN', 'Networking'],
    icon: <Wifi className="w-5 h-5" />,
    type: 'Networking',
    color: '#7a6a8a',
  },
  {
    title: 'File Encryption Tool',
    desc: 'Developed a command-line tool that encrypts and decrypts files using AES algorithm. Supports password-based key generation and secure file handling.',
    skills: ['Python', 'Cryptography', 'AES', 'CLI'],
    icon: <FileCode className="w-5 h-5" />,
    type: 'Security',
    color: '#7a8a6a',
  },
  {
    title: 'E-Commerce Frontend',
    desc: 'Built the frontend for an online store with product listings, shopping cart, and checkout flow. Focused on responsive design and smooth user interactions.',
    skills: ['React', 'Tailwind', 'Figma', 'REST'],
    icon: <Layers className="w-5 h-5" />,
    type: 'Web',
    color: '#8a7a5a',
  },
]

export default function Portfolio() {
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.port-f', {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from('.port-card-f', {
        opacity: 0, y: 40, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="container-simple">
      {/* Header */}
      <section className="pt-12 pb-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs" style={{ color: brownLight }}>Home</span>
          <span style={{ color: '#d4c8b8' }}>/</span>
          <span className="text-xs font-medium" style={{ color: sage }}>Portfolio</span>
        </div>

        <div ref={headingRef}>
          <h1 className="port-f text-3xl md:text-4xl font-bold mb-3" style={{ color: forest }}>
            My Academic <span style={{ color: sage }}>Projects</span>
          </h1>
          <p className="port-f text-sm max-w-lg leading-relaxed" style={{ color: brownLight }}>
            Projects I have worked on during my Computer Science studies at Kapasa Makasa University.
            Each one helped me grow as a developer.
          </p>

          {/* Stats */}
          <div className="port-f grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              { value: '09', label: 'Projects', icon: <Monitor className="w-4 h-4" /> },
              { value: '20+', label: 'Skills', icon: <Cpu className="w-4 h-4" /> },
              { value: '2nd', label: 'Year', icon: <Star className="w-4 h-4" /> },
              { value: '100%', label: 'Effort', icon: <Code className="w-4 h-4" /> },
            ].map((s) => (
              <div key={s.label} className="card-simple text-center py-4">
                <div className="flex justify-center mb-1" style={{ color: sage }}>{s.icon}</div>
                <p className="text-2xl font-bold" style={{ color: forest }}>{s.value}</p>
                <p className="text-[11px]" style={{ color: brownLight }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="port-card-f card-simple"
            >
              {/* Color bar */}
              <div className="h-1 rounded-full mb-4" style={{ backgroundColor: p.color }} />

              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  {p.icon}
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${p.color}10`, color: p.color }}
                >
                  {p.type}
                </span>
              </div>

              <h3 className="font-semibold text-base mb-2" style={{ color: forest }}>
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: brownLight }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: '1px solid #f0efe8' }}>
                {p.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: '#f0efe8', color: brownLight }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
