import { Link } from "react-scroll";
import main from "../../assets/pic/main.png";
import { RiArrowRightSLine } from "react-icons/ri";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      id="Home"
      className="  bg-gradient-to-b from-black to-gray-800"
    >
      {/*   <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl">I'm a Full Stack Developer</h2>
          <p className="text-grey-500 py-4 max-w-md">
            I have Experience building and desgining of software. Currently, i
            love to work on web application using technologies like React.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={main}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div> */}
      <div className="hero max-w-screen-lg mx-auto min-h-screen text-white ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={main} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl sm:text-7xl">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: [" I am a Full Stack Developer"],
                }}
              />{" "}
            </h1>
            <p className="py-6">
              I have Experience building and desgining of software. Currently, i
              love to work on web application using technologies like React.
            </p>
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="group btn border-none text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio{" "}
                <span className="group-hover:rotate-90 duration-300">
                  <RiArrowRightSLine size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
