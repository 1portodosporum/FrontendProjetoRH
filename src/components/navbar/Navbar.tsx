import { Link } from 'react-router-dom';

function Navbar() {

  const getNavLinkClass = (path: string) => {
    return location.pathname === path
      ? "hover:underline text-yellow-300"
      : "hover:underline"
  }

  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   text-white ">
        <div className="container flex justify-between text-lg font-bold">
          <Link to="/">TEAM ONE - RH SYSTEM</Link>
          <div className="flex gap-4 text-2xl font-semibold ">
            <Link to="/home" className={getNavLinkClass("/home")}>
              Home
            </Link>
            <Link to="/list" className={getNavLinkClass("/funcionarios")}>
              Funcionários
            </Link>
            <Link to="/about" className={getNavLinkClass("/about")}>
              Sobre nós
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
