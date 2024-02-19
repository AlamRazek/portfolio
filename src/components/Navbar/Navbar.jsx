import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    /*  <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Razek</h1>
      </div>

    </div> */
    /*     <div className="navbar flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div className="flex-1">
        <h1 className="text-5xl font-signature ml-2">Razek</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ id, link }) => (
            <li key={id}>
              <a className="capitalize font-medium text-gray-300 hover:scale-125 duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div> */

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map(({ id, link }) => (
              <li key={id}>
                <a className="capitalize font-medium text-gray-700 hover:scale-125 duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="text-5xl font-signature ml-2">Razek</a>
      </div>

      <div className="navbar-end">
        {/*  <a className="btn">Button</a> */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map(({ id, link }) => (
              <li key={id}>
                <a className="capitalize font-medium text-gray-700 hover:scale-125 duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
