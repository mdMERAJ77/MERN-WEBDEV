import c from "../assets/c.png";
import Html from "../assets/html.png";
import Css from "../assets/css.jpg";
import JavaScript from "../assets/javascript.png";
import MongoDB from "../assets/mongodb.jpg";
import Express from "../assets/express.png";
import React from "../assets/reactjs.png";
import Nodejs from "../assets/nodejs.webp";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: c,
      name: "C Programming",
      para: "C is a powerful, general-purpose programming, language developed in the early 1970s by Dennis Ritchie at Bell Labs.  It is widely used for system programming, operating systems, embedded systems, and performance-critical applications. C provides low-level memory access, a simple syntax, and the ability to write highly efficient code.",
    },
    {
      id: 2,
      logo: Html,
      name: "HTML",
      para: "The standard markup language for creating web pages. It structures content using elements like headings, paragraphs, images, and links, forming the backbone of every website.",
    },
    {
      id: 3,
      logo: Css,
      name: "CSS",
      para: "A style sheet language that controls the appearance of web pages, including layout, colors, fonts, and responsiveness.",
    },
    {
      id: 4,
      logo: JavaScript,
      name: "JAVASCRIPT",
      para: "A versatile programming language that enables interactive and dynamic content on websites, such as animations, forms, and API communication.",
    },
    {
      id: 5,
      logo: MongoDB,
      name: "MONGODB",
      para: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. It is ideal for handling large amounts of unstructured or semi-structured data. MongoDB is highly scalable and supports advanced querying and indexing features.",
    },
    {
      id: 6,
      logo: Express,
      name: "EXPRESS",
      para: "Express.js is a fast and minimal web framework for Node.js. It helps developers build backend APIs and web servers efficiently. Express handles routing, middleware, and request-response cycles with ease. Its lightweight nature allows flexible customization for different projects.",
    },
    {
      id: 7,
      logo: React,
      name: "REACT",
      para: "React is a JavaScript library developed by Facebook for building user interfaces. It uses a component-based architecture, making UIs easier to develop and maintain. The virtual DOM in React improves performance by updating only necessary parts. It is widely used for creating dynamic, single-page web applications.",
    },
    {
      id: 8,
      logo: Nodejs,
      name: "NODEJS",
      para: `Node.js is a runtime environment that allows JavaScript to run on the server side.
             It uses a non-blocking, event-driven architecture for high performance.
             Node.js is perfect for building scalable, real-time applications like chats and games.
             It enables developers to use JavaScript for both frontend and backend development.`,
    },
  ];

  return (
    <div id="Portfolio" className="mx-auto px-4 md:px-20 mb-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-6 tracking-wide">
          Portfolio
        </h1>
        <br />
        <span className="underline font-semibold">Featured Projects  JUST FOR DUMMY👨‍💻✅</span>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-5 mt-3">
          {cardItem.map(({ id, logo, name, para }) => {
            return (
              <div
                key={id}
                className="md:w-[350px] md:h-[350px] lg:w-[330px] lg:h-[350px] xl:w[370px] xl:h-[370px] 2xl:w[400px] 2xl:h-[340px] border-2 flex flex-col items-center text-center pt-2 mb-3  shadow-lg rounded-lg border-blue-300 hover:scale-105 duration-200"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full object-cover"
                />
                <div className="font-semibold text-xl my-2">{name}</div>
                <p className="px-10 mb-5 text-gray-700 line-clamp-3 max-h-20 overflow-y-auto no-scrollbar cursor-pointer">
                  {para}
                </p>
                <div className="mt-auto mb-5 flex gap-3">
                  <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white rounded">
                    Dummy
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 px-4 py-2 text-white rounded">
                    Source Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
