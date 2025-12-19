"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import styles from "./header.module.css";

const MOBILE_BREAKPOINT = 900;

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <div className={styles.navWrapper} data-open={open}>
      <button
        type="button"
        className={styles.navToggleButton}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.navToggleIcon} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id="primary-nav"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        aria-label="Основная навигация"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contacts"
          className={`${styles.navLink} ${styles.navCta}`}
          onClick={handleLinkClick}
        >
          Оставить заявку
        </Link>
      </nav>
    </div>
  );
}
