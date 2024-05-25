import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full lg:min-h-[477px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-[1080px] lg:min-h-[477px] mx-auto hero-content lg:justify-start">
          <div className="max-w-md">
            <h1 className="mb-2 mt-2 text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
              STARBUCKS RESERVE
            </h1>
            <p className="mb-5 text-sm md:text-base lg:text-lg text-white font-light">
              Since 1971, it always has been and will always be about quality.
              We&apos;re passionate about ethically sourcing only the finest
              Arabica coffee beans and roasting them with great care. Our
              passion for coffee is rivaled only by our love of sharing it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
