"use client";

import { useState } from "react";

import Flex from "@/app/components/flex/Flex";

import styles from "./styles.module.sass";
import globalStyles from "../../styles/styles.module.sass";
import Image from "next/image";
import Button from "@/app/components/button/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOptions = [
    { name: "Chrome Extension", link: "#" },
    { name: "Price Comparison", link: "#" },
    { name: "Blog", link: "#" },
  ];

  return (
    <Flex className={`${styles.headerContainer}`} align="center">
      <Flex className={`${styles.header}`} justify="space-between">
        <Flex
          className={styles.headerIcons}
          directionRow
          align="center"
          justify="space-between"
        >
          <a href="https://www.ratepunk.com/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="Logo"
              height={32}
              width={32}
              priority
            />
          </a>

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
            <a
              key={name}
              href={link}
              className={globalStyles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex className={styles.menuOption}>
                <Button transparent>{name}</Button>
              </Flex>
            </a>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
