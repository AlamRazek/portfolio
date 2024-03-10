import arrayDestruct from "../../assets/portfolio/arrayDestruct.png";

import jobnest from "../../assets/portfolio/jobnest.png";
import accumed from "../../assets/portfolio/accumed.png";
import bistroBoss from "../../assets/portfolio/bistro-boss.png";

import eventGuru from "../../assets/portfolio/event-guru.png";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      link: "https://fine-tech.web.app/",
      client: "https://github.com/AlamRazek/FineTech-Client",
      server: "https://github.com/AlamRazek/FineTech-server",
    },
    {
      id: 2,
      src: accumed,
      link: "https://accumed-diagnostics.web.app/",
      client: "https://github.com/AlamRazek/AccuMed-Diagnostics-client",
      server: "https://github.com/AlamRazek/AccuMed-Diagnostics-server",
    },
    {
      id: 3,
      src: jobnest,
      link: "https://jobnest-738ec.web.app/",
      client: "https://github.com/AlamRazek/jobNest-client",
      server: "https://github.com/AlamRazek/jobnest-server",
    },
    {
      id: 4,
      src: bistroBoss,
      link: "https://bistro-boss-f47c0.web.app/",
      client: "https://github.com/AlamRazek/Bistro-boss-client",
      server: "https://github.com/AlamRazek/Bistro-Boss-server",
    },
    {
      id: 5,
      src: eventGuru,
      link: "https://event-guru-91ee5.web.app/",
      client: "https://github.com/AlamRazek/Event-Guru",
    },
    /*     {
      id: 6,
      src: shop,
      link: "https://sunny-jelly-b7ffb1.netlify.app/",
    }, */
  ];

  return (
    <div
      name="portfolio"
      id="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            PortFolio
          </p>
          <p className="py-6">Check Out Some of My Work Right Here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, client, server }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}> Demo</a>
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <a>Code </a>
                </button>
                <dialog id="my_modal_3" className="modal text-black">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">Code:</h3>
                    <p className="py-4 flex gap-2">
                      <span>
                        {" "}
                        <FaLink className="" />
                      </span>
                      <a
                        href={client}
                        target="_blank"
                        className="text-blue-700 font-bold"
                      >
                        Client-side code
                      </a>
                    </p>
                    {server ? (
                      <p className="py-4 flex gap-2">
                        <FaLink className="" />
                        <a
                          href={server}
                          target="_blank"
                          className="text-blue-700 font-bold"
                        >
                          Server-side code
                        </a>
                      </p>
                    ) : (
                      {}
                    )}
                  </div>
                </dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
