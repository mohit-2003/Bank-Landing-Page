import styles, { layout } from "../style.js";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`}
      >
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat
          repellat ab quod minima aliquam natus saepe officia at, asperiores,
          quo vitae quos repudiandae et? Sint magnam at nostrum similique!
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={google}
            alt="play_store"
            className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"
          />
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
