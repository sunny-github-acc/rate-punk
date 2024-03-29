import Image from "next/image";

import Flex from "@/app/components/flex";
import Link from "@/app/components/link";
import Text from "@/app/components/text";

import styles from "./styles.module.sass";

export default function Extensions() {
  const extensions = [
    {
      icon: "chrome.svg",
      title: "chrome web store",
      link: "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk",
    },
    {
      icon: "apple.svg",
      title: "apple app store",
      link: "https://apps.apple.com/app/ratepunk/id1607823726",
    },
  ];

  return (
    <Flex className={styles.extensionsContainer} align="center">
      <Flex className={styles.extensions} align="center" spacing="xl" flips>
        {extensions.map((extension) => (
          <Link
            key={extension.title}
            href={extension.link}
            className={styles.extensionContainer}
            newTab
          >
            <Flex align="center" row className={styles.extension}>
              <Image
                className={styles.extensionLogo}
                src={extension.icon}
                alt={`${extension.title} icon`}
                height={64}
                width={64}
                priority
              />

              <Flex>
                <Text color="white">available in the</Text>
                <Text className={styles.title} color="white" bold>
                  {extension.title}
                </Text>
              </Flex>
            </Flex>
          </Link>
        ))}

        <Flex className={styles.chromeContainer} spacing="m" align="center" row>
          <Flex spacing="s" row>
            {Array.from({ length: 5 }, (_, index) => (
              <Image
                key={index}
                className={styles.starLogo}
                src="/star.svg"
                alt={`Star ${index + 1}`}
                height={16}
                width={16}
                priority
              />
            ))}
          </Flex>

          <Flex spacing="s" row>
            <Text color="white">Chrome Store reviews</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
