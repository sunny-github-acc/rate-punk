import { ReactNode } from "react";

import Text from "@/app/components/text/Text";

import styles from "./styles.module.sass";

interface ButtonProps {
  bold?: true;
  children: ReactNode;
  className?: string;
  size?: "large";
  transparent?: true;
}

export default function Button({
  bold,
  children,
  className,
  size,
  transparent,
}: ButtonProps) {
  const updatedClassName = `
    ${styles.button}
    ${size && styles[size]}
    ${transparent && styles.transparent}
    ${className}
  `;

  return (
    <button className={updatedClassName}>
      <Text className={styles.buttonText} bold={bold}>
        {children}
      </Text>
    </button>
  );
}
