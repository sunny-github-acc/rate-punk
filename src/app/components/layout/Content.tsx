import { ReactNode } from "react";

import Flex from "@/app/components/flex/Flex";

import styles from "./styles.module.sass";

interface ContentProps {
  children?: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <Flex className={styles.content}>{children}</Flex>;
}
