import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <header className="block sticky top-0 bg-stbGray h-[72px] py-3 w-full z-20">
        <nav className="max-w-[1080px] mx-auto h-12 px-3">
          <ul className="flex justify-between">
            <li>
              <Link to="/">
                <img src="/logo.png" alt="Logo" className="w-12 h-12" />
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <p className="hidden md:block mr-3 text-white">
                  Napatsawan Armin
                </p>
                <RiAccountCircleFill className="w-12 h-12 text-stbLightGray" />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
