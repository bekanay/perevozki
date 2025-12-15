import { useState } from 'react'
import './App.css'

const heroImage = `${import.meta.env.BASE_URL}gazel2.png`
const logoImage = `${import.meta.env.BASE_URL}logo_avtohelp.png`
const galleryImages = [
  `${import.meta.env.BASE_URL}evacuator.jpg`,
  `${import.meta.env.BASE_URL}gazel1.jpg`,
  `${import.meta.env.BASE_URL}gazel2.png`,
  `${import.meta.env.BASE_URL}gazel3.jpg`,
  `${import.meta.env.BASE_URL}truck-hero.jpg`,
]

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Особенности', href: '#features-grid' },
  { label: 'Преимущества', href: '#pros' },
  { label: 'Вызвать', href: '#cta' },
  { label: 'Отзывы', href: '#reviews' },
]

const services = [
  'Эвакуатор легковых авто',
  'Эвакуатор кроссоверов и SUV',
  'Эвакуация после ДТП',
  'Перевозка мото/квадроциклов',
  'Доставка в сервис и обратно',
  'Выезд за город/трасса',
]

const features = [
  { title: 'Быстро', desc: 'Подача эвакуатора в среднем за 25 минут по городу.', icon: '⚡' },
  { title: 'Аккуратно', desc: 'Мягкие стропы, лебедка, фотофиксация перед выездом.', icon: '✔' },
  { title: '24/7', desc: 'Работаем круглосуточно, без наценки за ночь.', icon: '🕒' },
]

const advantages = [
  'Низкая погрузочная платформа',
  'Фиксированная цена перед выездом',
  'Оплата картой или переводом',
  'Страхование груза и авто',
]

const reviews = [
  {
    name: 'Дамир',
    text: 'Застрял на трассе, эвакуатор приехал за 30 минут. Машину погрузили бережно, без царапин.',
  },
  {
    name: 'Алина',
    text: 'После ДТП забрали авто ночью, сделали фотофиксацию. Всё аккуратно и спокойно.',
  },
  {
    name: 'Руслан',
    text: 'Нужно было перевезти спортивную машину с низким клиренсом. Платформа и заезд — без ущерба бамперу.',
  },
]

function App() {
  const [showContacts, setShowContacts] = useState(false)
  const [slide, setSlide] = useState(0)
  const openContacts = () => setShowContacts(true)
  const closeContacts = () => setShowContacts(false)
  const nextSlide = () => setSlide((prev) => (prev + 1) % galleryImages.length)
  const prevSlide = () => setSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <div className="page">
      <div className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <img src={logoImage} alt="Логотип avtohelp_kz" className="brand-logo" />
          </div>
          <div>
            <div className="brand-title">avtohelp_kz</div>
            <div className="brand-sub">Эвакуатор 24/7 • Астана</div>
          </div>
        </div>
        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button className="btn ghost" onClick={openContacts}>
          Вызвать сейчас
        </button>
      </div>

      <header className="hero" id="hero">
        <div className="hero-left">
          <div className="hero-bg" aria-hidden />
          <p className="tag">Эвакуатор • Астана и область</p>
          <div className="hero-title">
            <h1>Эвакуатор с экипажем — быстро и бережно</h1>
          </div>
          <div className="hero-actions">
            <button className="btn primary" onClick={openContacts}>
              Вызвать эвакуатор
            </button>
            <p className="phone">8 (707) 624 8060</p>
          </div>
          <p className="hero-note">Подача от 25 минут • Работаем 24/7</p>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="Эвакуатор на вызове" className="truck-main" />
        </div>
      </header>

      <section className="service-section section-block" id="services">
        <div className="service-grid">
          {services.map((item) => (
            <div key={item} className="service-card">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="features section-block" id="features-grid">
        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery section-block" id="gallery">
        <div className="gallery-top">
          <h2>Наш парк эвакуаторов</h2>
          <p>Свежие авто, низкие платформы и спецоборудование под разные задачи.</p>
        </div>
        <div className="carousel">
          <button className="carousel-btn" aria-label="Предыдущий слайд" onClick={prevSlide}>
            ‹
          </button>
          <div className="carousel-frame">
            <img src={galleryImages[slide]} alt="Эвакуатор avtohelp_kz" className="carousel-img" />
          </div>
          <button className="carousel-btn" aria-label="Следующий слайд" onClick={nextSlide}>
            ›
          </button>
        </div>
        <div className="carousel-dots">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === slide ? 'active' : ''}`}
              aria-label={`Показать слайд ${idx + 1}`}
              onClick={() => setSlide(idx)}
            />
          ))}
        </div>
      </section>

      <section className="benefits section-block alt" id="pros">
        <h2>Наши преимущества</h2>
        <div className="benefit-grid">
          {advantages.map((item) => (
            <div key={item} className="benefit-card">
              <div className="benefit-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta section-block" id="cta">
        <div className="cta-text">
          <h3>Нужен эвакуатор сейчас?</h3>
          <p>Звоните — подтвердим стоимость до выезда и пришлем машину под ваш вес и габариты.</p>
          <button className="btn primary" onClick={openContacts}>Вызвать</button>
        </div>
        <div className="cta-options">
          <div className="option">
            <div className="option-icon">⬆</div>
            <p>Стандартная платформа</p>
            <span>Город, трасса, подача быстро</span>
          </div>
          <div className="option">
            <div className="option-icon">▰</div>
            <p>Низкая платформа</p>
            <span>Спорткары и авто с обвесом</span>
          </div>
        </div>
      </section>

      <section className="reviews section-block alt" id="reviews">
        <h2>Отзывы клиентов</h2>
        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.name} className="review-card">
              <div className="quote">“</div>
              <p className="review-text">{review.text}</p>
              <p className="review-name">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {showContacts && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-backdrop" onClick={closeContacts} />
          <div className="modal-card">
            <button className="modal-close" aria-label="Закрыть окно" onClick={closeContacts}>
              ×
            </button>
            <h3>Свяжитесь с нами</h3>
            <p className="modal-text">Подача от 25 минут. Выберите удобный способ:</p>
            <div className="modal-actions">
              <a className="btn primary full" href="tel:+77076248060">
                Позвонить: +7 (707) 624 8060
              </a>
              <a
                className="btn ghost full"
                href="https://wa.me/77076248060"
                target="_blank"
                rel="noreferrer"
              >
                Написать в WhatsApp
              </a>
              <a
                className="btn ghost full"
                href="https://www.instagram.com/avtohelp_kz/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram: @avtohelp_kz
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
