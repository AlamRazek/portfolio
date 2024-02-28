import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="About"
      className="w-full md:min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a skilled MERN-stack developer with a strong emphasis on
          front-end development. My expertise lies in crafting immersive and
          user-centric digital experiences using MongoDB, Express.js, React.js,
          and Node.js. With a keen eye for design and a commitment to
          innovation, I excel in translating conceptual ideas into polished,
          functional interfaces. My passion for front-end development drives me
          to stay updated with the latest trends and technologies, ensuring that
          the solutions I create are both contemporary and user-friendly. I
          thrive in collaborative environments where I can leverage my
          creativity and technical skills to bring projects to life. With a
          dedication to excellence and a proven track record of delivering
          high-quality results, I am ready to contribute my expertise to
          projects that require a focus on front-end development within the
          MERN-stack framework.
        </p>
        <br />
        <p className="text-xl">
          With a passion for problem-solving and a drive to exceed expectations,
          I am eager to contribute my talents to projects that require a strong
          focus on front-end development within the MERN-stack ecosystem.
        </p>
      </div>
    </div>
  );
};

export default About;
