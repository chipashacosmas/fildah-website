import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BookOpen,
  CookingPot,
  Music,
  Camera,
  GraduationCap,
  MapPin,
  Calendar,
  ArrowRight,
  Code,
  Layout,
} from 'lucide-react'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const sage = '#5a7d5a'
const forest = '#3d5c3d'
const brown = '#5c4a3d'
const brownLight = '#8a7a6a'
const sand = '#d4c8b8'
const sageLight = '#e8f0e8'
const cream = '#faf9f6'

type ColorScheme = {
  bg: string
  text: string
}

function getHobbyColors(i: number): ColorScheme {
  const colors: ColorScheme[] = [
    { bg: '#e8f0e8', text: '#5a7d5a' },
    { bg: '#f0e8e0', text: '#8a6a5a' },
    { bg: '#e8e8f0', text: '#6a6a8a' },
    { bg: '#f0e8e8', text: '#8a5a6a' },
  ]
  return colors[i % colors.length]
}

/* ═══════════════════════════════════════════════
   HOME — Fildah Hamutibo
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HobbiesSection />
      <EducationSection />
      <Footer />
    </div>
  )
}

/* ─── HERO ─── */
function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-f', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', stagger: 0.12 })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="container-simple py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="order-2 md:order-1">
          <div className="hero-f flex items-center gap-2 mb-5">
            <span className="badge-simple">
              <Calendar className="w-3 h-3" /> 2nd Year Student
            </span>
          </div>

          <h1 className="hero-f text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: forest }}>
            Hi, I am <br />
            <span style={{ color: sage }}>Fildah Hamutibo</span>
          </h1>

          <p className="hero-f text-base mb-2" style={{ color: brown, fontWeight: 500 }}>
            Computer Science &middot; Kapasa Makasa University
          </p>

          <p className="hero-f text-sm leading-relaxed mb-8 max-w-md" style={{ color: brownLight }}>
            I am a second-year Computer Science student passionate about software development,
            data management, and creating technology that makes a difference. I love learning
            new programming languages and building projects that solve real problems.
          </p>

          <div className="hero-f flex flex-wrap gap-3">
            <Link to="/portfolio" className="btn-sage text-sm">
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline-sage text-sm">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="hero-f order-1 md:order-2">
          <div className="relative">
            <img
              src="/fildah-photo.jpg"
              alt="Fildah Hamutibo - University Student"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div
              className="absolute -bottom-4 -right-2 md:-right-4 rounded-xl px-4 py-3 shadow-md"
              style={{ backgroundColor: cream, border: `1px solid ${sand}` }}
            >
              <p className="text-[10px] font-medium" style={{ color: brownLight }}>STUDENT ID</p>
              <p className="text-sm font-bold" style={{ color: forest }}>KMU-CSC-2027</p>
              <p className="text-[10px]" style={{ color: sage }}>Year 2 &mdash; Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ABOUT ─── */
function AboutSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-f', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} style={{ backgroundColor: sageLight }}>
      <div className="container-simple py-16 md:py-20">
        <p className="about-f text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: sage }}>
          About Me
        </p>
        <h2 className="about-f text-3xl md:text-4xl font-bold mb-8" style={{ color: forest }}>
          A little bit about who I am
        </h2>

        <div className="about-f grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <p className="text-sm leading-relaxed" style={{ color: brown }}>
            I am Fildah Hamutibo, currently pursuing a Bachelor of Science in Computer Science at
            <strong> Kapasa Makasa University</strong> in Chinsali, Zambia. I am in my second year
            and have developed a strong foundation in programming, database systems, and web development.
            I am excited about the endless possibilities that technology offers.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: brown }}>
            My goal is to become a skilled software developer who builds applications that improve
            people&apos;s lives. I believe technology should be accessible and helpful to everyone,
            especially in our communities. When I am not coding, you will find me reading, cooking,
            dancing, or exploring photography.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="about-f flex flex-wrap gap-3">
          {[
            { icon: <Calendar className="w-3 h-3" />, label: '2nd Year' },
            { icon: <Code className="w-3 h-3" />, label: 'Computer Science' },
            { icon: <MapPin className="w-3 h-3" />, label: 'Zambia' },
            { icon: <Layout className="w-3 h-3" />, label: 'Software Developer' },
          ].map((f, i) => (
            <span key={i} className="badge-simple">
              {f.icon} {f.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── HOBBIES ─── */
function HobbiesSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hobby-f', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const hobbies = [
    {
      name: 'Reading',
      desc: 'I love getting lost in books. From tech blogs to novels, reading expands my mind and keeps me inspired.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      name: 'Cooking',
      desc: 'Experimenting with recipes and creating delicious meals for family and friends is my happy place.',
      icon: <CookingPot className="w-6 h-6" />,
    },
    {
      name: 'Dancing',
      desc: 'Music and movement keep me energised. I enjoy both traditional and modern dance styles.',
      icon: <Music className="w-6 h-6" />,
    },
    {
      name: 'Photography',
      desc: 'Capturing moments and beautiful scenery through my lens. Nature and portraits are my favourite subjects.',
      icon: <Camera className="w-6 h-6" />,
    },
  ]

  return (
    <section ref={ref} className="container-simple py-16 md:py-20">
      <div className="text-center mb-10">
        <p className="hobby-f text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: sage }}>
          My Passions
        </p>
        <h2 className="hobby-f text-3xl font-bold" style={{ color: forest }}>
          Things I Love to Do
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {hobbies.map((h, i) => {
          const c = getHobbyColors(i)
          return (
            <div
              key={h.name}
              className="hobby-f card-simple text-center p-6"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: c.bg, color: c.text }}
              >
                {h.icon}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: forest }}>
                {h.name}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: brownLight }}>
                {h.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ─── EDUCATION ─── */
function EducationSection() {
  return (
    <section style={{ backgroundColor: forest }}>
      <div className="container-simple py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5" style={{ color: sage }} />
              <span className="text-[11px] font-medium tracking-widest uppercase" style={{ color: sand }}>
                Education
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Kapasa Makasa University
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: sand }}>
              Studying Computer Science with focus on software engineering,
              database systems, and web technologies. Building a strong
              foundation for a career in tech.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Degree', value: 'BSc Computer Science' },
              { label: 'Year', value: '2nd Year (2024-2027)' },
              { label: 'Focus', value: 'Software & Databases' },
              { label: 'Location', value: 'Chinsali, Zambia' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-[10px] font-medium tracking-wider uppercase mb-1.5" style={{ color: sand }}>
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
