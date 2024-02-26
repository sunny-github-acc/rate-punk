import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface FlexProps {
  align?: "center";
  children: ReactNode;
  className?: string;
  directionRow?: true;
  justify?: "center" | "space-between";
  spacing?: "m" | "l" | "xl" | "xxl";
}

export default function Flex({
  align,
  children,
  className,
  directionRow,
  justify,
  spacing,
}: FlexProps) {
  const updatedClassName = `
    ${styles.flex}
    ${directionRow && styles.row}
    ${align && styles["align-" + align]}
    ${justify && styles["justify-" + justify]}
    ${spacing && styles["spacing-" + spacing]}
    ${className}
  `;

  return <div className={updatedClassName}>{children}</div>;
}
