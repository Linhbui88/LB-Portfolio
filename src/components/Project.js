const Project = ({
  title,
  img,
  code,
  deployedLink,
  description,
  technologies,
}) => {
  return (
    <div className="project-card p-3">
      <div class="card lg:card-side bg-stone-900 text-stone-300/50 shadow-2xl h-full">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div class="card-body flex-flex-col items-center">
          <h2 class="card-title text-green-900 md:text-2xl">{title}</h2>
          <p className="text-pink-500"> {technologies}</p>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm bg-green-900 text-stone-300">
              <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </button>
            <button class="btn btn-sm bg-green-900 text-stone-300">
              {" "}
              <a href={code} target="_blank" rel="noopener noreferrer">
                Repo
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
