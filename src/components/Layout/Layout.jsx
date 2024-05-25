/* eslint-disable react/prop-types */
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-mulish">
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
