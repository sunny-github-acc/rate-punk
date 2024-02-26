import Image from "next/image";

import Extensions from "@/app/components/layout/footer/extensions";
import Flex from "@/app/components/flex";
import Link from "@/app/components/link";
import Text from "@/app/components/text";

import styles from "./styles.module.sass";

export default function Footer() {
  const socials = [
    "instagram.svg",
    "facebook.svg",
    "linkedin.svg",
    "twitter.svg",
    "tiktok.svg",
  ];

  const quickLinks = [
    "Price Comparison",
    "Chrome Extension",
    "How It Works",
    "Ratepunk Blog",
    "Privacy Policy",
  ];

  return (
    <Flex>
      <Extensions />

      <Flex
        className={styles.footer}
        paddingHorizontal="xxl"
        paddingVertical="xxxl"
      >
        <Flex spacing="xxxl">
          <Flex spacing="xxl">
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
            <Text>
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you&apos;re getting the best deal!
            </Text>
          </Flex>

          <Flex spacing="xxl">
            <Flex spacing="xl">
              <Text bold>QUICK LINKS</Text>
              <Flex spacing="l">
                {quickLinks.map((link) => (
                  <Link key={link} href="#">
                    {link}
                  </Link>
                ))}
              </Flex>
            </Flex>

            <Flex spacing="xl">
              <Text bold>CONTACT</Text>
              <Flex spacing="l" align="center" row>
                <Image
                  className={styles.logo}
                  src="/email-footer.svg"
                  alt="Email logo"
                  height={16}
                  width={16}
                  priority
                />
                <Text>hi@ratepunk.com</Text>
              </Flex>
            </Flex>

            <Flex spacing="xl">
              <Text bold>SOCIAL</Text>
              <Flex spacing="m" align="center" row>
                {socials.map((link) => (
                  <Link href="#" key={link}>
                    <Flex
                      key={link}
                      className={styles.social}
                      align="center"
                      padding="m"
                    >
                      <Image
                        className={styles.logo}
                        src={link}
                        alt={`${link} logo`}
                        height={16}
                        width={16}
                        priority
                      />
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Text color="light">© 2021 Ratepunk. All Rights Reserved.</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
