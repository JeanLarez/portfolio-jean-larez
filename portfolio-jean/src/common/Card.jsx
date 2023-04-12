import Technologies from "./Technologies";

const Card = ({ iconCard, title, descriptionEng, iconTechnologies }) => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_2s]">
      <div className="h-full rounded-[10px] bg-white p-4 sm:p-6">
        <a href="#">
          <div className="flex items-center mb-5">
            <div className="h-10 w-10 text-pink-500 text-4xl">{iconCard}</div>
            <h2 className="mt-2 ml-5 text-xl font-bold text-black">{title}</h2>
          </div>
          <p className="mt-1 text-sm text-gray-600 h-16">{descriptionEng}</p>
          <div className="mt-4 flex flex-wrap gap-1">
            {iconTechnologies.map((tech, item) => (
              <Technologies key={item} name={tech} />
            ))}
          </div>
        </a>
      </div>
    </article>
  );
};

export default Card;
