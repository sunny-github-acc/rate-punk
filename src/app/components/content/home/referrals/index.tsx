import Button from "@/app/components/button";
import Card from "@/app/components/card";
import Input from "@/app/components/input";
import Text from "@/app/components/text";

import styles from "./styles.module.sass";

export default function Referrals() {
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

      <Input className={styles.input} placeholder="Enter your email address" />

      <Button className={styles.button} size="l" bold>
        Get Referral Link
      </Button>

      <Text color="light">Limits on max rewards apply.</Text>
    </Card>
  );
}
