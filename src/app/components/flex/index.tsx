import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface FlexProps {
  align?: "center";
  children: ReactNode;
  className?: string;
  justify?: "center" | "space-between";
  padding?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  paddingHorizontal?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  paddingVertical?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  row?: true;
  spacing?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
}

export default function Flex({
  align,
  children,
  className,
  justify,
  padding,
  paddingHorizontal,
  paddingVertical,
  row,
  spacing,
}: FlexProps) {
  const updatedClassName = `
    ${styles.flex}
    ${align && styles["align-" + align]}
    ${justify && styles["justify-" + justify]}
    ${(padding || paddingHorizontal) && styles["padding-horizontal-" + (padding || paddingHorizontal)]}
    ${(padding || paddingVertical) && styles["padding-vertical-" + (padding || paddingVertical)]}
    ${row ? styles.row : styles.column}
    ${spacing && styles["spacing-" + spacing]}
    ${className}
  `;

  return <div className={updatedClassName}>{children}</div>;
}
