'use client';

import { useState } from "react";
import styles from "@/app/page.module.css";

interface Status {
  type: "idle" | "success" | "error";
  message: string;
}

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      contact: String(formData.get("contact") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.name || !payload.contact) {
      setStatus({ type: "error", message: "Заполните имя и контакт." });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error((await response.json()).error || "Не удалось отправить заявку");
      }

      form.reset();
      setStatus({ type: "success", message: "Заявка отправлена. Мы свяжемся с вами." });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Не удалось отправить заявку. Попробуйте позже.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Имя</span>
        <input name="name" type="text" placeholder="Как к вам обращаться?" required />
      </label>
      <label className={styles.field}>
        <span>Телефон или Email</span>
        <input
          name="contact"
          type="text"
          placeholder="+7 (...) или example@mail.ru"
          required
        />
      </label>
      <label className={styles.field}>
        <span>Сообщение</span>
        <textarea name="message" rows={4} placeholder="Кратко опишите задачу" />
      </label>
      <button type="submit" className={styles.primaryButton} disabled={loading}>
        {loading ? "Отправляем..." : "Отправить заявку"}
      </button>
      {status.message && (
        <div
          className={`${styles.formStatus} ${
            status.type === "success" ? styles.formStatusSuccess : styles.formStatusError
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
