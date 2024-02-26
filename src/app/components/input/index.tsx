import Flex from "@/app/components/flex";
import Image from "next/image";

import styles from "./styles.module.sass";

interface InputProps {
  className?: string;
  placeholder?: string;
}

export default function Input({ className, placeholder }: InputProps) {
  return (
    <Flex
      className={`${styles.inputContainer} ${className}`}
      row
      align="center"
    >
      <Flex className={styles.iconContainer}>
        <Image
          className={styles.logo}
          src="/email.svg"
          alt="Logo"
          height={16}
          width={16}
          priority
        />
      </Flex>
      <input type="text" placeholder={placeholder} className={styles.input} />
    </Flex>
  );
}
