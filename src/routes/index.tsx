import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const PHONE = '0750 449 650'
const PHONE_HREF = 'tel:+40750449650'
const WHATSAPP_HREF = 'https://wa.me/40750449650'
const EMAIL = 'inchirierimercedessl@gmail.com'
const CALENDLY_URL = 'https://calendly.com/inchirierimercedessl/30min'

const tagCalendlyBadge = () => {
  const badge = document.querySelector<HTMLElement>('.calendly-badge-widget')
  if (!badge) return
  badge.id = 'cta-calendly-badge'
  badge.dataset.trackingId = 'cta-calendly-badge'
  badge.dataset.trackingLocation = 'floating_badge'
}

const heroMain = { src: '/gallery/car-14.png', alt: 'Mercedes-Benz SL 280 cu artificii la nuntă' }

const eventImages = [
  { src: '/gallery/event-01.png', alt: 'Mercedes-Benz SL 280 pe drum de munte' },
  { src: '/gallery/event-02.png', alt: 'Mercedes-Benz SL 280 noapte în oraș' },
  { src: '/gallery/event-04.png', alt: 'Mercedes-Benz SL 280 apus' },
  { src: '/gallery/event-05.png', alt: 'Mercedes-Benz SL 280 la nuntă' },
  { src: '/gallery/event-06.png', alt: 'Mercedes-Benz SL 280 la palat' },
  { src: '/gallery/event-07.png', alt: 'Mercedes-Benz SL 280 corporate' },
  { src: '/gallery/event-08.png', alt: 'Mercedes-Benz SL 280 eveniment premium' },
  { src: '/gallery/event-11.png', alt: 'Mercedes-Benz SL 280 nunți și evenimente' },
  { src: '/gallery/event-12.png', alt: 'Mercedes-Benz SL 280 producție film' },
  { src: '/gallery/event-13.png', alt: 'Mercedes-Benz SL 280 ședință foto' },
  { src: '/gallery/event-14.png', alt: 'Mercedes-Benz SL 280 producție video' },
  { src: '/gallery/event-15.png', alt: 'Mercedes-Benz SL 280 producție studio' },
]

const galleryImages = [
  { src: '/gallery/car-01.jpg', alt: 'Mercedes-Benz SL 280 față', cls: 'g1', scene: true },
  { src: '/gallery/car-08.png', alt: 'Mercedes-Benz SL 280 interior', cls: 'g2', scene: false },
  { src: '/gallery/car-09.png', alt: 'Mercedes-Benz SL 280 detaliu', cls: 'g3', scene: false },
  { src: '/gallery/car-10.png', alt: 'Mercedes-Benz SL 280 lateral', cls: 'g4', scene: false },
  { src: '/gallery/car-11.png', alt: 'Mercedes-Benz SL 280 spate', cls: 'g5', scene: false },
  { src: '/gallery/car-13.png', alt: 'Mercedes-Benz SL 280 eveniment', cls: 'g6', scene: false },
  { src: '/gallery/car-14.png', alt: 'Mercedes-Benz SL 280 nuntă', cls: 'g7', scene: false },
  { src: '/gallery/car-15.png', alt: 'Mercedes-Benz SL 280 ședință foto', cls: 'g8', scene: false },
]

const extraGalleryImages = [
  { src: '/gallery/car-20.png', alt: 'Mercedes-Benz SL 280 detaliu 1' },
  { src: '/gallery/car-21.png', alt: 'Mercedes-Benz SL 280 detaliu 2' },
  { src: '/gallery/car-22.png', alt: 'Mercedes-Benz SL 280 detaliu 3' },
]

const galleryCarouselImages = [
  ...galleryImages.map(({ src, alt }) => ({ src, alt })),
  ...extraGalleryImages,
]

const allLightboxImages = [
  ...galleryCarouselImages,
  ...eventImages,
]

const useCases = [
  { label: 'Nunți premium', icon: RingsIcon },
  { label: 'Ședințe foto & video', icon: CameraIcon },
  { label: 'Producții & reclame', icon: FilmIcon },
  { label: 'Transport VIP', icon: StarIcon },
  { label: 'Evenimente corporate', icon: BriefcaseIcon },
]

const services = [
  {
    title: 'Șofer dedicat',
    desc: 'Prezentabil, punctual și discret — parte integrantă a experienței.',
    icon: WheelIcon,
  },
  {
    title: 'Mașină impecabilă',
    desc: 'Pregătită și verificată meticuloas înaintea fiecărui eveniment.',
    icon: ShieldIcon,
  },
  {
    title: 'Cadre cinematice',
    desc: 'Proporții perfecte pentru fotografie și producții video premium.',
    icon: ApertureIcon,
  },
  {
    title: 'Disponibilitate extinsă',
    desc: 'Zi sau seară, în Cluj-Napoca și împrejurimi.',
    icon: ClockIcon,
  },
]

const pricing = [
  { label: 'Pachet 4 ore', value: '1.200 lei' },
  { label: 'Oră suplimentară', value: '300 lei' },
  { label: 'Km incluși', value: '30 km' },
  { label: 'Km extra', value: '6 lei / km' },
]

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text font-body">
          Acest site folosește cookie-uri pentru a asigura funcționalitatea optimă și pentru a îmbunătăți experiența de navigare.
          Prin continuarea navigării, acceptați utilizarea cookie-urilor în conformitate cu{' '}
          <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
            Regulamentul GDPR
          </a>.
        </p>
        <div className="cookie-banner-actions">
          <button onClick={accept} className="btn-gold cookie-btn">Accept</button>
          <button onClick={decline} className="cookie-btn cookie-btn-decline">Refuz</button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [gallerySlide, setGallerySlide] = useState(0)
  const [eventSlide, setEventSlide] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setGallerySlide(s => (s + 1) % galleryCarouselImages.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setEventSlide(s => (s + 1) % eventImages.length)
    }, 4800)
    return () => clearInterval(id)
  }, [])

  const prevGallerySlide = () => setGallerySlide(s => (s - 1 + galleryCarouselImages.length) % galleryCarouselImages.length)
  const nextGallerySlide = () => setGallerySlide(s => (s + 1) % galleryCarouselImages.length)
  const prevEventSlide = () => setEventSlide(s => (s - 1 + eventImages.length) % eventImages.length)
  const nextEventSlide = () => setEventSlide(s => (s + 1) % eventImages.length)

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? Math.max(0, i - 1) : null)
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? Math.min(allLightboxImages.length - 1, i + 1) : null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  // Body scroll lock when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  // Load Calendly badge widget
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      const w = window as any
      w.Calendly?.initBadgeWidget({
        url: CALENDLY_URL,
        text: 'Rezervă Acum',
        color: '#c9a96e',
        textColor: '#0d0b09',
        branding: true,
      })
      setTimeout(tagCalendlyBadge, 500)
    }
    document.body.appendChild(script)
    const badgeObserver = new MutationObserver(tagCalendlyBadge)
    badgeObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      badgeObserver.disconnect()
      if (document.head.contains(link)) document.head.removeChild(link)
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  const openCalendly = () => {
    const w = window as any
    if (w.Calendly) {
      w.Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  return (
    <div style={{ background: 'var(--ink)', minHeight: '100vh' }}>

      {/* ── Floating nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-floating' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="font-display" style={{ color: 'var(--gold)', fontSize: '15px', letterSpacing: '0.12em' }}>
            SL 280 · Cluj
          </div>
          <div className="flex items-center gap-6">
            <a href={PHONE_HREF} className="btn-gold" style={{ padding: '10px 24px', fontSize: '12px' }}>
              {PHONE}
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} style={{ position: 'relative', height: '100svh', minHeight: '600px', overflow: 'hidden', background: 'var(--ink)' }}>
        <div className="hero-static">
          <img
            src={heroMain.src}
            alt={heroMain.alt}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>
        <div
          className="hero-bg"
          style={{ position: 'absolute', inset: 0, zIndex: 2 }}
        />

        {/* Side label */}
        <div
          style={{
            position: 'absolute', right: '40px', top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center center',
            color: 'var(--gold-dim)', fontSize: '10px',
            letterSpacing: '0.35em', fontFamily: 'Jost, sans-serif',
            fontWeight: 400, textTransform: 'uppercase',
            whiteSpace: 'nowrap', zIndex: 3,
          }}
          className="hidden md:block"
        >
          Cluj-Napoca · România
        </div>

        <div
          style={{
            position: 'absolute', bottom: '0', left: '0', right: '0',
            padding: '0 6vw 8vh', zIndex: 3,
          }}
        >
          <p
            className="reveal delay-1 font-body"
            style={{
              color: 'var(--gold)', fontSize: '11px',
              letterSpacing: '0.35em', textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Clasic · Premium · Restaurat
          </p>

          <h1
            className="reveal delay-2 font-display"
            style={{
              fontSize: 'clamp(42px, 8vw, 110px)',
              fontWeight: 300, lineHeight: 0.92,
              color: 'var(--text-primary)',
              margin: '0 0 8px',
              letterSpacing: '-0.02em',
            }}
          >
            Mercedes‑Benz
          </h1>
          <h1
            className="reveal delay-3 font-display"
            style={{
              fontSize: 'clamp(42px, 8vw, 110px)',
              fontWeight: 300, lineHeight: 0.92,
              color: 'var(--gold)',
              margin: '0 0 32px',
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
            }}
          >
            SL 280
          </h1>

          <p
            className="reveal delay-4 font-display"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              fontWeight: 300, fontStyle: 'italic',
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              lineHeight: 1.4,
              marginBottom: '40px',
            }}
          >
            O apariție rară și memorabilă pentru evenimente care contează.
          </p>

          <div className="reveal delay-5 flex flex-wrap gap-4">
            <button
              id="cta-reserve-hero"
              data-tracking-id="cta-reserve-hero"
              data-tracking-location="hero"
              onClick={openCalendly}
              className="btn-gold"
              type="button"
            >
              <CalendarIcon />
              Rezervă Acum
            </button>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section style={{ padding: '120px 6vw 80px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="gold-line" style={{ marginBottom: '28px' }} />
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 4vw, 58px)',
                fontWeight: 300, lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '28px',
              }}
            >
              O prezență care schimbă
              <br />
              <em style={{ color: 'var(--gold)' }}>complet atmosfera</em>
            </h2>
            <p
              className="font-body"
              style={{
                color: 'var(--text-secondary)', lineHeight: 1.8,
                fontSize: '16px', maxWidth: '440px',
              }}
            >
              Mercedes-Benz SL 280 restaurat impecabil, cu design iconic și prezență
              cinematică. Ideal pentru evenimente unde fiecare detaliu contează și
              imaginile vorbesc de la sine.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {useCases.map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '20px 0',
                  borderBottom: i < useCases.length - 1 ? '1px solid rgba(201,169,110,0.1)' : 'none',
                }}
              >
                <div style={{ color: 'var(--gold)', flexShrink: 0 }}>
                  <Icon />
                </div>
                <span
                  className="font-body"
                  style={{ color: 'var(--text-primary)', fontSize: '15px', letterSpacing: '0.05em' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="galerie" style={{ padding: '20px 6vw 100px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'baseline', gap: '24px' }}>
            <span className="gold-line" />
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', margin: 0 }}
            >
              Galerie
            </h2>
          </div>
          <div className="gallery-carousel" aria-label="Galerie foto Mercedes-Benz SL 280">
            <button
              id="carousel-gallery-prev"
              data-tracking-id="carousel-gallery-prev"
              data-carousel="gallery"
              data-carousel-direction="prev"
              type="button"
              className="carousel-arrow carousel-arrow-prev"
              onClick={prevGallerySlide}
              aria-label="Imaginea anterioara din galerie"
            >
              <ChevronLeftIcon />
            </button>
            <div className="gallery-carousel-track" style={{ transform: `translateX(calc(${gallerySlide} * -100%))` }}>
              {galleryCarouselImages.map(({ src, alt }, i) => (
                <button
                  key={src}
                  type="button"
                  className="img-zoom gallery-carousel-slide"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Deschide imaginea ${i + 1} din galerie`}
                >
                  <img src={src} alt={alt} />
                </button>
              ))}
            </div>
            <button
              id="carousel-gallery-next"
              data-tracking-id="carousel-gallery-next"
              data-carousel="gallery"
              data-carousel-direction="next"
              type="button"
              className="carousel-arrow carousel-arrow-next"
              onClick={nextGallerySlide}
              aria-label="Imaginea urmatoare din galerie"
            >
              <ChevronRightIcon />
            </button>
          </div>

          {/* Event images */}
          <div style={{ marginTop: '48px', marginBottom: '24px', display: 'flex', alignItems: 'baseline', gap: '24px' }}>
            <span className="gold-line" />
            <h3
              className="font-display"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 300, color: 'var(--text-primary)', margin: 0 }}
            >
              Evenimente & Producții
            </h3>
          </div>
          <div className="gallery-carousel event-carousel" aria-label="Evenimente si productii Mercedes-Benz SL 280">
            <button
              id="carousel-events-prev"
              data-tracking-id="carousel-events-prev"
              data-carousel="events"
              data-carousel-direction="prev"
              type="button"
              className="carousel-arrow carousel-arrow-prev"
              onClick={prevEventSlide}
              aria-label="Imaginea anterioara din Evenimente si Productii"
            >
              <ChevronLeftIcon />
            </button>
            <div className="gallery-carousel-track" style={{ transform: `translateX(calc(${eventSlide} * -100%))` }}>
              {eventImages.map(({ src, alt }, i) => (
                <button
                  key={src}
                  type="button"
                  className="img-zoom gallery-carousel-slide"
                  onClick={() => setLightboxIndex(galleryCarouselImages.length + i)}
                  aria-label={`Deschide imaginea ${i + 1} din Evenimente si Productii`}
                >
                  <img src={src} alt={alt} />
                </button>
              ))}
            </div>
            <button
              id="carousel-events-next"
              data-tracking-id="carousel-events-next"
              data-carousel="events"
              data-carousel-direction="next"
              type="button"
              className="carousel-arrow carousel-arrow-next"
              onClick={nextEventSlide}
              aria-label="Imaginea urmatoare din Evenimente si Productii"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── Ornament divider ── */}
      <div style={{ padding: '0 6vw', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="ornament">1979</div>
      </div>

      {/* ── Services ── */}
      <section id="servicii" style={{ padding: '100px 6vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <span className="gold-line" style={{ marginBottom: '20px' }} />
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, color: 'var(--text-primary)', margin: 0 }}
            >
              Servicii Premium
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2px',
            }}
          >
            {services.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={title}
                className="service-card"
                style={{
                  padding: '48px 36px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '24px' }}>
                  <Icon size={28} />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '22px', fontWeight: 400,
                    color: 'var(--text-primary)', marginBottom: '12px',
                  }}
                >
                  {title}
                </h3>
                <p
                  className="font-body"
                  style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="tarife" style={{ padding: '20px 6vw 100px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          <div>
            <span className="gold-line" style={{ marginBottom: '28px' }} />
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}
            >
              Tarife
            </h2>
            <p
              className="font-body"
              style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, maxWidth: '360px' }}
            >
              Servicii premium pentru evenimente memorabile. Disponibil în Cluj-Napoca și împrejurimi.
            </p>
          </div>

          <div>
            {pricing.map(({ label, value }, i) => (
              <div
                key={label}
                className="price-row"
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '22px 16px',
                  borderTop: i === 0 ? '1px solid rgba(201,169,110,0.1)' : 'none',
                }}
              >
                <span className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '14px', letterSpacing: '0.08em' }}>
                  {label}
                </span>
                <span
                  className="font-display"
                  style={{ color: 'var(--gold)', fontSize: '24px', fontWeight: 400 }}
                >
                  {value}
                </span>
              </div>
            ))}
            <div style={{ marginTop: '40px' }}>
              <button
                id="cta-reserve-pricing"
                data-tracking-id="cta-reserve-pricing"
                data-tracking-location="pricing"
                onClick={openCalendly}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Rezervă Acum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section
        style={{
          position: 'relative', overflow: 'hidden',
          padding: '0',
        }}
      >
        <div style={{ position: 'relative', height: '460px' }}>
          <img
            src="/gallery/car-24.png"
            alt="Mercedes-Benz SL 280"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,11,9,0.72)' }} />
          <div
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', padding: '0 6vw',
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 5vw, 68px)',
                fontWeight: 300, color: 'var(--text-primary)',
                lineHeight: 1.1, marginBottom: '12px',
              }}
            >
              Transformă evenimentul
            </h2>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 5vw, 68px)',
                fontWeight: 300, color: 'var(--gold)',
                fontStyle: 'italic', lineHeight: 1.1, marginBottom: '40px',
              }}
            >
              într-o apariție memorabilă.
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={PHONE_HREF} className="btn-gold">
                <PhoneIcon />
                {PHONE}
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: '1px solid rgba(201,169,110,0.1)',
          padding: '60px 6vw',
        }}
      >
        <div
          style={{
            maxWidth: '1400px', margin: '0 auto',
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'space-between', alignItems: 'center', gap: '32px',
          }}
        >
          <div>
            <div
              className="font-display"
              style={{ fontSize: '24px', fontWeight: 300, color: 'var(--gold)', marginBottom: '6px' }}
            >
              Mercedes-Benz SL 280
            </div>
            <div
              className="font-body"
              style={{ color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Classic Rental · Cluj-Napoca
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
            <a
              href={PHONE_HREF}
              className="font-body"
              style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none', letterSpacing: '0.08em' }}
            >
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="font-body"
              style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none' }}
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div
          style={{
            maxWidth: '1400px', margin: '40px auto 0',
            borderTop: '1px solid rgba(201,169,110,0.06)',
            paddingTop: '28px',
            display: 'flex', justifyContent: 'center',
          }}
        >
          <p
            className="font-body"
            style={{ color: 'var(--text-muted)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}
          >
            © 2025 Mercedes-Benz SL 280 Classic Rental · Cluj-Napoca
          </p>
        </div>
      </footer>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Închide"
          >
            <CloseIcon />
          </button>

          {lightboxIndex > 0 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? i - 1 : null) }}
              aria-label="Anterior"
            >
              <ChevronLeftIcon />
            </button>
          )}

          <img
            src={allLightboxImages[lightboxIndex].src}
            alt={allLightboxImages[lightboxIndex].alt}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />

          {lightboxIndex < allLightboxImages.length - 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? i + 1 : null) }}
              aria-label="Următor"
            >
              <ChevronRightIcon />
            </button>
          )}

          <div className="lightbox-counter">
            {lightboxIndex + 1} / {allLightboxImages.length}
          </div>
        </div>
      )}

      {/* ── Cookie Banner (GDPR) ── */}
      <CookieBanner />
    </div>
  )
}

/* ── Icons (inline SVG) ── */

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function RingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="8" cy="12" r="5"/>
      <circle cx="16" cy="12" r="5"/>
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  )
}

function FilmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="2" width="20" height="20" rx="2.18"/>
      <line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/>
      <line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/>
      <line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="12"/>
    </svg>
  )
}

function WheelIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/>
    </svg>
  )
}

function ShieldIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function ApertureIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="14.31" y1="8" x2="20.05" y2="17.94"/>
      <line x1="9.69" y1="8" x2="21.17" y2="8"/>
      <line x1="7.38" y1="12" x2="13.12" y2="2.06"/>
      <line x1="9.69" y1="16" x2="3.95" y2="6.06"/>
      <line x1="14.31" y1="16" x2="2.83" y2="16"/>
      <line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
    </svg>
  )
}

function ClockIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  )
}
