import dataProjects from "../utils/dataCards";
import Technologies from "./Technologies";

function Card(data) {


  return (
    <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white p-4 sm:p-6">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <h2 className="mt-4 text-xl font-bold text-black">{data.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{data.descrptionEng}</p>
        </a>

        <div className="mt-4 flex flex-wrap gap-1">
          <Technologies technologies={data.technologies}/>

          {/* <span className="whitespace-nowrap rounded-full bg-purple-100 border-2 border-purple-600 px-2.5 py-0.5 text-xs text-purple-600">
            {data.technology}
          </span>
          <span className="whitespace-nowrap rounded-full bg-purple-100 border-2 border-purple-600 px-2.5 py-0.5 text-xs text-purple-600">
            JavaScript
          </span> */}
        </div>
      </div>
    </article>
  );
}

export default Card;
