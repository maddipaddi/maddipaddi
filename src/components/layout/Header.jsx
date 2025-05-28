import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-primary p-6">
      <nav className="">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/skills"}>Skills</NavLink>
      </nav>
    </header>
  );
}
