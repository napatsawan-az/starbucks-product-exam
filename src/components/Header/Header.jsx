import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-stbGray h-[72px] py-3">
        <nav className="max-w-[1080px] mx-auto h-12 px-3">
          <ul>
            <li className="">
              <Link to="/">
                <img src="/logo.png" className="w-12 h-12" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
