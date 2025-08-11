
const About = () => {
  return (
    <>
      <div id="About" className="mx-auto px-4 md:px-20 ">
        <h1 className="md:text-3xl text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 md:mb-6 mb-3  tracking-wide  mt-25">
          About
        </h1>
        <p>
          I’m a final-year B.Tech student and a beginner in web development,
          learning React for frontend and Node.js for backend. I enjoy building
          simple, user-friendly projects and improving my skills with every new
          challenge.
        </p>
        <br />
        <h1 className="md:text-3xl text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-6 tracking-wide">
          Education &amp; Training
        </h1>
        {/* Education List */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300">
            <h2 className="md:text-xl  font-semibold text-gray-900">
              B.Tech in Computer Science
            </h2>
            <p className="text-gray-600 md:text-xl text-sm">JIET College — 2022 - 2026</p>
            <p className="md:mt-2 text-gray-700">
              Learning software development, focusing on web technologies and
              practical projects.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900">
              Frontend Web Development Training
            </h2>
            <p className="text-gray-600">
              Self Learning &amp; Online Courses — 2025
            </p>
            <p className="mt-2 text-gray-700">
              Gaining hands-on experience in HTML, CSS, JavaScript, and React.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900">
              Backend Web Development Training
            </h2>
            <p className="text-gray-600">
              Self Learning &amp; Online Courses — 2025
            </p>
            <p className="mt-2 text-gray-700">
              Learning Node.js, Express, and MongoDB for backend application
              development.
            </p>
          </div>
        </div>
        <br />
        {/* Heading Skills & training*/}
        <h1 className="md:text-3xl text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-8 tracking-wide">
          Skills &amp; Training
        </h1>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[-18px]">
          {/* Skill Card */}
          <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-lg font-semibold text-gray-900">
              Frontend Development
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React.js &amp; Tailwind CSS</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          {/* Skill Card */}
          <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-lg font-semibold text-gray-900">
              Backend Development
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
              <li>Node.js &amp; Express.js</li>
              <li>RESTful APIs</li>
              <li>MongoDB Basics</li>
            </ul>
          </div>

          {/* Training Card */}
          <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-lg font-semibold text-gray-900">Training</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
              <li>Frontend Web Development — 2025</li>
              <li>Backend Web Development — 2025</li>
              <li>JavaScript Mastery Course — 2024</li>
            </ul>
          </div>
        </div>

        <h1 className="md:text-3xl text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-8 tracking-wide mt-10">
          Projects
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[-18px]">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900">
              Portfolio Website
            </h2>
            <p className="text-gray-600 text-sm">React, Tailwind CSS</p>
            <p className="mt-2 text-gray-700 text-sm">
              Designed and developed a personal portfolio to showcase skills,
              training, and projects. Fully responsive with a clean, modern UI.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900">Todo App</h2>
            <p className="text-gray-600 text-sm">React, nanoid</p>
            <p className="mt-2 text-gray-700 text-sm">
              Built a simple todo app with Create and Read functionalities using
              React state management. Implemented unique IDs using nanoid.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900">Weather App</h2>
            <p className="text-gray-600 text-sm">JavaScript, OpenWeather API</p>
            <p className="mt-2 text-gray-700 text-sm">
              Created a weather application that fetches real-time data from
              OpenWeather API and displays temperature, humidity, and conditions
              for any city.
            </p>
          </div>
        </div>
        <div className="learning-goals">
          <h2>Learning Goals</h2>
          <ul>
            <li>Enhance problem-solving skills through real-world projects.</li>
            <li>
              Build and optimize full-stack applications using the MERN stack.
            </li>
            <li>Gain expertise in backend and frontend development.</li>
            <li>Strengthen understanding of database management systems.</li>
            <li>
              Stay updated with emerging technologies and industry trends.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
