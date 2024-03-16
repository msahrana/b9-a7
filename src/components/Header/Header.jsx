import icon from "./../../assets/icon.png";

const Header = () => {
  return (
    <div className="navbar bg-[#d7ffef]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Mama Restaurant</a>
      </div>
      <div className="pr-60">
        <ul className="menu menu-vertical lg:menu-horizontal rounded-box space-x-6">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <label className="input input-bordered flex items-center gap-2 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
