import requests from "../util/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide  text-2xl">
        {Object.entries(requests).map(([key, { title }]) => (
          <>
            <h1
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className=" last:pr-24 cursor-pointer transition duration-125
          transform hover:scale-125 hover:text-white
          active:text-red-500 "
            >
              {title}
            </h1>
          </>
        ))}
      </div>
      <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202A] to-white h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
