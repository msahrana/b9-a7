import bannerImg from "./../../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="hero lg:bg-cover lg:bg-center lg:h-[600px] text-center lg:mt-4 rounded-2xl"
      style={{backgroundImage: `url(${bannerImg})`}}
    >
      <div>
        <div className="hero-content text-center text-neutral-content items-center justify-center">
          <div className="text-center">
            <h1 className="mb-5 text-5xl font-bold pt-20">
              Discover an exceptional cooking <br />
              class tailored for you!
            </h1>
            <p className="mb-5">
              <span className="text-xl font-semibold text-green-400">
                Mama Restaurant
              </span>{" "}
              is a cozy and welcoming eatery known for its home style cooking
              and comforting ambiance. <br /> Mama Restaurant is the perfect
              spot for a casual meal with family and friends.
            </p>
            <button className="btn bg-[#0be58a] text-xl font-semibold rounded-full border-none">
              Explore Now
            </button>
            <button className="btn btn-outline text-white rounded-full ml-10 text-xl font-semibold">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
