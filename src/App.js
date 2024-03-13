import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div class="navbar">
          <nav class="slide_nav"> 
            <ul>
              <li>
                <a href="#about">
                About me
                </a>
             </li>
             <li>
                <a href="#projects">
                projects
                </a>
             </li>
             <li>
                <a href="#friends">
                friends
                </a>
             </li>
             <li>
                <a href="#github">
                github
                </a>
             </li>
            </ul>
          </nav>
        </div>
        <h1 class="ime" id="about">
        GRUNEMAN
        </h1>
        <div class="prvi_opis">
          <section>
            <p>
            I am currently attending the second year of Vegova high school in Ljubljana. 
            I learn the programming languages I need, when I need them.
            I'm currently learning Java Script, HTML and CSS. I recently learned AVR Assembly.
            I also like to 3D printing and modeling. Also I currently train swimming.
            </p>
          </section>
        </div> 
          <section class="project_name" id="projects">
            <h2>
            PROJECTS        
            </h2>
          </section>
            <div class="projects">
              <div class="project1">
                <h2>
                My Website
                </h2>
                <h5>
                  I'm learning web development on this project.
                  In the future i want to design log-in system so I used React to design the website.
                  Also in near future I'll be designing IP-grabber.
                </h5>
              </div>
              <div class="project2">
                <h2>
                IP grabber
                </h2>
                <h5>
                I'm learning firebase and developing IP-grabber.
                </h5>   
              </div>
            </div>
            <div class="friends_box" id="friends">
              <div class="friends_naslov">
                <h3>
                FRIENDS ON WEB  
                </h3>
              </div>
              <div>
                <ul class="friends">
                  <a href="https://cadez.eu/" target="_blank">
                    Lin Cadez
                  </a>
                  <br></br>
                  <a href="https://majmohar.me/" target="_blank">
                    Maj Mohar
                  </a>
                  <br></br>
                  <a href="https://cernetic.cc/" target="_blank">
                    Jaka Cernetic
                  </a>
                </ul>
              </div>
            </div>
            <div class="github" id="github"> 
                <div class="github_name">
                  <h2>
                    MY GITHUB
                  </h2>
                </div>
                <div class="github_link">
                  <a href="https://github.com/Doris0070" target="blank">
                    <img src="https://seekicon.com/free-icon-download/github_3.svg">
                    </img>
                  </a>
                </div>
              </div>
      </body>
    </div>
  );
}

export default App;
