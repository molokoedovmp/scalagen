import styles from "./requisites.module.css";

const rows = [
  { label: "Полное наименование", value: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ Центр Цифровых Трансформаций "СКАЛАГЕН-НейроТех"' },
  { label: "Краткое наименование", value: 'ООО ЦЦТ "СКАЛАГЕН-НейроТех"' },
  { label: "Юридический адрес", value: "143907, Московская Обл., г. Балашиха, пр-т Ленина д. 32А, к. 419" },
  { label: "Почтовый адрес", value: "143907, Московская Обл., г. Балашиха, пр-т Ленина д. 32А, к. 419" },
  { label: "ИНН", value: "5001167805" },
  { label: "КПП", value: "500101001" },
  { label: "ОГРН", value: "1255000113189" },
  { label: "ОКВЭД", value: "62.01; 58.29; 62.09; 63.11; 63.12" },
  { label: "Расчётный счёт", value: "40702810720000269890" },
  { label: "Корреспондентский счёт", value: "30101810745374525104" },
  { label: "Банк", value: 'ООО "Банк Точка"' },
  { label: "БИК", value: "044525104" },
  { label: "Генеральный директор", value: "Михаил Юрьевич Зверев" },
];

export default function RequisitesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <header className={styles.header}>
          <p className={styles.kicker}>Документы</p>
          <h1>Реквизиты ООО ЦЦТ «СКАЛАГЕН-НейроТех»</h1>
          <p className={styles.lead}>
            Актуальные реквизиты компании для договоров, оплат и закрывающих документов.
          </p>
        </header>
        <dl className={styles.list}>
          {rows.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
