import { ReactNode } from "react";
import styles from "./SectionRow.module.css";

interface SectionRowProps {
  children?: ReactNode;
  rowTitle?: string;
}

const SectionRow: React.FC<SectionRowProps> = ({ children, rowTitle }) => {
  return (
    <div className={styles.sectionRowOptions}>
      <h3 className={styles.title}>{rowTitle}</h3>
      {children}
    </div>
  );
};

export default SectionRow;
