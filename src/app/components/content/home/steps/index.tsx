import Image from "next/image";

import Card from "@/app/components/card";
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
    <Card>
      <Flex spacing="xxl">
        {steps.map((step) => (
          <Flex key={step.number} align="center" spacing="l">
            <Flex align="center" spacing="xl">
              <Image
                className={styles.logo}
                src={step.icon}
                alt={`${step.number} icon`}
                height={128}
                width={128}
                priority
              />
              <Text color="bright">{step.number}</Text>
            </Flex>
            <Text italic>{step.title}</Text>
            <Text align="center">{step.subtitle}</Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}
