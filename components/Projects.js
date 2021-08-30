import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { projectsItem } from "../utils/projects";
import ProCard from "./ProCard";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-5 lg:px-7">
      <div className="p-5 flex items-center space-x-2 justify-center sm:justify-end">
        <h1 className="text-lg md:text-xl text-indigo-500 font-mono font-bold">
          Projects
        </h1>
        <ArrowDownIcon className="h-6 px-3 text-indigo-500 animate-bounce" />
      </div>
      <div className="space-y-5 md:space-y-0 px-3 md:grid md:grid-cols-3 md:gap-4 lg:grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 lg:gap-5">
        {projectsItem.map(({ id, name, git, link, image }) => (
          <ProCard
            key={id}
            img={image}
            title={name}
            link={link}
            gitlink={git}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
