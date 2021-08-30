const Intro = () => {
  return (
    <section className="md:flex bg-white md:flex-row-reverse items-center">
      <div className="md:flex-[50%] lg:flex-[60%] px-4 md:px-6">
        <h1 className="text-2xl lg:text-4xl font-thin text-center">
          Hello <span className="font-thin text-indigo-600">I'm Pavan </span>{" "}
        </h1>

        <p className="text-center text-lg lg:text-lg mt-2 font-sans">
          I live and work near Bangalore, India. At my day job, I develop
          ReactJs websites. I also freelance when I can, mostly building custom
          websites and apps that you can’t get from a template. I have 2 years
          of experience in Web Development, While my focus is mobile-first
          responsive websites with HTML, JavaScript, CSS (Tailwind). I handle
          most backend stuff with MySQL and PostgreSQL along with NodeJs SQL
          package, very familiar with NoSQL firebase, React-Redux state
          management, PERN stack development, ReactJs with Firebase, very much
          interested in RESTful api's
        </p>
      </div>
      <div className="mt-4 md:mt-0 md:flex-[50%] lg:flex-[40%]">
        <img src="/images/Skill.jpg" alt="" className="" />
      </div>
    </section>
  );
};

export default Intro;
