import "./style.css";
import Header from "../header";
import Footer from "../footer";

const Index = ({ children, difference }) => {
  return (
    <div>
      <Header difference={difference} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Index;
