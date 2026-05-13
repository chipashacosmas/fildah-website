import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: 'rgba(250,249,246,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #d4c8b8' }}>
      <div className="container-simple flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/kmu-logo.png" alt="KMU" className="w-8 h-8 object-contain" />
          <span className="text-sm font-semibold" style={{ color: '#3d5c3d' }}>
            Fildah Hamutibo
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link-simple ${location.pathname === l.path ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-sage text-xs py-2 px-4">
            Say Hello
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#5c4a3d' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden container-simple pb-4 border-t" style={{ borderColor: '#d4c8b8' }}>
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: location.pathname === l.path ? '#5a7d5a' : '#8a7a6a',
                  backgroundColor: location.pathname === l.path ? '#e8f0e8' : 'transparent',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-sage text-xs py-2.5 justify-center mt-2" onClick={() => setOpen(false)}>
              Say Hello
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
