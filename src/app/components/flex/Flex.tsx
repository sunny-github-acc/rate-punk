import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface FlexProps {
  align?: "center";
  children: ReactNode;
  className?: string;
  direction?: "row";
  justify?: "center" | "space-between";
}

export default function Flex({
  align,
  children,
  direction,
  justify,
  ...props
}: FlexProps) {
  const className = `
    ${props.className}
    ${styles.flex}
    ${direction && styles.row}
    ${align && styles["align-" + align]}
    ${justify && styles["justify-" + justify]}
  `;

  return <div className={className}>{children}</div>;
}
