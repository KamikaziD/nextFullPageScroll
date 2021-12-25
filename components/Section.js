import styles from "./Section.module.css";

export default function Section({ id, children }) {
  const className = `${styles.section}`;

  return (
    <div className="section">
      <section id={id} className={className}>
        {children}
      </section>
    </div>
  );
}
