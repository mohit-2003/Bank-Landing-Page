import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
const CardDeal = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut
          saepe maiores vel doloremque nemo aliquam consequatur eveniet
          architecto. Repellendus placeat eligendi ducimus unde facere, animi
          quod nulla eveniet accusamus illo expedita ratione esse, blanditiis
          voluptas, vel nam voluptates asperiores ab repellat! Explicabo hic
          rerum nesciunt ipsam, dolore maxime asperiores.
        </p>
        <Button styles="mt-10" text="Get Started" />
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}
      >
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
