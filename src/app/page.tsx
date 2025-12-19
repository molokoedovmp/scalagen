import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { techLogos } from "@/data/tech-logos";
import LogoLoop from "@/components/LogoLoop";
import Threads from "@/components/Threads";
import ContactForm from "@/components/ContactForm";
import HeaderNav from "@/components/HeaderNav";
import PortfolioShowcase, { PortfolioSection } from "@/components/PortfolioShowcase";
import SupportCarousel, { SupportDoc } from "@/components/SupportCarousel";
import headerStyles from "@/components/header.module.css";
import styles from "./page.module.css";

const platformSlides: PortfolioSection[] = [
  {
    title: "Главная страница",
    description:
      "Чистая витрина с акцентом на помощь людям с ПТСР: выделенные блоки со срочными материалами, быстрые маршруты к специалистам и разделами самопомощи.",
    image: "/landing.png",
    alt: "Главная страница PTSR-Expert",
    tag: "Онбординг",
    features: ["Быстрый старт", "Блоки самопомощи", "Маршруты к экспертам"],
    meta: [
      { label: "Роль команды", value: "UX/UI, фронтенд, анимации" },
      { label: "Цель", value: "Конверсия в запись и самопомощь" },
      { label: "Срок", value: "6 недель на MVP" },
    ],
    tech: "Next.js · Lenis · Design System",
  },
  {
    title: "Прохождение курсов",
    description:
      "Структурированные курсы по восстановлению: видео, статьи, упражнения, тесты, чек-листы и обратная связь с психологами. Прогресс фиксируется, чтобы участники видели результаты и сохраняли мотивацию.",
    image: "/courses.png",
    alt: "Прохождение курсов PTSR-Expert",
    tag: "Обучение",
    features: ["Видео/статьи", "Тесты и чек-листы", "Обратная связь"],
    meta: [
      { label: "Формат", value: "Видео, упражнения, тесты" },
      { label: "Геймификация", value: "Прогрессбар и серии уведомлений" },
      { label: "Поддержка", value: "Наставники отвечают прямо в модуле" },
    ],
    tech: "Next.js · Video CDN · Analytics",
  },
  {
    title: "Эксперты и запись на консультацию",
    description:
      "Каталог психологов и специалистов по ПТСР: карточки экспертов, расписание, запись на сессии и связь через платформу. Пользователи могут выбрать специалиста и быстро забронировать время.",
    image: "/experts.png",
    alt: "Эксперты PTSR-Expert",
    tag: "Эксперты",
    features: ["Профили экспертов", "Расписание", "Онлайн-запись"],
    meta: [
      { label: "Запись", value: "Слоты, напоминания, предоплата" },
      { label: "Выбор", value: "Фильтры по специализациям и опыту" },
      { label: "Связь", value: "Чаты внутри платформы" },
    ],
    tech: "Календарь · Оплата · Secure chat",
  },
  {
    title: "Личные дневники",
    description:
      "Персональные записи и отслеживание самочувствия с безопасным хранением. Можно отмечать триггеры, добавлять медиа, делиться с наставником или психологом.",
    image: "/notefeel.png",
    alt: "Личные дневники PTSR-Expert",
    tag: "Самонаблюдение",
    features: ["Триггеры и заметки", "Медиа и теги", "Доступ наставнику"],
    meta: [
      { label: "Приватность", value: "Шифрование и скрытые теги" },
      { label: "Аналитика", value: "Графики настроения и триггеров" },
      { label: "Команда", value: "Доступ наставнику / психологу" },
    ],
    tech: "Charts · Offline drafts · Secure storage",
  },
  {
    title: "Личный кабинет с аналитикой",
    description:
      "Метрики прогресса восстановления, активность по курсам и дневникам, рекомендации по дальнейшим шагам. Прозрачные отчёты для пользователя и команды поддержки.",
    image: "/analytics.png",
    alt: "Аналитика личного кабинета PTSR-Expert",
    tag: "Аналитика",
    features: ["Метрики прогресса", "Рекомендации", "Отчёты и платежи"],
    meta: [
      { label: "Метрики", value: "Курсы, дневники, NPS" },
      { label: "Роли", value: "Пользователь / куратор / руководство" },
      { label: "Оповещения", value: "Алерты по рисковым событиям" },
    ],
    tech: "Dashboard · Экспорт отчётов · BI-виджеты",
  },
  {
    title: "Статьи и видео",
    description:
      "Библиотека материалов о работе с ПТСР: статьи, видео, инструкции по дыханию, техникам безопасности и поддержке близких. Умные рекомендации под состояние пользователя.",
    image: "/blog.png",
    alt: "Статьи и видео PTSR-Expert",
    tag: "Контент",
    features: ["Подборки контента", "Видео/статьи", "Рекомендации"],
    meta: [
      { label: "Форматы", value: "Видео, статьи, чек-листы" },
      { label: "Персонализация", value: "Рекомендации по триггерам" },
      { label: "Доступ", value: "Онлайн и офлайн сценарии" },
    ],
    tech: "Headless CMS · Recommendations · Search",
  },
];

const supportDocs: SupportDoc[] = [
  { title: "Москва", href: "/support/Поддержка Москва.jpg", type: "image" },
  { title: "Новосибирск", href: "/support/Поддержка Новосибирск.jpeg", type: "image" },
  { title: "Кузбасс", href: "/support/Поддержка Кузбасс.png", type: "image" },
  { title: "Омск", href: "/support/Поддержка Омск.png", type: "image" },
  { title: "Томск", href: "/support/Поддержка Томск.pdf", type: "pdf" },
  { title: "Пятигорск", href: "/support/Поддержка Пятигорск.jpeg", type: "image" },
  { title: "Красноярск", href: "/support/Поддержка КРОО Красноярск.png", type: "image" },
  { title: "Бурятия", href: "/support/Поддержка Бурятия.png", type: "image" },
];

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <div className={styles.gridOverlay} aria-hidden />
      <div className={styles.glow} aria-hidden />
      <header className={headerStyles.header}>
        <div className={headerStyles.logoBlock}>
          <Image
            className={headerStyles.logoImage}
            src="/logo.png"
            alt="Логотип СКАЛАГЕН-НейроТех"
            width={220}
            height={64}
            priority
          />
          <span className={headerStyles.logoSub}>СКАЛАГЕН-НейроТех</span>
        </div>

        <div className={headerStyles.headerActions}>
          <HeaderNav />
          <Link className={headerStyles.headerCta} href="#contacts">
            Оставить заявку
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroBg}>
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction
              color={[0.6, 0.64, 0.7]}
            />
          </div>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Digital / IT / Премиум-уровень</p>
            <h1 id="hero-title" className={styles.title}>
              Создаём сайты и цифровые решения для бизнеса
            </h1>
            <p className={styles.lead}>
              Проектирование, дизайн и разработка сайтов под ключ — от идеи до
              запуска. Работаем с современным стеком и заботимся о деталях,
              скорости и безопасности.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="#contacts">
                Оставить заявку
              </Link>
              <Link className={styles.secondaryButton} href="#portfolio">
                Посмотреть наш проект
              </Link>
            </div>
          </div>

          <div className={styles.heroLoop}>
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="left"
              logoHeight={36}
              gap={32}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Стек технологий"
            />
          </div>
        </section>

        

        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Услуги</p>
            <h2>Создаем цифровые продукты под задачи бизнеса</h2>
            <p className={styles.sectionDescription}>
              Работает команда аналитиков, дизайнеров и разработчиков. Чёткие
              процессы, прозрачные сроки и контроль качества на каждом этапе.
            </p>
          </div>
          <div className={styles.servicesTableWrapper}>
            <div className={styles.tableScroll}>
              <table className={styles.servicesTable}>
                <thead>
                  <tr>
                    <th>Направление</th>
                    <th>Описание</th>
                    <th>Для кого</th>
                    <th>Сроки / формат</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.title}>
                      <td className={styles.serviceTitle}>{service.title}</td>
                      <td className={styles.serviceText}>{service.description}</td>
                      <td className={styles.serviceText}>{service.audience}</td>
                      <td className={styles.serviceText}>{service.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="portfolio" className={`${styles.section} ${styles.portfolioDarkSection}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Наша платформа</p>
            <h2>Платформа «PTSR-Expert»</h2>
            <p className={styles.sectionDescription}>
              Собственная платформа СКАЛАГЕН-НейроТех для поддержки людей с ПТСР: обучение,
              личные кабинеты, безопасный контент и аналитика в единой экосистеме. Курсы,
              дневники, рекомендации и связь со специалистами работают в связке с системой
              аналитики, чтобы сопровождать пользователей на каждом этапе восстановления.
            </p>
          </div>
          <PortfolioShowcase sections={platformSlides} />
        </section>

        <section id="support" className={`${styles.section} ${styles.supportSection}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Кто нас поддерживает</p>
            <h2>Регионы и партнёры платформы</h2>
            <p className={styles.sectionDescription}>
              Платформа PTSR-Expert сотрудничает с региональными организациями и имеет подтверждённые
              письма поддержки из разных регионов.
            </p>
          </div>
          <SupportCarousel docs={supportDocs} />
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>О компании</p>
            <h2>СКАЛАГЕН-НейроТех</h2>
          </div>
          <div className={styles.aboutBox}>
            <div className={styles.aboutPill}>Digital Transformation · Mental Health Tech</div>
            <p>
              СКАЛАГЕН-НейроТех — центр цифровых трансформаций. Проектируем и запускаем продукты
              для бизнеса и для людей, которым нужна технологичная поддержка: от сайтов и платформ
              до аналитики и интеграций. Опираемся на дизайн-системы, безопасность и масштабируемую
              архитектуру.
            </p>
            <div className={styles.aboutHighlights}>
              <div className={styles.aboutCard}>
                <span className={styles.badge}>Команда</span>
                <p>Дизайнеры, аналитики, разработчики и DevOps под единой методологией.</p>
              </div>
              <div className={styles.aboutCard}>
                <span className={styles.badge}>Процессы</span>
                <p>Discovery, прототипы, дизайн-система, спринты разработки, QA и SLA.</p>
              </div>
              <div className={styles.aboutCard}>
                <span className={styles.badge}>Безопасность</span>
                <p>Контроль доступа, резервирование, защита данных и приватности пользователей.</p>
              </div>
            </div>
            <div className={styles.aboutMeta}>
              <div className={styles.metaItem}>
                <strong>15+</strong>
                <span>проектных специалистов</span>
              </div>
              <div className={styles.metaItem}>
                <strong>24/7</strong>
                <span>поддержка и мониторинг</span>
              </div>
              <div className={styles.metaItem}>
                <strong>Full-cycle</strong>
                <span>от аналитики до роста продукта</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Контакты</p>
            <h2>Свяжитесь с нами</h2>
            <p className={styles.sectionDescription}>
              Расскажите о задаче — подберём решение, согласуем план и сроки.
            </p>
          </div>
          <div className={styles.contactsGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>Телефон</span>
                <Link href="tel:+79037960810">+7 (903) 796-08-10</Link>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>Email</span>
                <Link href="mailto:znatokor@mail.ru">znatokor@mail.ru</Link>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>Сайт</span>
                <Link href="https://scalagen.ru">scalagen.ru</Link>
              </div>
              <div className={styles.contactNote}>
                Подготовим экспертную сессию и предложим прозрачную смету.
              </div>
            </div>

            <div className={styles.formCard}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerBrand}>
            <Image
              src="/logo.png"
              alt="Логотип СКАЛАГЕН-НейроТех"
              width={240}
              height={70}
              className={styles.footerLogo}
            />
            <p>Сайты, дизайн и цифровые платформы для бизнеса.</p>
            <p>Помогаем компаниям уверенно расти в цифровой среде.</p>
          </div>

          <div className={styles.footerNav}>
            <p className={styles.footerTitle}>Навигация</p>
            <Link href="#services">Услуги</Link>
            <Link href="#portfolio">Портфолио</Link>
            <Link href="#support">Поддержка</Link>
            <Link href="#about">О компании</Link>
            <Link href="#contacts">Контакты</Link>
          </div>

          <div className={styles.footerDocs}>
            <p className={styles.footerTitle}>Документы</p>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/requisites">Реквизиты</Link>
            <Link href="/it-info">Сведения об IT-деятельности</Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          
          <div className={styles.footerCopy}>
            <span>СКАЛАГЕН-НейроТех © 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
