import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col items-start">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg leading-10">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>

        <p className="mt-8 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deails. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-8 flex flex-wrap gap-5">
          <Button label="Show now!" iconURL={arrowRight} />
          <Button
            label="Learn more"
            className="bg-white border-slate-gray !text-slate-gray ring-slate-gray/20 hover:ring-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
