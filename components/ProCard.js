import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

const ProCard = ({ img, title, gitlink, link }) => {
  return (
    <div className="px-3 group py-5 shadow-sm hover:shadow-lg border border-gray-200 hover:bg-gray-50 rounded-md ">
      <div>
        <img src={img} alt="" className="object-contain" />
      </div>
      <div>
        <h1 className="text-center md:text-left text-lg md:text-sm  font-mono py-3">
          {title}
        </h1>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <Link href={gitlink}>
            <div className="flex items-center space-x-2">
              <img
                src="/images/GitTwo.png"
                alt=""
                className="h-5 cursor-pointer"
              />
              <p className="text-sm font-mono cursor-pointer">code</p>
            </div>
          </Link>

          <Link href={link}>
            <p className="text-sm font-mono text-blue-500 group-hover:underline cursor-pointer">
              view project
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
