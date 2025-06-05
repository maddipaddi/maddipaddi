import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-primary p-6 shadow-md">
      <nav className="flex justify-around max-w-xl text-xl m-auto">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `relative tracking-wider after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 transition-transform active:scale-95 ${
              isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            `relative tracking-wider after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 transition-transform active:scale-95 ${
              isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
}
