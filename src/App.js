import './App.css'
import { Button } from './Components/components'
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; //changes layout 
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
    {/* Color Palette: [ #F7EFDA, #BADD7F, #EFACF5, #3E8440, #710C21, #500F15, #1a1a1a, #f5acde ] */}
     
     {/* Navigation Bar */}
      <div>
        <header>
        <nav className="shadow-md w-full flex-no-wrap flex justify-end fixed left-0 p-1 z-30">
          <Button variant="ghost" onClick={() => scrollToSection("home")}>Home</Button>
          <Button variant="ghost" onClick={() => scrollToSection("resume")}>Resume</Button>
          <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
          <Button variant="ghost" onClick={() => scrollToSection("extra")}>Extra</Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
          </nav>
        </header>
      </div>

{/* Main Content: Introduction Page */}
<div id = "home" className="p-2 mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow p-5 mt-10">
        {/* Left Column: Image */}
        <div className="w-full lg:w-2/5 p-4 background-color: white">
          <img
            src="./images/photo.svg"  
            alt="Profile Picture"
            className="mx-auto w-85 h-100 object-cover" // Adjust image styling as needed
          />
        </div>
        {/* Right Column */}
        <div className="w-full lg:w-3/5 p-4 text-left lg:text-left">

            {/* Typing Animation */}
            <h2 className = "typing-animation mb-3"> Welcome to My Website!  </h2>

            <p className="text-gray-600 mb-4">
              Hello! I’m <strong>Carolina Navarrete</strong>.
              I specialize in data science, python package development, full-stack development, and I am passionate about creating useful tools for the science community.  My 
              interested include scientific software development and open source technologies. 
            </p>
            <p className="text-gray-600 mb-4">
              This serves as my personal website, as well as my portfolio. Feel free to explore my projects or or get in touch with me! 
            </p>

            {/* Quick Links */}
            <div className="mt-10 flex justify-start space-x-8"> {/* Flex container for images */}
              <a href = 'https://github.com/canavarrete01'>
              <div className="flex flex-col items-center hover:transform hover:translate-y-1"> 
                <img src="./images/github.svg" alt="GitHub Logo" className="w-10 h-10"/> 
              </div>
              </a>

                <a href = "https://www.linkedin.com/in/carolina-navarrete-a764b3285/">
                <div className="flex flex-col items-center hover:transform hover:translate-y-1">
                  <img src="./images/linkedin.svg" alt="LinkedIn Logo" className="w-10 h-10" /> 
                 
                </div>
                </a>

              

              <a href = "mailto:ca.navarrete01@gmail.com"> 
              <div className="flex flex-col items-center hover:transform hover:translate-y-1">
                <img src="./images/envelope-at-fill.svg" alt="Email Logo" className="w-10 h-10" /> 
              </div>
              </a>

              <a href = "./images/CarolinaNavarrete_Resume.pdf">
              <div className="flex flex-col items-center hover:transform hover:translate-y-1">
                <img src="./images/file-earmark-person-fill.svg" alt="Resume Logo" className="w-10 h-10" /> 
            </div>
            </a>

            
          </div>

          <div className="mt-1 flex items-center justify-center lg:justify-start">
              <hr className="w-3/4 border-black inline-block align-middle" />
            </div>

        </div>
        </div>
</div>
      
{/* Resume Section */}
<div id = "resume" className="p-1">
<div className="p-10 mt-30">
  
  <div className = "header-mod">
  <h2 className="font-bold mb-4 lg:text-left">Resume</h2>
  </div>

  <div className="flex flex-col lg:flex-row items-start justify-between">
    
    {/* Left Column: 3/4 width */}
    <div className="w-full lg:w-3/4 p-4 text-center lg:text-left">
    <h3 className="text-left">Experience</h3>
      {/* <h3 className="text-3xl font-bold text-gray-900 mb-4">Experience</h3> */}
      <div className="flex items-center justify-start">
        <hr className="w-3/4 border-black inline-block align-middle" />
      </div>

      {/* Role #1 */}
      <div className = "flex flex-col lg:flex-row w-/4 mb-10">
        <div className="w-full lg:w-1/6 text-left lg:text-left">
        <p className="text-gray-700 datelocation-mod2">Aug 2024 to Present</p>
        <p className = "text-gray-600 datelocation-mod">New York, NY</p>
        </div>
        <div className="w-full lg:w-5/6 text-left lg:text-left">
          <h5 className="text-gray-600">
            Data Specialist, American Museum of Natural History
          </h5>

          <p className="mt-1 text-gray-600 mb-2">
            <li>
            Ingested JWST data into SIMPLE, an online database of hundreds of stellar objects hosted by BDNYC, using Python, SQL, and AWS.
            </li>
            <li> 
            Built ingestion and validation functions within Astrodb-Utils, the open-source Python package supporting SIMPLE, streamlining database updates and ensuring data integrity.
            </li>
            <li>
            Analyzed James Webb Space Telescope substellar data using MCMC inverse methods on high-performance computing (HPC) clusters, managing several astrophysical experiments by implementing cluster optimization.
            </li>
          </p>

          {/* Badges */}
          <div className="mt-3">
          <span class="badge tag-mod">Python</span>
          <span class="badge tag-mod">SQL</span>
          <span class="badge tag-mod">Python Packaging</span>
          <span class="badge tag-mod">Statistical Analysis</span>
          </div>
          </div>
      </div>


      {/* Role #2 */}
      <div className = "flex flex-col lg:flex-row w-/4 mb-10">
        <div className="w-full lg:w-1/6 text-left lg:text-left">
          <p className="text-gray-700 datelocation-mod2">Jan 2023 to Jul 2024</p>
          <p className = "text-gray-600 datelocation-mod">Austin, TX</p>
        </div>
        <div className="w-full lg:w-5/6 text-left lg:text-left">
        <h5 className="text-gray-600">
           Research Engineer, UT Austin
          </h5>
        <p className="text-gray-600 mb-2">
        <li> Developed Julia modules for METIS, a Bayesian statistical analysis code (Dr. Lacy, 2023), enhancing parameterization, functionality, and user experience.
        </li>
        <li> Ported core functionality of the METIS Bayesian inference codebase from legacy Python to modern, modular Julia, improving performance and maintainability.
        </li>
        <li> Visualized exoplanet atmospheric models to compare Bayesian inference methods (MCMC vs. HMC) across 1D and 2D planetary models.</li>
        </p>
      
      {/* Badges */}
      <div className="mt-3">
      <span class="badge tag-mod">Python</span>
      <span class="badge tag-mod">Julia</span>
      <span class="badge tag-mod">Git Version Control</span>
      <span class="badge tag-mod">Data Visualization</span>
      <span class="badge tag-mod">Science Comm.</span>
      </div>
      </div>
     </div>
     
      
      {/* Role #3 */}
      {/* Two column for data and location */}
      <div className="flex flex-col lg:flex-row w-full mb-2">
        <div className="w-full lg:w-1/6 text-left lg:text-left">
        <p className="text-gray-700 datelocation-mod2">Jan 2023 to May 2024</p>
        <p className = "text-gray-600 datelocation-mod">Austin, TX</p>
        </div>
        <div className="w-full lg:w-5/6 text-left lg:text-left">
        <h5 className="text-gray-600">
           Peer Mentor, UT Austin
          </h5>
        <p className="text-gray-600 mb-2"> 
          <li>Mentored students in the <strong>Freshman Research Initiative</strong>, guiding them through research projects and helping them develop technical skills.</li>
          <li>Assisted in the development of research projects, providing support in data analysis and scientific communication.</li>
          <li>Led Python boot camps, teaching data science essentials including Matplotlib, NumPy, and Conda environments.</li>

        </p>
      
      {/* Badges */}
      <div className="mt-3">
      <span class="badge tag-mod">Python</span>
      <span class="badge tag-mod">Science Communication</span>
      <span class="badge tag-mod">Data Visualization</span>
      </div>

        </div>
      </div>
     

    </div> 
    {/* End of Experience Section */}


    {/* Right Column: 1/4 width */}
    <div className="w-full lg:w-1/4 p-4 text-left lg:text-left">
      
      <h3 className="text-3xl font-bold text-gray-900 ">Education</h3>
      <hr className="w-3/4 border-black inline-block align-top" />
      <h6 className="text-gray-900"><strong>University of Texas at Austin </strong></h6>
      <p className="text-gray-600 mb-1">
        B.S.A in Astronomy, Minor in Computer Science 
      </p>
      <p> 2020 - 2024 </p>


      <div className = "mt-5"> {/* Tech Stack */}
      <h3 className="text-gray-900">Tech Stack</h3> 
      <hr className="w-3/4 border-black inline-block align-middle align-left" />

        <p className = "mt-1 mb-1" > Python </p>
        <ProgressBar variant="custom-2" now={80}  />

        <p className = "mt-1 mb-1"> SQL </p>
        <ProgressBar  variant="custom" now={65} />

        <p className = "mt-1 mb-1"> JavaScript </p>
        <ProgressBar variant="custom-2" now={65}  />

        <p className = "mt-1 mb-1"> HTML/CSS </p>
        <ProgressBar variant="custom" now={65}  />

        <p className = "mt-1 mb-1"> Julia </p>
        <ProgressBar variant="custom-2" now={50} />

        <p className = "mt-1 mb-1"> Java </p>
        <ProgressBar variant="custom" now={50} />


      <div className = "mt-5"> {/* Tech Stack */}
      <h3 className="text-gray-900">Skills</h3> 
      <hr className="w-3/4 border-black inline-block align-middle align-left" />
        <div className="">
          {/* <span class="badge tag-mod-skill">Software Developement</span> */}
          <span class="badge tag-mod-skill">Open Source Software Dev</span>
          <span class="badge tag-mod-skill">Data Visualization</span>
          <span class="badge tag-mod-skill">Git Control</span>
          <span class="badge tag-mod-skill">Project Management</span>
          <span class="badge tag-mod-skill">Scientific Communication</span>
          <span class="badge tag-mod-skill">Linux</span>
          <span class="badge tag-mod-skill">HPC</span>

        </div>
      </div>

      </div> {/* End of Tech Stack */}

    </div>
  </div>
</div>
</div>



<div id = "projects" className="p-1">
      {/* Projects Section */}
      <div className="p-10 mt-25">
      <div className = "header-mod">
      <h2 className="font-bold mb-4 lg:text-left">Projects</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center p-10 mt-10">
      
        <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="../images/hungryaustin.png" alt="Project 1 Image" className="mx-auto w-100 h-70 rounded object-cover mb-4" />
          <h4 className="text-3xl font-bold text-gray-900 mb-4">Hungry Austin</h4>
          <p className="text-gray-600 mb-4">
          Developed a Yelp-like web app that categorized Austin restaurants by cuisine, price, and location using food-based APIs.
          Led front-end development, designing an intuitive UX/UI.
          Optimized SQL queries and database schema, improving data retrieval speed and efficiency.
          Implemented web scraping to enhance data accuracy and reduce API call latency.
          
          </p>
          <span class="badge tag-mod">SQL</span>
          <span class="badge tag-mod">Python</span>
          <span class="badge tag-mod">Postgres</span>
          <span class="badge tag-mod">HTML/CSS</span>
          <span class="badge tag-mod">Git</span>
          <br></br>
          <button className = "project_button_var2" onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://github.com/canavarrete01/HungryAustin`;
            }}>
              GitHub
          </button> 
        </div>

        <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="./images/website.png" alt="Project 1 Image" className="mx-auto object-cover mb-4" />
          <h4 className="text-3xl font-bold text-gray-900 mb-4">This Website!</h4>
          <p className="text-gray-600 mb-4">
        Handmade portfolio website using React, Tailwind CSS, and Javascript. 
        Implemented responsive design for optimal viewing.
        Utilized GitHub for version control and open source collaboration for future users of template.

          </p>
          <span class="badge tag-mod">Javascript</span>
          <span class="badge tag-mod">React</span>
          <span class="badge tag-mod">HTML/CSS</span>
          <span class="badge tag-mod">Git</span>

          <button className = "project_button_var2" onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://github.com/canavarrete01/canavarrete01.github.io`;
            }}>
              GitHub
          </button> 
        </div>

        <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="./images/gamedev.png" alt="Project 1 Image" className="mx-auto object-cover mb-4 w-100 h-70 rounded" />
          <h4 className="text-3xl font-bold text-gray-900 mb-4">Game Development</h4>
          <p className="text-gray-600 mb-4">
          Designed and built an endless runner arcade game inspired by Jetpack Joyride.
          Implemented motion mechanics, user interactions, and dynamic graphics.
          Utilized object-oriented programming to manage game logic and UI elements.

          </p>
          <span class="badge tag-mod">Java</span>
          <span class="badge tag-mod">Processing</span>
          <span class="badge tag-mod">Linux</span>
          <br></br>
          <button className = "project_button_var2" onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://github.com/canavarrete01/FairyArcadeGame.git`;
            }}>
              GitHub
          </button> 
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center p-2">
        {/* <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="./images/project1-image.svg" alt="Project 1 Image" className="mx-auto w-20 h-30 object-cover mb-4" />
          <h4 className="text-3xl font-bold text-gray-900 mb-4">NYC Matcha Madness</h4>
          <p className="text-gray-600 mb-4">
          Developed a web app to find the best matcha in NYC using Yelp and Beli API.
          Ranked matcha shops based on user ratings and reviews against personal rankings.
          Implemented a user-friendly interface for easy navigation and search functionality.
          Takes in user recommendations for matcha shops and displays them on a map.
          Displays my favorite shops on an interactive map that links to google maps.
          Built with React, Tailwind CSS, and JavaScript.

        <a href="/Matcha" className="text-blue-500 hover:underline">Check Out Site Here</a>
          </p>
        </div> */}

      </div>
    </div>

</div>

<div id = "extra" className="p-1">
<div className="p-10 mt-25">
      <div className = "header-mod">
      <h2 className="font-bold mb-4 lg:text-left">Extra</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center p-2">

        {/* Notion Template */}
        <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="./images/5.png" alt="Project 1 Image" className="mx-auto object-cover mb-4" />
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Notion Template</h4>
          <p className="text-gray-600 mb-4">
          A notion template for organizing your life, work, and projects. Save and edit to your heart's content!
          </p>
          <button className = "project_button" onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://cn-template.notion.site/Home-Page-Example-65e63d059bfe4182953bcbe3c84fde57?pvs=74`;
            }}>
              Notion Template
          </button> 
          

        </div>

        {/* VS Code Theme */}
        <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="./images/6.png" alt="VS Code Theme Image" className="mx-auto object-cover mb-4" />
          <h4 className="text-2xl font-bold text-gray-900 mb-4">VS Code Custom Theme</h4>
          <p className="text-gray-600 mb-4">
          A neon space-themed dark VS code theme for all your coding needs.
          Find through the VS Code extensions tab or through the link below!
          </p>
        <button className = "project_button" onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://marketplace.visualstudio.com/items?itemName=CarolinaNav.space-jam-dark`;
            }}>
              Visual Studio Marketplace
        </button> 
        </div>

      </div>
      </div>

</div>


<hr></hr>


{/* Contact Me Section */}
<div id = "contact" className="p-1">
      <div className="p-10">
      <div className = "header-mod">
      </div>
        <h4 className="text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">Contact Me</h4>
        <form className="w-full max-w-lg mx-auto mt-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              style={{ backgroundColor: 'white' }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              style={{ backgroundColor: 'white' }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              style={{ backgroundColor: 'white' }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const subject = document.getElementById("subject").value;
              const email = document.getElementById("email").value;
              const message = document.getElementById("message").value;
              
              window.location.href = `mailto:ca.navarrete01@gmail.com?subject=${subject}&body=${message}`;
            }}
          >
            Send
          </button>
          </div>
        </form>
      </div>
</div>



{/* Footer */}
      <footer>
        <p>&copy; 2025</p>
        {/* add linked bootstrap icons  */}
      </footer>

    </>
  )
}

export default App
