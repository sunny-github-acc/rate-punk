import Image from "next/image";
import { ChangeEvent } from "react";

import Button from "@/app/components/button";
import Flex from "@/app/components/flex";
import Text from "@/app/components/text";

import styles from "./styles.module.sass";

interface InputProps {
  className?: string;
  copy?: boolean;
  invalid?: true | false;
  invalidText?: string;
  loading?: boolean;
  onChange: (value?: string) => void;
  placeholder?: string;
}

export default function Input({
  className,
  copy,
  invalid,
  invalidText,
  loading,
  onChange,
  placeholder,
}: InputProps) {
  const updatedClassName = `${styles.inputContainer} ${invalid && styles.invalid} ${className}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleCopy = () => {
    if (!loading) {
      onChange();
    }
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
          className={`${styles.logo} ${loading && styles.loading}`}
          src={loading ? "/loading.svg" : "/email.svg"}
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

      {copy && (
        <Flex>
          <Button className={styles.button} bold onClick={handleCopy}>
            Copy
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
