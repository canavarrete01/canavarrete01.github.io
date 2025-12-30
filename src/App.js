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
     {/* Navigation Bar */}
        <header>
        <nav>
          <Button onClick={() => scrollToSection("home")}>Home &gt;</Button>
          <Button onClick={() => scrollToSection("resume")}>Resume &gt;</Button>
          <Button onClick={() => scrollToSection("projects")}>Projects &gt;</Button>
          <Button onClick={() => scrollToSection("contact")}>Contact &gt;</Button>
          </nav>
        </header>

{/* Main Content: Introduction Page */}
<div id = "home" className="p-1 mt-5">
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow p-5">
        
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/5 p-3">
          <img
            src="./images/Headshot.png"  
            alt="Carolina Navarrete headshot"
            className="w-70"
          />
        </div>

        {/* Right Column */}
        {/* keep typing animation but change the blinker color, add some styling to the bio section and clarify it for the roles youre applying to */}
        <div className="w-full lg:w-3/5 p-4 text-left md:text-left text-white">

            {/* Typing Animation */}
            <h2 className = "typing-animation mb-3"> Welcome to My Website!  </h2>

            <p className="mb-4 text-white">
              Hello! I'm <strong>Carolina Navarrete</strong>, a software engineer specializing in full-stack development and data engineering. 
              My background includes scientific software development and developing open source technologies. I am passionate about building user-friendly applications and tools that help people innovate and solve problems.
              
            </p>
            <p className="mb-4 text-white">
              This serves as my personal website, as well as my portfolio. Feel free to explore my projects or get in touch with me! 
            </p>

            {/* Quick Links */}
            {/* add some styling to these logos, change to rounded boxes */}
            <div className="mt-10 flex justify-start space-x-8"> {/* Flex container for images */}
              <a href = 'https://github.com/canavarrete01'>
              <div className="flex flex-col items-center hover:transform hover:translate-y-1"> 
                <img src="./images/github.svg" alt="GitHub" className="w-10 h-10"/> 
              </div>
              </a>

                <a href = "https://www.linkedin.com/in/carolina-navarrete-a764b3285/">
                <div className="flex flex-col items-center hover:transform hover:translate-y-1">
                  <img src="./images/linkedin.svg" alt="LinkedIn" className="w-10 h-10" /> 
                 
                </div>
                </a>

              <a href = "mailto:ca.navarrete01@gmail.com"> 
              <div className="flex flex-col items-center hover:transform hover:translate-y-1">
                <img src="./images/envelope-fill.svg" alt="Email" className="w-10 h-10" /> 
              </div>
              </a>

              <a href = "./images/CarolinaNavarrete_Resume.pdf">
              <div className="flex flex-col items-center hover:transform hover:translate-y-1">
                <img src="./images/file-earmark-text-fill.svg" alt="Resume" className="w-10 h-10" /> 
            </div>
            </a>

            
          </div>

          <div className="mt-1 flex items-center justify-center lg:justify-start">
              <hr className="w-3/4 border-white inline-block align-middle" />
            </div>

        </div>
        </div>
</div>
      
{/* Resume Section */}
<div id = "resume" className="p-1">
<div className="p-10 mt-30">
  
  <div className = "header-mod">
  <h2 className="divider mb-4 lg:text-left">Resume</h2>
  </div>

  <div className="flex flex-col lg:flex-row items-start justify-between">
    
    {/* Left Column: 3/4 width */}
    <div className="w-full lg:w-3/4 p-4 lg:text-left">
    <h3 className="text-3xl text-left font-bold text-white ">Experience</h3>
      <div className="flex items-center justify-start">
        <hr className="w-3/4 border-white inline-block align-middle" />
      </div>

      {/* Role #1 */}
      <div className = "flex flex-col lg:flex-row w-/4 mb-10">
        <div className="w-full lg:w-1/6 text-left lg:text-left">
        <p className="text-white datelocation-mod2">Aug 2024 to Oct 2025</p>
        <p className = "text-white datelocation-mod">New York, NY</p>
        </div>
        <div className="w-full lg:w-5/6 text-left lg:text-left">
          <h5 className="text-white">
            Data Specialist, American Museum of Natural History
          </h5>

          <p className="mt-1 text-white mb-2">
            <li> 
            Designed and implemented scalable backend ingestion pipelines using Python and SQL to populate SIMPLE, a stellar objects online database with 3000+ entries hosted on Amazon Web Services.
            </li>
            <li> Contributed to ingestion and validation functions within Astrodb-Utils, the open-source Python package supporting SIMPLE, streamlining database updates and ensuring data integrity. </li>
            <li>
            Led development and maintenance of a secure, privatized instance of the SIMPLE database hosted at the American Museum of Natural History, enabling internal researchers and select nationwide collaborators to manage, access, and visualize proprietary data. 
            </li>
          </p>

          {/* Badges */}
          <div className="mt-3">
          <span class="badge tag-mod">Python</span>
          <span class="badge tag-mod">SQL</span>
          <span class="badge tag-mod">Python Packaging</span>
           <span class="badge tag-mod">Data Engineering</span>
          </div>
          </div>
      </div>


      {/* Role #2 */}
      <div className = "flex flex-col lg:flex-row w-/4 mb-10">
        <div className="w-full lg:w-1/6 text-left lg:text-left">
          <p className="text-white datelocation-mod2">Jan 2023 to Jul 2024</p>
          <p className = "text-white datelocation-mod">Austin, TX</p>
        </div>
        <div className="w-full lg:w-5/6 text-left lg:text-left">
        <h5 className="text-white">
           Research Engineer, UT Austin
          </h5>
        <p className="text-white mb-2">
        <li> Developed Julia modules for METIS, a Bayesian statistical analysis code (Dr. Lacy, 2023), enhancing parameterization, functionality, and user experience.
        </li>
        <li> Ported core functionality of the METIS Bayesian inference codebase from legacy Python to modern, modular Julia, improving performance and maintainability.
        </li>
        <li> Profiled and optimized core functions to improve performance speed across HPC environments, implementing A/B benchmark testing to inform development, cutting down on computing time by ~30%.</li>
        </p>
      
      {/* Badges */}
      <div className="mt-3">
      <span class="badge tag-mod">Python</span>
      <span class="badge tag-mod">Julia</span>
      <span class="badge tag-mod">Data Visualization</span>
      </div>
      </div>
     </div>
     
      
      {/* Role #3 */}
      {/* Two column for data and location */}
      <div className="flex flex-col lg:flex-row w-full mb-2">
        <div className="w-full lg:w-1/6 text-left lg:text-left">
        <p className="text-white datelocation-mod2">Jan 2023 to May 2024</p>
        <p className = "text-white datelocation-mod">Austin, TX</p>
        </div>
        <div className="w-full lg:w-5/6 text-left lg:text-left">
        <h5 className="text-white">
           Peer Mentor, UT Austin
          </h5>
        <p className="text-white mb-2"> 
          <li>Mentored students in the <strong>Freshman Research Initiative</strong>, guiding them through research projects and helping them develop technical skills.</li>
          <li>Assisted in the development of research projects, providing support in data analysis and scientific communication.</li>
          <li>Led Python boot camps, teaching data science essentials including Matplotlib, NumPy, and Conda environments.</li>

        </p>
      
      {/* Badges */}
      <div className="mt-3">
      <span class="badge tag-mod">Python</span>
      <span class="badge tag-mod">Science Communication</span>
      </div>

        </div>
      </div>
     

    </div> 
    {/* End of Experience Section */}


    {/* Right Column: 1/4 width */}
    <div className="w-full lg:w-1/4 p-4 text-left lg:text-left">
      
      <h3 className="text-3xl font-bold text-white ">Education</h3>
      <hr className="w-3/4 border-white inline-block align-top" />
      <h6 className="text-white"><strong>University of Texas at Austin </strong></h6>
      <p className="text-white mb-1">
        BSA in Astronomy, Minor in Computer Science </p>
      <p className="secondary-text mb-1"> 2020 - 2024 </p>


      <div className = "mt-5"> {/* Tech Stack */}
      <h3 className="text-3xl text-left font-bold text-white ">Tech Stack</h3>
      <hr className="w-3/4 border-white inline-block align-middle align-left" />

        <p className = "text-white mt-1 mb-1" > Python </p>
        <ProgressBar variant="custom-2" now={80}  />

        <p className = "text-white mt-1 mb-1"> SQL </p>
        <ProgressBar  variant="custom" now={65} />

        <p className = "text-white mt-1 mb-1"> JavaScript </p>
        <ProgressBar variant="custom-2" now={65}  />

        <p className = "text-white mt-1 mb-1"> HTML/CSS </p>
        <ProgressBar variant="custom" now={65}  />

        <p className = "text-white mt-1 mb-1"> Julia </p>
        <ProgressBar variant="custom-2" now={50} />

        <p className = "text-white mt-1 mb-1"> Java </p>
        <ProgressBar variant="custom" now={50} />


      <div className = "mt-5"> {/* Tech Stack */}
      <h3 className="text-3xl text-left font-bold text-white ">Skills</h3>
      <hr className="w-3/4 border-white inline-block align-middle align-left" />
        <div className="">
          <span class="badge tag-mod-skill">Open Source Software Dev</span>
          <span class="badge tag-mod-skill">Data Engineering</span>
          <span class="badge tag-mod-skill">Back End Engineering</span>
          <span class="badge tag-mod-skill">Full Stack Engineering</span>
          <span class="badge tag-mod-skill">Git Control</span>
          <span class="badge tag-mod-skill">Project Management</span>
          <span class="badge tag-mod-skill">Technical Communication</span>
          <span class="badge tag-mod-skill">Linux/Unix</span>

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
      <h2 className="divider mb-4 lg:text-left">Projects</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center p-10 mt-10">
         <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="../images/matchaweb.png" alt="Matcha Madness NYC web app screenshot" className="mx-auto w-100 h-70 rounded object-cover mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">Matcha Madness NYC</h4>
          <p className="text-white mb-4">
          Developed a web app to find the best matcha in NYC using Google Maps API review data.
          Built with React, Tailwind CSS, and JavaScript.
          Hosted using Google Cloud Platform and MongoDB for data storage.
          </p>
          
          <span class="badge tag-mod">Javascript</span>
          <span class="badge tag-mod">HTML/CSS</span>
           <span class="badge tag-mod">Google Cloud Platform</span>
            <span class="badge tag-mod">MongoDB</span>
          <span class="badge tag-mod">React.js</span>
          <span class="badge tag-mod">Node.js</span>
          <br></br>
          <button className = "project_button_var2" onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://github.com/canavarrete01/MatchaMadness-NYC`;
            }}>
              GitHub
          </button> 

        </div>

        <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="./images/website.png" alt="Portfolio website screenshot" className="mx-auto object-cover mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">This Website!</h4>
          <p className="text-white mb-4">
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
        <img src="./images/gamedev.png" alt="Arcade game screenshot" className="mx-auto object-cover mb-4 w-100 h-70 rounded" />
          <h4 className="text-2xl font-bold text-white mb-2">Game Development</h4>
          <p className="text-white mb-4">
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
     <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="../images/hungryaustin.png" alt="Hungry Austin web app screenshot" className="mx-auto w-100 h-70 rounded object-cover mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">Hungry Austin</h4>
          <p className="text-white mb-4">
          Developed a Yelp-like web app that categorized Austin restaurants by cuisine, price, and location using food-based APIs.
          Led front-end development, designing an intuitive UX/UI.
          
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
       <img src="../images/vast.png" alt="VAST Challenge data visualization" className="mx-auto w-100 h-70 rounded object-cover mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">Visual Analytics Science and Technology (VAST) Mini Challenge </h4>
          <p className="text-white mb-4">
         Visualized environmental patterns in hydrological data through interactive visualizers and plots to prove a rising trend in water pollution levels in a reserve.
          </p>
          
          <span class="badge tag-mod">Python</span>
          <span class="badge tag-mod">NumPy</span>
          <span class="badge tag-mod">DataFrames</span>
          <span class="badge tag-mod">Data Visualization</span>
          <br></br>
          <button className = "project_button_var2" onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://colab.research.google.com/drive/1GxtIeH3rGywEZKStImUmsNO20fs7LGSw#scrollTo=NbhTCsM2JnBi`;
            }}>
              GitHub
          </button> 

        </div>


      </div>
    </div>

</div>

<div id = "extra" className="p-1">
<div className="p-10 mt-25">
      <div className = "header-mod">
      <h2 className="divider mb-4 lg:text-left">More</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center p-2">
        {/* Notion Template */}
        <div className="w-full lg:w-1/3 p-4 text-center lg:text-left">
        <img src="./images/notion.png" alt="Notion template preview" className="mx-auto object-cover mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">Notion Template</h4>
          <p className="text-white mb-4">
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
        <img src="./images/vscode.png" alt="VS Code theme preview" className="mx-auto object-cover mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">VS Code Custom Theme</h4>
          <p className="text-white mb-4">
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
        <h4 className="text-3xl font-bold text-white mb-4 text-center lg:text-left">Contact Me</h4>
        <form className="w-full max-w-lg mx-auto mt-10">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              style={{ backgroundColor: 'white' }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              style={{ backgroundColor: 'white' }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
      </footer>

    </>
  )
}

export default App
