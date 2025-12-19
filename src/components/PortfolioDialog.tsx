'use client';

import Image from "next/image";
import { useState } from "react";
import { HiUpload, HiLockClosed, HiDatabase, HiChartBar } from "react-icons/hi";
import styles from "@/app/page.module.css";

interface Highlight {
  title: string;
  description: string;
  icon: "upload" | "database" | "lock" | "chart";
}

interface PortfolioDialogProps {
  highlights: Highlight[];
  imageSrc: string;
  imageAlt: string;
}

const PortfolioDialog: React.FC<PortfolioDialogProps> = ({ highlights, imageSrc, imageAlt }) => {
  const [open, setOpen] = useState(false);

  const iconMap: Record<Highlight["icon"], React.ReactNode> = {
    upload: <HiUpload aria-hidden />,
    database: <HiDatabase aria-hidden />,
    lock: <HiLockClosed aria-hidden />,
    chart: <HiChartBar aria-hidden />,
  };

  return (
    <>
      <button type="button" className={styles.secondaryButton} onClick={() => setOpen(true)}>
        Подробнее о платформе
      </button>

      {open && (
        <div
          className={styles.supportModalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Подробно о платформе PTSR-Expert"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className={styles.supportModal}>
            <div className={styles.supportModalHeader}>
              <span>PTSR-Expert — детали платформы</span>
              <button type="button" className={styles.modalClose} onClick={() => setOpen(false)}>
                Закрыть
              </button>
            </div>
            <div className={styles.supportModalBody}>
              <div className={styles.portfolioModalGrid}>
                <div className={styles.portfolioModalText}>
                  <p className={styles.sectionKicker}>Личный кабинет</p>
                  <h3>Аналитика, записи и курсы в одном окне</h3>
                  <p className={styles.portfolioDarkLead}>
                    Пользователь видит прогресс по курсам, может вести дневники, записываться к
                    специалистам и получать рекомендации в одном интерфейсе. Всё связано: занятия,
                    записи и поддержка.
                  </p>
                  <dl className={styles.portfolioDarkList}>
                    {highlights.map((item) => (
                  <div key={item.title} className={styles.portfolioDarkItem}>
                    <div className={styles.portfolioDarkIcon}>
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <dt>{item.title}</dt>
                      <dd>{item.description}</dd>
                    </div>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className={styles.portfolioModalImageWrap}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1600}
                    height={1000}
                    className={styles.portfolioDarkImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioDialog;
