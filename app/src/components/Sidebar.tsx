import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import {
  Home,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Shield,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home', icon: <Home className="w-4.5 h-4.5" /> },
  { path: '/portfolio', label: 'Portfolio', icon: <FolderOpen className="w-4.5 h-4.5" /> },
  { path: '/contact', label: 'Contact', icon: <Mail className="w-4.5 h-4.5" /> },
]

const socialLinks = [
  { icon: <Github className="w-4 h-4" />, href: 'https://github.com/chipashacosmas', label: 'GitHub' },
  { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/chipashacosmas', label: 'LinkedIn' },
  { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com/chipashacosmas', label: 'Twitter' },
]

export default function Sidebar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#f6f3ee]/95 backdrop-blur-md border-b border-[#ddd8d0]">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <img src="/kmu-logo.png" alt="KMU" className="w-8 h-8 object-contain" />
            <span className="font-display font-bold text-sm text-[#1a1a2e]">
              Chipasha Cosmas
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-[#edeae4] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <nav className="px-4 pb-4 border-t border-[#ddd8d0]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#c4715a] bg-[#edeae4]'
                    : 'text-[#8a8a95]'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-[#ddd8d0] px-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8a8a95] hover:text-[#c4715a] transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-[260px] bg-[#f6f3ee] border-r border-[#ddd8d0] z-40">
        {/* Logo Area */}
        <div className="p-6 pb-4">
          <Link to="/" className="flex items-center gap-3 mb-1">
            <img
              src="/kmu-logo.png"
              alt="Kapasa Makasa University Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="font-display font-bold text-sm text-[#1a1a2e] leading-tight">
                Chipasha Cosmas
              </p>
              <p className="text-[10px] text-[#8a8a95] font-mono tracking-wider uppercase mt-0.5">
                Cybersecurity
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.icon}
              <span>{link.label}</span>
              {location.pathname === link.path && (
                <ChevronRight className="w-3.5 h-3.5 ml-auto" />
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-[#ddd8d0]">
          {/* Availability */}
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#6b8f71]" />
            <span className="text-[11px] text-[#6b8f71] font-medium">
              Available for work
            </span>
          </div>

          {/* Email */}
          <a
            href="mailto:chipasha.cosmas@student.kmu.ac.zm"
            className="text-[11px] text-[#8a8a95] hover:text-[#c4715a] transition-colors block mb-4 break-all"
          >
            chipasha.cosmas@student.kmu.ac.zm
          </a>

          {/* Socials */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#edeae4] flex items-center justify-center text-[#8a8a95] hover:bg-[#c4715a] hover:text-white transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
