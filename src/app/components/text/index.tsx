import { ReactNode } from "react";
import { Caveat_Brush } from "next/font/google";

import styles from "./styles.module.sass";

interface TextProps {
  bold?: boolean;
  children: ReactNode;
  className?: string;
  italic?: boolean;
  light?: boolean;
}

const caveatBrush = Caveat_Brush({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "400",
});

export default function Text({
  bold,
  children,
  className,
  italic,
  light,
}: TextProps) {
  const updatedClassName = `
    ${bold && styles.bold}
    ${italic && caveatBrush.className}
    ${italic && styles.italic}
    ${light && styles.light}
    ${className}
  `;

  return <div className={updatedClassName}>{children}</div>;
}
