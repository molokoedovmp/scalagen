'use client';

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/page.module.css";

export interface SupportDoc {
  title: string;
  href: string;
  type: "image" | "pdf";
}

interface SupportCarouselProps {
  docs: SupportDoc[];
}

const SupportCarousel: React.FC<SupportCarouselProps> = ({ docs }) => {
  const [openDoc, setOpenDoc] = useState<SupportDoc | null>(null);

  return (
    <>
      <div className={styles.supportCarousel} role="list">
        {docs.map((doc) => (
          <button
            key={doc.href}
            type="button"
            className={styles.supportCard}
            onClick={() => setOpenDoc(doc)}
          >
            <div className={styles.supportThumb}>
              {doc.type === "image" ? (
                <Image
                  src={encodeURI(doc.href)}
                  alt={doc.title}
                  width={320}
                  height={200}
                  className={styles.supportThumbImage}
                />
              ) : (
                <div className={styles.supportPdf}>PDF</div>
              )}
            </div>
            <span className={styles.supportTitle}>{doc.title}</span>
          </button>
        ))}
      </div>

      {openDoc && (
        <div
          className={styles.supportModalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={openDoc.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenDoc(null);
          }}
        >
          <div className={styles.supportModal}>
            <div className={styles.supportModalHeader}>
              <span>{openDoc.title}</span>
              <button type="button" className={styles.modalClose} onClick={() => setOpenDoc(null)}>
                Закрыть
              </button>
            </div>
            <div className={styles.supportModalBody}>
              {openDoc.type === "image" ? (
                <Image
                  src={encodeURI(openDoc.href)}
                  alt={openDoc.title}
                  width={1600}
                  height={1000}
                  className={styles.supportModalImage}
                />
              ) : (
                <iframe src={encodeURI(openDoc.href)} className={styles.supportModalPdf} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportCarousel;
