import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}
