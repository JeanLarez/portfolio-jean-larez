import Technologies from "./Technologies";

const Card = ({ icon, title, descriptionEng, technologies }) => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white p-4 sm:p-6">
        <a href="#">
          <div className="h-10 w-10 text-pink-500 text-4xl">{icon}</div>
          <h2 className="mt-4 text-xl font-bold text-black">{title}</h2>
          <p className="mt-1 text-sm text-gray-600">{descriptionEng}</p>
        </a>
        <div className="mt-4 flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <Technologies key={tech} name={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
