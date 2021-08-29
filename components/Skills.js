const Skills = () => {
  return (
    <section className="md:flex md:items-center bg-gray-50">
      <div className="px-3 md:flex-[60%]">
        <h1 className="text-center mt-3 sm:mt-0 sm:mb-4 text-2xl lg:text-4xl lg:mb-5 font-mono">
          Skills
        </h1>
        <div className="">
          <div className="text-center space-y-4 md:space-y-2 lg:mt-5">
            <div>
              <h1 className="text-xl md:text-lg lg:text-2xl">Frontend</h1>
              <p className="text-lg md:text-sm lg:text-2xl text-gray-700">
                Reactjs, Nextjs, Redux, JavaScript
              </p>
            </div>

            <div>
              <h1 className="text-xl md:text-lg lg:text-2xl">Backend</h1>
              <p className="text-lg md:text-sm lg:text-xl text-gray-700">
                NodeJs, Python Django,
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-lg lg:text-2xl">Databases</h1>
              <p className="text-lg md:text-sm lg:text-xl text-gray-700">
                MySQL / PostgreSQL , MongoDB, Google Firebase
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-2 md:mt-5 md:flex-row md:justify-center md:space-x-5 lg:mt-28 md:px-3">
            <img
              src="/images/skills/React.png"
              alt=""
              className="skills-image"
            />
            <img
              src="/images/skills/Next.png"
              alt=""
              className="skills-image"
            />
            <img
              src="/images/skills/Node.png"
              alt=""
              className="skills-image"
            />
            <img src="/images/skills/Py.png" alt="" className="skills-image" />
          </div>
        </div>
      </div>
      <div className="hidden md:inline-flex md:flex-[40%]">
        {" "}
        <img src="/images/Skill.jpg" alt="" />
      </div>
    </section>
  );
};

export default Skills;
