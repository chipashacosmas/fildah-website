import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  MessageSquare,
  User,
  AtSign,
  FileText,
  BookOpen,
} from 'lucide-react'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const sage = '#5a7d5a'
const forest = '#3d5c3d'
const brownLight = '#8a7a6a'
const sand = '#d4c8b8'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 3000)
  }

  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.contact-f', { opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: 'power3.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="container-simple" ref={containerRef}>
      {/* Header */}
      <section className="pt-12 pb-10">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/" className="text-xs hover:underline" style={{ color: brownLight }}>Home</Link>
          <span style={{ color: sand }}>/</span>
          <span className="text-xs font-medium" style={{ color: sage }}>Contact</span>
        </div>

        <h1 className="contact-f text-3xl md:text-4xl font-bold mb-3" style={{ color: forest }}>
          Let&apos;s <span style={{ color: sage }}>Talk</span>
        </h1>
        <p className="contact-f text-sm max-w-md leading-relaxed" style={{ color: brownLight }}>
          I would love to hear from you. Whether it is about a project, collaboration, or just to say hello.
        </p>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <div className="contact-f space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: forest }}>Get In Touch</h2>
              <p className="text-sm leading-relaxed" style={{ color: brownLight }}>
                I am open to collaboration, internships, and exciting projects. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <ContactItem icon={<Mail className="w-4 h-4" />} label="Email" value="fildah.hamutibo@student.kmu.ac.zm" href="mailto:fildah.hamutibo@student.kmu.ac.zm" />
              <ContactItem icon={<Phone className="w-4 h-4" />} label="Phone" value="+260 97X XXX XXX" href="tel:+26097XXXXXXX" />
              <ContactItem icon={<MapPin className="w-4 h-4" />} label="Location" value="Kapasa Makasa University, Chinsali, Zambia" />
              <ContactItem icon={<BookOpen className="w-4 h-4" />} label="Course" value="BSc Computer Science — 2nd Year" />
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: brownLight }}>
                Follow Me
              </p>
              <div className="flex gap-2.5">
                {[
                  { icon: <Github className="w-4 h-4" />, href: '#', label: 'GitHub' },
                  { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
                  { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: '#e8f0e8', color: sage }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="flex items-center gap-2.5 rounded-xl px-4 py-3"
              style={{ backgroundColor: '#e8f0e8' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium" style={{ color: forest }}>
                Available for projects & collaborations
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-f">
            {sent ? (
              <div className="card-simple flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e8f0e8' }}>
                  <CheckCircle className="w-7 h-7" style={{ color: sage }} />
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: forest }}>Message Sent!</h3>
                <p className="text-xs" style={{ color: brownLight }}>Thank you. I will reply soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card-simple space-y-5">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare className="w-4 h-4" style={{ color: sage }} />
                  <span className="text-sm font-medium" style={{ color: forest }}>Send a Message</span>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: brownLight }}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: sand }} />
                    <input name="name" type="text" required value={form.name} onChange={onChange}
                      className="input-simple pl-10" placeholder="Enter your name" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: brownLight }}>
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: sand }} />
                    <input name="email" type="email" required value={form.email} onChange={onChange}
                      className="input-simple pl-10" placeholder="your@email.com" />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: brownLight }}>
                    Subject
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: sand }} />
                    <input name="subject" type="text" required value={form.subject} onChange={onChange}
                      className="input-simple pl-10" placeholder="What is this about?" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: brownLight }}>
                    Message
                  </label>
                  <textarea name="message" required rows={4} value={form.message} onChange={onChange}
                    className="input-simple resize-none" placeholder="Write your message..." />
                </div>

                <button type="submit" className="btn-sage w-full justify-center">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-3 group">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#e8f0e8', color: sage }}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-medium tracking-wider uppercase mb-0.5" style={{ color: brownLight }}>{label}</p>
        <p className={`text-sm ${href ? 'group-hover:underline' : ''}`} style={{ color: forest }}>{value}</p>
      </div>
    </div>
  )
  return href ? <a href={href}>{inner}</a> : inner
}
