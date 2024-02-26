import { ReactNode } from "react";

import Text from "@/app/components/text";

import styles from "./styles.module.sass";

interface ButtonProps {
  bold?: true;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "l";
  transparent?: true;
}

export default function Button({
  bold,
  children,
  className,
  onClick,
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
    <button className={updatedClassName} onClick={onClick}>
      <Text className={styles.buttonText} bold={bold}>
        {children}
      </Text>
    </button>
  );
}
