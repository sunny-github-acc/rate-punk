import Image from "next/image";
import { ChangeEvent } from "react";

import Flex from "@/app/components/flex";
import Text from "@/app/components/text";

import styles from "./styles.module.sass";

interface InputProps {
  className?: string;
  invalid?: true | false;
  invalidText?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function Input({
  className,
  invalid,
  invalidText,
  onChange,
  placeholder,
}: InputProps) {
  const updatedClassName = `${styles.inputContainer} ${invalid && styles.invalid} ${className}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Flex className={updatedClassName} row align="center">
      {invalid && invalidText && (
        <Text className={styles.invalidText} color="red" size="s">
          {invalidText}
        </Text>
      )}
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
      <input
        type="email"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleChange}
      />
    </Flex>
  );
}
