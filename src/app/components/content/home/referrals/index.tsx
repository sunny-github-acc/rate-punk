"use client";

import Image from "next/image";
import { useState } from "react";

import Button from "@/app/components/button";
import Flex from "@/app/components/flex";
import Input from "@/app/components/input";
import Text from "@/app/components/text";

import styles from "./styles.module.sass";

export default function Referrals() {
  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const referral = "https://ratepunk.com/referral";

  const handleEmail = (email?: string) => {
    email && setEmail(email);
    setIsValidEmail(true);
    setIsSubmitted(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referral);
      setErrorText("");
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      setErrorText("Failed to Copy");
      setIsCopied(false);
    }
  };

  // lets pretend this function is handled in the backend ; ))
  const putEmail = async () => {
    setIsSubmitting(true);

    // you didn't see this ; )
    const apiKey =
      "$2b$10$.dBsEOAK0MtPHKkxwLMZk.JKXECPmRc4DYqG3l7a1IiYJnLucJeBu";
    const binId = "65ddadd11f5677401f3506ac";

    const url = `https://api.jsonbin.io/v3/b/${binId}`;
    const data = { email };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-key": apiKey,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setErrorText("Server error");
      } else {
        setIsSubmitted(true);
      }
    } catch (error: any) {
      setErrorText("Server error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      if (!isSubmitting) {
        putEmail();
      }
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <Flex
      className={styles.referralsContainer}
      paddingHorizontal="l"
      paddingVertical="xxl"
      desktopPadding="s"
    >
      <Flex className={styles.referrals}>
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

          {isCopied && (
            <Flex spacing="l" row>
              <Image
                className={styles.logo}
                src="success.svg"
                alt="Success icon"
                height={24}
                width={24}
                priority
              />
              <Text bold>Copied!</Text>
            </Flex>
          )}

          {isSubmitted ? (
            <Input
              className={styles.input}
              placeholder={referral}
              onChange={handleCopy}
              copy
            />
          ) : (
            <>
              <Input
                className={styles.input}
                placeholder="Enter your email address"
                onChange={handleEmail}
                invalid={!isValidEmail}
                invalidText={errorText || "Invalid Email"}
                loading={isSubmitting}
              />
              <Button
                className={styles.button}
                size="l"
                bold
                onClick={handleSubmit}
                textCenter
              >
                Get Referral Link
              </Button>
            </>
          )}
        </Flex>
      </Flex>

      <Text className={styles.text} color="light">
        Limits on max rewards apply.
      </Text>
    </Flex>
  );
}
