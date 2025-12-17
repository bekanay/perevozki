import { useState } from 'react'
import './App.css'

const heroImage = `${import.meta.env.BASE_URL}7.jpg`
const logoImage = `${import.meta.env.BASE_URL}logo_avtohelp.png`
const kzFlag = `${import.meta.env.BASE_URL}flags/kz.svg`
const ruFlag = `${import.meta.env.BASE_URL}flags/ru.svg`
const kgFlag = `${import.meta.env.BASE_URL}flags/kg.svg`
const galleryImages = [
  `${import.meta.env.BASE_URL}7.jpg`,
  `${import.meta.env.BASE_URL}8.jpg`,
  `${import.meta.env.BASE_URL}4.PNG`,
  `${import.meta.env.BASE_URL}5.PNG`,
  `${import.meta.env.BASE_URL}6.PNG`,
]

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Особенности', href: '#features-grid' },
  { label: 'Преимущества', href: '#pros' },
  { label: 'Вызвать', href: '#cta' },
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
        <div className="icon-row">
          <a
            className="icon-btn wa"
            href="https://wa.me/77076248060"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp avtohelp_kz"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.1-.472-.149-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.149-1.255-.462-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.173.199-.298.298-.497c.099-.198.05-.372-.025-.52c-.075-.149-.669-1.611-.916-2.206c-.242-.58-.488-.502-.67-.512l-.572-.01c-.198 0-.52.074-.792.372c-.272.298-1.04 1.016-1.04 2.477c0 1.46 1.065 2.87 1.213 3.068c.149.198 2.095 3.2 5.076 4.487c.709.306 1.262.489 1.694.626c.712.227 1.36.195 1.872.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347z"
                fill="currentColor"
              />
              <path
                d="M12.002 2.002c-5.5 0-9.998 4.498-9.998 9.998c0 1.762.46 3.476 1.333 4.985l-1.424 5.2l5.318-1.393a9.96 9.96 0 0 0 4.77 1.206h.001c5.5 0 9.998-4.498 9.998-9.998s-4.498-9.998-9.998-9.998Zm0 18.143c-1.493 0-2.955-.402-4.229-1.163l-.303-.179l-3.155.826l.843-3.086l-.198-.317a7.96 7.96 0 0 1-1.224-4.218c0-4.411 3.587-7.998 7.998-7.998s7.998 3.587 7.998 7.998s-3.587 7.998-7.998 7.998Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            className="icon-btn insta"
            href="https://www.instagram.com/avtohelp_kz/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram avtohelp_kz"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2.5A3.25 3.25 0 0 0 4.5 7.75v8.5A3.25 3.25 0 0 0 7.75 19.5h8.5a3.25 3.25 0 0 0 3.25-3.25v-8.5A3.25 3.25 0 0 0 16.25 4.5Zm8.75 1.25a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <button className="btn ghost" onClick={openContacts}>
          Вызвать сейчас
        </button>
      </div>

      <header className="hero" id="hero">
        <div className="hero-left">
          <div className="hero-bg" aria-hidden />
          <p className="tag">Эвакуатор • Астана и область</p>
          <div className="country-flags" aria-label="Страны выезда">
            <img className="country-flag" src={kzFlag} alt="Казахстан" decoding="async" />
            <img className="country-flag" src={ruFlag} alt="Россия" decoding="async" />
            <img className="country-flag" src={kgFlag} alt="Кыргызстан" decoding="async" />
          </div>
          <div className="hero-title">
            <h1>Выезд по Казахстану, России, Кыргызстану</h1>
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
