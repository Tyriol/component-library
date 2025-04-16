import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.sectionOptions}>{children}</div>
    </section>
  );
};

export default Section;
