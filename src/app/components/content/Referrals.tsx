import Button from "@/app/components/button/Button";
import Card from "@/app/components/card/Card";
import Input from "@/app/components/input/Input";
import Text from "@/app/components/text/Text";

import styles from "./styles.module.sass";

export default function Referrals() {
  return (
    <Card>
      <Text className={styles.title} italic>
        REFER FRIENDS AND GET REWARDS
      </Text>

      <Text className={styles.subtitle}>
        Refer your friends to us and earn hotel booking vouchers. We&apos;ll
        give you 1 coin for each friend that installs our extension. Minimum
        cash-out at 20 coins.
      </Text>

      <Input className={styles.input} placeholder="Enter your email address" />

      <Button className={styles.button} size="large" bold>
        Get Referral Link
      </Button>

      <Text light>Limits on max rewards apply.</Text>
    </Card>
  );
}
