import Layout from "@/app/components/layout";
import Referrals from "@/app/components/content/home/referrals";
import Steps from "@/app/components/content/home/steps";
import Flex from "@/app/components/flex";

export default function Home() {
  return (
    <Layout>
      <Flex spacing="l">
        <Referrals />
        <Steps />
      </Flex>
    </Layout>
  );
}
