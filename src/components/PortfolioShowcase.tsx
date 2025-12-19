'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HiUpload, HiLockClosed, HiDatabase, HiChartBar } from "react-icons/hi";
import styles from "@/app/page.module.css";

export interface PortfolioSection {
  title: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
  features: string[];
  meta: { label: string; value: string }[];
  tech: string;
}

interface PortfolioShowcaseProps {
  sections: PortfolioSection[];
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mainScreen = sections[0];

  const summary = useMemo(
    () => [
      {
        title: "Записи к специалистам",
        description: "Быстрая запись к психологу, расписание слотов и прозрачная оплата.",
        icon: <HiUpload aria-hidden />,
      },
      {
        title: "Личные дневники и курсы",
        description: "Дневник настроения, прогресс по курсам и персональные рекомендации.",
        icon: <HiDatabase aria-hidden />,
      },
      {
        title: "Безопасность и приватность",
        description: "Шифрование записей, контроль доступа и хранение истории взаимодействий.",
        icon: <HiLockClosed aria-hidden />,
      },
      {
        title: "Аналитика восстановления",
        description: "Метрики по занятиям, вовлечённости и самочувствию с подсказками для команды.",
        icon: <HiChartBar aria-hidden />,
      },
    ],
    []
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!mainScreen) return null;

  return (
    <>
      <div className={styles.portfolioBlock}>
        <div className={styles.portfolioVisual}>
          <div className={styles.portfolioShot}>
            <div className={styles.portfolioShotGlow} aria-hidden />
            <div className={styles.portfolioShotInner}>
              <Image
                src={mainScreen.image}
                alt={mainScreen.alt}
                width={1450}
                height={900}
                className={styles.portfolioMainImage}
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles.portfolioContent}>
          <div className={styles.portfolioPills}>
            <span className={styles.badge}>PTSR-Expert</span>
            <span className={styles.casePill}>Платформа</span>
          </div>
          <h3>Что даёт платформа</h3>
          <div className={styles.portfolioList}>
            {summary.map((item) => (
              <div key={item.title} className={styles.portfolioListItem}>
                <div className={styles.portfolioListIcon}>{item.icon}</div>
                <div className={styles.portfolioListText}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.portfolioActions}>
            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => setIsOpen(true)}
            >
              Подробнее о платформе
            </button>
            <Link
              className={styles.secondaryButton}
              href="https://ptsr-expert.ru"
              target="_blank"
              rel="noreferrer"
            >
              Открыть PTSR-Expert
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={styles.portfolioModalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Подробности платформы PTSR-Expert"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className={styles.portfolioModal}>
            <div className={styles.portfolioModalHeader}>
              <div>
                <p className={styles.sectionKicker}>PTSR-Expert</p>
                <h3>Как устроена платформа</h3>
                
              </div>
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setIsOpen(false)}
                aria-label="Закрыть подробности"
              >
                Закрыть
              </button>
            </div>

            <div className={styles.portfolioModalBody}>
              {sections.map((section, index) => (
                <article key={section.title} className={styles.articleEntry}>
                  <div className={styles.articleContent}>
                    <span className={styles.sectionKicker}>Экран 0{index + 1}</span>
                    <h4>{section.title}</h4>
                    <p className={styles.articleParagraph}>{section.description}</p>
                    <p className={styles.articleParagraph}>
                      Внутри собраны: {section.features.join(", ")} — всё рядом, чтобы человек видел
                      ключевые опоры без лишних кликов.
                    </p>
                    <p className={styles.articleParagraph}>
                      Переходы между блоками продуманы так, чтобы пользователь не терялся: мы ведём
                      его от первого контакта к записи и самопомощи, не перегружая деталями.
                    </p>
                  </div>
                  <div className={styles.articleSideMedia}>
                    <div className={styles.articleImage}>
                      <Image
                        src={section.image}
                        alt={section.alt}
                        width={1100}
                        height={700}
                        className={styles.articleInlineImage}
                      />
                    </div>
                    <div className={styles.mediaLabel}>
                      <span>{section.tag}</span>
                      <span className={styles.mediaIndex}>0{index + 1}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioShowcase;
