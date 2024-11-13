import Footer from "../containers/footer";
import Header from "../containers/Header";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layouts;
