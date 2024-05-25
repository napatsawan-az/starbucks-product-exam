/* eslint-disable react/prop-types */
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
