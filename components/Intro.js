const Intro = () => {
  return (
    <section className="md:flex bg-white md:flex-row-reverse items-center">
      <div className="md:flex-[50%] lg:flex-[60%] px-4 md:px-6">
        <h1 className="text-2xl lg:text-4xl font-thin text-center">
          Hello <span className="font-thin text-indigo-600">I'm Pavan </span>{" "}
        </h1>

        <p className="text-center text-lg lg:text-xl mt-2 font-sans">
          I am freelance software engineer specialized in both front-end and
          back-end. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore ducimus, odio doloremque hic distinctio molestiae animi
          incidunt porro dolorem doloribus minima quaerat ut vero qui laboriosam
          eveniet, quibusdam blanditiis quod.
        </p>
      </div>
      <div className="mt-4 md:mt-0 md:flex-[50%] lg:flex-[40%]">
        <img src="/images/Skill.jpg" alt="" className="" />
      </div>
    </section>
  );
};

export default Intro;
