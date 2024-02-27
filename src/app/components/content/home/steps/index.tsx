import Image from "next/image";

import Flex from "@/app/components/flex";

import styles from "./styles.module.sass";
import Text from "@/app/components/text";

export default function Steps() {
  const steps = [
    {
      icon: "invite.svg",
      number: "STEP 1",
      title: "INVITE FRIENDS",
      subtitle: "Refer friends with your unique referral link.",
    },
    {
      icon: "collect-coins.svg",
      number: "STEP 2",
      title: "COLLECT COINS",
      subtitle:
        "Get 1 coin for each friend that installs our extension using your referral link.",
    },
    {
      icon: "voucher.svg",
      number: "STEP 3",
      title: "GET VOUCHER",
      subtitle:
        "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    },
  ];

  return (
    <Flex
      paddingHorizontal="l"
      paddingVertical="xxl"
      className={styles.stepContainer}
    >
      <Flex spacing="xxxl">
        {steps.map((step, index) => (
          <Flex
            key={step.number}
            className={`${styles.step} ${index % 2 !== 0 && styles.reverted}`}
            align="center"
            spacing="l"
          >
            <Flex align="center" spacing="xxl" style={{ marginBottom: "32px" }}>
              <Image
                className={styles.logo}
                src={step.icon}
                alt={`${step.number} icon`}
                height={128}
                width={128}
                priority
              />
            </Flex>

            <Flex align="center" spacing="l" className={styles.texts}>
              <Text color="bright" bold>
                {step.number}
              </Text>
              <Text italic>{step.title}</Text>
              <Text align="center">{step.subtitle}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
