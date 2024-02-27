import { ReactNode } from "react";

import Text from "@/app/components/text";

import styles from "./styles.module.sass";

interface ButtonProps {
  bold?: true;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "l";
  style?: object;
  textCenter?: true;
  transparent?: true;
}

export default function Button({
  bold,
  children,
  className,
  onClick,
  size,
  style,
  textCenter,
  transparent,
}: ButtonProps) {
  const updatedClassName = `
    ${styles.button}
    ${size && styles[size]}
    ${transparent && styles.transparent}
    ${className}
  `;

  return (
    <button className={updatedClassName} style={style} onClick={onClick}>
      <Text
        className={styles.buttonText}
        align={textCenter && "center"}
        bold={bold}
      >
        {children}
      </Text>
    </button>
  );
}
