"use client";

import Image from "next/image";
import { useState } from "react";

import Button from "@/app/components/button";
import Flex from "@/app/components/flex";
import Link from "@/app/components/link";

import styles from "./styles.module.sass";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOptions = [
    { name: "Chrome Extension", link: "#" },
    { name: "Price Comparison", link: "#" },
    { name: "Blog", link: "#" },
  ];

  return (
    <Flex className={styles.headerContainer} align="center">
      <Flex className={styles.header} justify="space-between">
        <Flex
          className={styles.headerIcons}
          row
          align="center"
          justify="space-between"
        >
          <Link href="https://www.ratepunk.com/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="Logo"
              height={32}
              width={32}
              priority
            />
          </Link>

          <Image
            className={styles.menu}
            src={isMenuOpen ? "/close.svg" : "/menu.svg"}
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            alt="Menu"
            height={16}
            width={16}
            priority
          />
        </Flex>

        <Flex
          className={`${styles.menuOptions} ${isMenuOpen ? "" : styles.hidden}`}
        >
          {menuOptions.map(({ name, link }) => (
            <Link key={name} href={link} newTab>
              <Flex className={styles.menuOption}>
                <Button transparent>{name}</Button>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
