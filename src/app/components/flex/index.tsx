import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface FlexProps {
  align?: "center";
  children: ReactNode;
  className?: string;
  desktopMargin?: "s";
  desktopPadding?: "s";
  flips?: true;
  justify?: "center" | "space-between";
  padding?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  paddingHorizontal?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  paddingVertical?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  row?: true;
  spacing?: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  style?: object;
}

export default function Flex({
  align,
  children,
  className,
  desktopMargin,
  desktopPadding,
  flips,
  justify,
  padding,
  paddingHorizontal,
  paddingVertical,
  row,
  spacing,
  style,
}: FlexProps) {
  const updatedClassName = `
    ${styles.flex}
    ${align && styles["align-" + align]}
    ${justify && styles["justify-" + justify]}
    ${flips && styles.flips}
    ${desktopMargin && styles["desktop-margin-" + desktopMargin]}
    ${(padding || paddingHorizontal) && styles["padding-horizontal-" + (padding || paddingHorizontal)]}
    ${(padding || paddingVertical) && styles["padding-vertical-" + (padding || paddingVertical)]}
    ${desktopPadding && styles["desktop-padding-" + desktopPadding]}
    ${row ? styles.row : styles.column}
    ${spacing && styles["spacing-" + spacing]}
    ${className}
  `;

  return (
    <div className={updatedClassName} style={style}>
      {children}
    </div>
  );
}
