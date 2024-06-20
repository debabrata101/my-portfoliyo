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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-20 mb-10 rounded text-black">
      <div
        className="card card-compact w-96 shadow-2xl "
        style={{
          boxShadow: "0px 4px 20px rgb(96, 235, 230)",
        }}
      >
        {ProjectData.map((project, index) => (
          <div key={index} className="">
            <figure className="relative">
              <Link to={project.liveSiteUrl}>
                <img
                  src={`${project.image}`}
                  alt="Project Image"
                  className="shadow-lg"
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
                <Link to={project.client} className="btn btn-outline h-5 w-28 hover:bg-blue-600 font-bold">
                  Client
                </Link>
                <Link to={project.server} className="btn btn-outline h-5 w-28 hover:bg-blue-600 font-bold">
                  Server
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
