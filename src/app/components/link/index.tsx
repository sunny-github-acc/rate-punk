import NextLink from "next/link";
import { ReactNode } from "react";

import styles from "./styles.module.sass";

interface InputProps {
  children: ReactNode;
  className?: string;
  href: string;
  newTab?: true;
}

export default function Link({
  children,
  className,
  href,
  newTab,
}: InputProps) {
  return (
    <NextLink
      href={href}
      className={`${styles.link} ${className}`}
      target={newTab && "_blank"}
      rel="noopener noreferrer"
    >
      {children}
    </NextLink>
  );
}
