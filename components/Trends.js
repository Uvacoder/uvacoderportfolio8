import { ArrowDownIcon } from "@heroicons/react/solid";

const Trends = () => {
  return (
    <section className="min-h-screen bg-gray-50 md:min-h-[30vh] lg:min-h-[40vh] lg:px-7">
      <div className="flex items-center justify-center py-1 space-x-2 lg:justify-end">
        <h1 className="text-lg font-mono">Tech Stack</h1>
        <ArrowDownIcon className="h-7 bg-gray-200 rounded-full px-2 py-2" />
      </div>
      <div className="md:grid md:grid-cols-3 items-center gap-5 px-3 py-3 space-y-3 lg:space-y-0">
        <div className="border border-gray-200 bg-gray-50 shadow-sm rounded-md py-3">
          <h1 className="text-center text-lg font-mono">Front-end</h1>

          <div className="flex items-center flex-col lg:flex-row space-y-3 lg:justify-between p-7 space-x-4">
            <img src="/images/skills/React.png" alt="" className=" h-14" />
            <img src="/images/skills/Next.png" alt="" className=" h-14" />
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-50 shadow-sm rounded-md py-3">
          <h1 className="text-center text-lg font-mono">Back-end</h1>

          <div className="flex flex-col lg:flex-row space-y-3 justify-around items-center p-7 space-x-4">
            <img
              src="/images/skills/Node.png"
              alt=""
              className=" object-contain h-14"
            />
            <img src="/images/skills/Py.png" alt="" className=" h-14" />
          </div>
        </div>
        <div className="border border-gray-200 bg-gray-50 shadow-sm rounded-md py-3">
          <h1 className="text-center text-lg font-mono">Databases</h1>

          <div className="flex flex-col lg:flex-row space-y-3 justify-between items-center p-7 space-x-4">
            <img
              src="/images/skills/Mongo.png"
              alt=""
              className=" object-contain h-14"
            />
            <img
              src="/images/skills/Fire.png"
              alt=""
              className=" object-contain h-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
