import html from "../../assets/pic/html.png";
import css from "../../assets/pic/css.png";
import javascript from "../../assets/pic/javascript.png";
import reactImage from "../../assets/pic/react.png";
import firebase from "../../assets/pic/firebase.png";
import node from "../../assets/pic/node.png";
import express from "../../assets/pic/express-js-4.png";
import github from "../../assets/pic/github.png";
import tailwind from "../../assets/pic/tailwind.png";
import mongoDB from "../../assets/pic/MongoDB.png";
import stripe from "../../assets/pic/stripe.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-white",
    },
    {
      id: 6,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-800",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: express,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-700",
    },
    {
      id: 11,
      src: stripe,
      title: "Stripe",
      style: "shadow-violet-400",
    },
  ];

  return (
    <div
      name="experience"
      id="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the TechNologies i have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
