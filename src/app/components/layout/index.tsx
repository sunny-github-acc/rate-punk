import { ReactNode } from "react";

import Content from "@/app/components/layout/content";
import Flex from "@/app/components/flex";
import Footer from "@/app/components/layout/footer";
import Header from "@/app/components/layout/header";

import styles from "./styles.module.sass";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex className={styles.layout}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Flex>
  );
}
