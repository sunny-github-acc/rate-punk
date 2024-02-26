import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface CardProps {
  children: ReactNode;
  light?: true;
}

export default function Card({ children, light }: CardProps) {
  return (
    <div className={`${styles.card} ${light && styles.light}`}>{children}</div>
  );
}
