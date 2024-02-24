import { ReactNode } from "react";

import Flex from "@/app/components/flex/Flex";
import Header from "@/app/components/layout/Header";

import styles from "./styles.module.sass";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex className={styles.layout}>
      <Header />
      {children}
      <Flex>footer</Flex>
    </Flex>
  );
}
