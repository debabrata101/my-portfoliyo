import { Link } from "react-router-dom";
import Image1 from "../assets/project/movieImage.jpg";

const Project = () => {
  const ProjectData = [
    {
      image: `${Image1}`,
      Name: "MovieFlix",
      liveSiteUrl: "https://movie-flix-client.vercel.app/",
      client: "https://github.com/debabrata101/MovieFlix_client",
      server: "https://github.com/debabrata101/MovieFlix_server",
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-5xl text-center mt-8 font-bold font-pacifico ">
          My <span className="text-primary ">Project</span>
        </h2>
        <hr className=" border border-spacing-5 h-2 w-96 mt-4 bg-blue-500 mx-auto"></hr>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-5 md:m-20 mb-10 rounded text-black">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="card card-compact w-full md:w-96 shadow-2xl shadow-slate-500 rounded-lg"
          >
            <figure className="relative rounded-t-lg overflow-hidden">
              <Link to={project.liveSiteUrl}>
                <img
                  src={`${project.image}`}
                  alt="Project Image"
                  className="shadow-lg w-full h-auto"
                />
              </Link>
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 transform transition-transform duration-300 hover:scale-110">
                <Link to={project.liveSiteUrl}>Live Preview</Link>
              </figcaption>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center font-bold">
                {project.Name}
              </h2>
              <div className="card-actions justify-between">
                <Link
                  to={project.client}
                  className="btn btn-outline w-28 hover:bg-blue-600 font-bold"
                >
                  Client
                </Link>
                <Link
                  to={project.server}
                  className="btn btn-outline w-28 hover:bg-blue-600 font-bold"
                >
                  Server
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
