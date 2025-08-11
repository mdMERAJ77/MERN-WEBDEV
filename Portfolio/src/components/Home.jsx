import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import profilePic from "../assets/profilePic.jpg";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className="h-screen md:h-[750px] mx-auto px-4 md:px-20 pt-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2  mt-12 md:mt-24  order-2 md:order-1">
            <span>Welcome in my feed</span>
            <div className="flex text-2xl space-x-1 xl:text-4xl md:text-2.5xl md:mt-2 ">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold "
                strings={["Developer", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am an engineering student and an aspiring Full Stack{" "}
              <span className="text-red-700 font-bold">MERN</span>, developer
              currently building my skills in MongoDB, Express.js, React.js, and
              Node.js. I enjoy creating simple, functional web applications and
              continuously learning new technologies to grow into a professional
              developer.
            </p>

            <br />
            {/*social media icons */}
            <div className="h-[200px] flex justify-between items-center xl:flex-row md:flex-col flex-col md:space-y-6  ">
              <div className="mt-5">
                <h1 className="font-semibold text-center">Available on</h1>
                <ul className="flex space-x-5 text-xl md:text-3xl mt-3.5">
                  <li className="hover:scale-105 duration-200">
                    <a href="https://github.com/mdMERAJ77" target="_blank">
                      <FaGithubSquare />
                    </a>
                  </li>
                  <li className="hover:scale-105 duration-200">
                    <a
                      href="https://www.linkedin.com/in/mdmeraj77/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="hover:scale-105 duration-200">
                    <a
                      href="https://mail.google.com/mail/u/0/?ogbl#inbox"
                      target="_blank"
                    >
                      <BiLogoGmail />
                    </a>
                  </li>
                  <li className="hover:scale-105 duration-200">
                    <a
                      href="https://www.instagram.com/md12_3meraj/"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center flex-col">
                  <h1 className="font-md text-center">Currently working on</h1>
                  <ul className="flex space-x-5 text-xl md:text-3xl mt-3.5">
                    <BiLogoMongodb className="rounded-full border-[1px] p-1" />
                    <SiExpress className="hover:scale-105 duration-200 rounded-full border-[1px] p-1" />
                    <FaReact className="hover:scale-105 duration-200 rounded-full border-[1px] p-1" />
                    <FaNodeJs className="hover:scale-105 duration-200 rounded-full border-[1px] p-1" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/**RIGHT SIDE */}
          <div className="md:w-1/2 flex justify-center items-center  md:mt-18 mb-[-20px] order-1 md:order-2">
            <div className="p-[2px] rounded-full  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 md:ml:48">
              <img
                src={profilePic}
                alt=""
                className="md:w-[250px] md:h-[250px]  xl:w-[400px] xl:h-[400px]  w-[150px] h-[150px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <br />
      </div>
      <hr className="border-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mt-1" />
    </>
  );
};
// md:block hidden
export default Home;
