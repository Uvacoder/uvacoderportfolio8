import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="relative flex-1">
        <div className="p-3 space-y-4 lg:ml-60 lg:mt-36">
          <h1 className="text-8xl  text-gray-700 lg:text-[7rem]">
            Pavan <span className="font-thin text-indigo-500">Rathod.</span>{" "}
          </h1>
          <p className="text-2xl ml-2 font-mono">Full Stack Developer</p>
          <p className="text-xl ml-2 font-mono">Bangalore, India</p>
          <div className="flex items-center space-x-2 ml-2">
            <img src="/images/Phone.png" alt="" className="h-5" />
            <p>+91 8310525962</p>
          </div>
          <div className="flex items-center space-x-2 ml-2">
            <img src="/images/Gmail.png" alt="" className="h-5" />
            <Link href="mailto:#">
              <p className="cursor-pointer">pavan.pattinson@gmail.com</p>
            </Link>
          </div>
        </div>

        <div className="hero-links">
          <Link href="https://github.com/Pavanarathod">
            <img src="/images/GitOne.png" alt="Git" className="image" />
          </Link>
          <Link href="https://www.linkedin.com/in/pavan-kumar-dr-b51b2a1b6/">
            <img src="/images/linkedin.png" alt="Link" className="image" />
          </Link>

          <Link href="https://twitter.com/Iam_PavanRathod">
            <img src="/images/twitter.png" alt="Twitter" className="image" />
          </Link>

          <Link href="https://www.instagram.com/pavan_rathod_13/">
            <img src="/images/instagram.png" alt="Insta" className="image" />
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
