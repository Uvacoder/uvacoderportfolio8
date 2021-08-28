import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="relative flex-1">
        <div className="p-3 space-y-4 lg:ml-60 lg:mt-36">
          <h1 className="text-8xl font-semibold text-gray-700 lg:text-[7rem]">
            Pavan <span className="font-thin text-gray-600">Rathod.</span>{" "}
          </h1>
          <p className="text-2xl ml-2">Full Stack Developer</p>
          <p className="text-xl ml-2">Bangalore, India</p>
          <button className="profile-button">View Profile</button>
        </div>

        <div className="hero-links">
          <Link href="https://github.com/Pavanarathod">
            <img src="/images/GitOne.png" alt="" className="image" />
          </Link>
          <Link href="https://www.linkedin.com/in/pavan-kumar-dr-b51b2a1b6/">
            <img src="/images/LinkedinOne.png" alt="" className="image" />
          </Link>

          <Link href="https://twitter.com/Iam_PavanRathod">
            <img src="/images/twitter.png" alt="" className="image" />
          </Link>

          <Link href="https://www.instagram.com/pavan_rathod_13/">
            <img src="/images/instagram.png" alt="" className="image" />
          </Link>
        </div>
      </div>
      <div className="hidden lg:inline-flex">
        <img src="/images/HeroOne.jpg" alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
