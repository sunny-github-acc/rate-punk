import { ReactNode } from "react";
import { Caveat_Brush } from "next/font/google";

import styles from "./styles.module.sass";

interface TextProps {
  align?: "center";
  bold?: boolean;
  children: ReactNode;
  className?: string;
  color?: "bright" | "light";
  italic?: boolean;
}

const caveatBrush = Caveat_Brush({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "400",
});

export default function Text({
  align,
  bold,
  children,
  className,
  color,
  italic,
}: TextProps) {
  const updatedClassName = `
    ${align && styles[`align-${align}`]}
    ${bold && styles.bold}
    ${color && styles[color]}
    ${italic && caveatBrush.className}
    ${italic && styles.italic}
    ${className}
  `;

  return <div className={updatedClassName}>{children}</div>;
}
