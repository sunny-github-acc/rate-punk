import { ReactNode } from "react";

import Content from "@/app/components/layout/content/Content";
import Flex from "@/app/components/flex";
import Header from "@/app/components/layout/header/Header";

import styles from "./styles.module.sass";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex className={styles.layout}>
      <Header />
      <Content>{children}</Content>
      <Flex>footer</Flex>
    </Flex>
  );
}
