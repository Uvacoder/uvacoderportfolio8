import FooterContact from "./footer/FooterContact";
import FooterHeader from "./footer/FooterHeader";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <FooterHeader />
      </div>
      <div>
        <FooterContact />
      </div>
      <div className="hidden lg:inline-flex  lg:justify-center lg:mt-10">
        <img src="images/Mail.svg" alt="" className="h-72" />
      </div>
    </footer>
  );
};

export default Footer;
