import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface FlexProps {
  align?: "center";
  children: ReactNode;
  className?: string;
  justify?: "center" | "space-between";
  row?: true;
  spacing?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
}

export default function Flex({
  align,
  children,
  className,
  justify,
  row,
  spacing,
}: FlexProps) {
  const updatedClassName = `
    ${styles.flex}
    ${row ? styles.row : styles.column}
    ${align && styles["align-" + align]}
    ${justify && styles["justify-" + justify]}
    ${spacing && styles["spacing-" + spacing]}
    ${className}
  `;

  return <div className={updatedClassName}>{children}</div>;
}
