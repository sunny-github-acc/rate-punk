"use client";

import Image from "next/image";
import { useState } from "react";

import Button from "@/app/components/button";
import Card from "@/app/components/card";
import Flex from "@/app/components/flex";
import Input from "@/app/components/input";
import Text from "@/app/components/text";

import styles from "./styles.module.sass";

export default function Referrals() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleEmail = (email: string) => {
    setEmail(email);
    setIsValidEmail(true);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubmitted(true);
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <Card light>
      <Text className={styles.title} italic>
        REFER FRIENDS AND GET REWARDS
      </Text>

      <Text className={styles.subtitle}>
        Refer your friends to us and earn hotel booking vouchers. We&apos;ll
        give you 1 coin for each friend that installs our extension. Minimum
        cash-out at 20 coins.
      </Text>

      <Flex spacing="l">
        {isSubmitted && (
          <Flex spacing="l" row>
            <Image
              className={styles.logo}
              src="success.svg"
              alt="Success icon"
              height={24}
              width={24}
              priority
            />
            <Text bold>Your email is confirmed!</Text>
          </Flex>
        )}

        <Input
          className={styles.input}
          placeholder="Enter your email address"
          onChange={handleEmail}
          invalid={!isValidEmail}
          invalidText="Invalid Email"
        />
      </Flex>

      <Button className={styles.button} size="l" bold onClick={handleSubmit}>
        Get Referral Link
      </Button>

      <Text color="light">Limits on max rewards apply.</Text>
    </Card>
  );
}
