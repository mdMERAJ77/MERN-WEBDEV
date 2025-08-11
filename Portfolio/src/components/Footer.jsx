import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-20">
        <div className="h-[450px] sm:h-[300px] md:h-[200px] mx-auto px-4 md:px-20 py-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 ">
              <a href="https://www.linkedin.com/in/mdmeraj77/">
                <FaLinkedin size={24} className="" />
              </a>
              <a href="https://github.com/mdMERAJ77">
                <FaGithub size={24} className="" />
              </a>
              <a href="https://www.instagram.com/md12_3meraj/">
                {" "}
                <FaInstagramSquare size={24} className="" />
              </a>
              <a href="https://mail.google.com/mail/u/0/?ogbl#inbox">
                <BiLogoGmail size={24} className="" />
              </a>
            </div>
            <div className="mt-8 border-t md:mb-5 mb-0 flex flex-col items-center justify-center text-center pt-7">
              <p>&copy; 2025 Your Company. All rights reserved.</p>
              <p>🔰Support me👨💓</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
