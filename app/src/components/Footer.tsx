import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0efe8', borderTop: '1px solid #d4c8b8' }}>
      <div className="container-simple py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <img src="/kmu-logo.png" alt="KMU" className="w-7 h-7 object-contain opacity-60" />
            <span className="text-xs" style={{ color: '#8a7a6a' }}>
              Kapasa Makasa University
            </span>
          </div>

          {/* Center */}
          <p className="text-xs text-center" style={{ color: '#8a7a6a' }}>
            &copy; {new Date().getFullYear()} Fildah Hamutibo. Made with{' '}
            <Heart className="w-3 h-3 inline" style={{ color: '#5a7d5a', fill: '#5a7d5a' }} />{' '}
            in Zambia.
          </p>

          {/* Right */}
          <p className="text-xs" style={{ color: '#8a7a6a' }}>
            Computer Science Student
          </p>
        </div>
      </div>
    </footer>
  )
}
