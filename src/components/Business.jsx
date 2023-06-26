import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";
import FeatureCard from "./FeatureCard";
const Business = () => {
  return (
    <section
      id="features"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" text="Get Started" />
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
      >
        {features?.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
