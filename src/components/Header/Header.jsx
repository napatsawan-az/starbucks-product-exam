import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="block sticky top-0 bg-stbGray h-[72px] py-3 w-full z-20">
        <nav className="max-w-[1080px] mx-auto h-12 px-3">
          <ul>
            <li className="">
              <Link to="/">
                <img src="/logo.png" alt="Logo" className="w-12 h-12" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
