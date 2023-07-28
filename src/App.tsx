import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="column column-static">
          <div className="column-static-top">
            <div className="colum-static-introduction">
              <h1>Michael Stratan</h1>
              <h3>Web Developer</h3>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam obcaecati consequatur exercitationem incidunt, quis molestias quae totam.</p>
            </div>
            <ul className="navigation-menu">
              <li className="navigation-item">ABOUT</li>
              <li className="navigation-item">EXPERIENCE</li>
              <li className="navigation-item">PROJECT</li>
            </ul>
          </div>
          <div className="column-static-bottom">
            <ul className="social-link-menu">
              <li className="social-link-menu-item">
                <a href=""><img src="./211904_social_github_icon.png" alt="Github" className="social-menu-link-icon"/></a>
              </li>
              <li className="social-link-menu-item">
                <a href=""><img src="./5305157_connection_linkedin_network_linkedin logo_icon.png" alt="Linkedin" className="social-menu-link-icon"/></a>
              </li>
              <li className="social-link-menu-item">
                <a href=""><img src="./5335781_camera_instagram_social media_instagram logo_icon.png" alt="Instagram" className="social-menu-link-icon"/></a>
              </li>
              <li className="social-link-menu-item">
                <a href=""><img src="./7693324_telegram_social media_logo_messenger_icon.png" alt="Telegram" className="social-menu-link-icon"/></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column column-dynamic">
          <div className="column-dynamic-content">
            <div className="content-about">
              <p className="content-about-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad doloribus recusandae consequuntur. Perferendis dolor impedit quia molestias dolorum magni quidem aliquid magnam rerum nobis sit quisquam, tempore fuga delectus reprehenderit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="content-about-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad doloribus recusandae consequuntur. Perferendis dolor impedit quia molestias dolorum magni quidem aliquid magnam rerum nobis sit quisquam, tempore fuga delectus reprehenderit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className="content-about-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad doloribus recusandae consequuntur.</p>
            </div>
            <div className="content-experience">
              <div className="content-experience-item content-item">
                <div className="content-item-date">SEP 2021 — JUN 2023</div>
                <div className="content-item-description">
                  <h4>Web Developer · Dev.Pro</h4>
                  <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                  <ul className="description-skill-list">
                    <li className="description-skill-list-item">JavaScript</li>
                    <li className="description-skill-list-item">TypeScript</li>
                    <li className="description-skill-list-item">Vue</li>
                    <li className="description-skill-list-item">Angular2+</li>
                    <li className="description-skill-list-item">SCSS</li>
                    <li className="description-skill-list-item">SQL</li>
                    <li className="description-skill-list-item">Electron</li>
                    <li className="description-skill-list-item">Cordova</li>
                  </ul>
                </div>
              </div>
              <div className="content-experience-item content-item">
                <div className="content-item-date">SEP 2021 — JUN 2023</div>
                <div className="content-item-description">
                  <h4>Web Developer · Dev.Pro</h4>
                  <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                  <ul className="description-skill-list">
                    <li className="description-skill-list-item">JavaScript</li>
                    <li className="description-skill-list-item">TypeScript</li>
                    <li className="description-skill-list-item">Vue</li>
                    <li className="description-skill-list-item">Angular2+</li>
                    <li className="description-skill-list-item">SCSS</li>
                    <li className="description-skill-list-item">SQL</li>
                    <li className="description-skill-list-item">Electron</li>
                    <li className="description-skill-list-item">Cordova</li>
                  </ul>
                </div>
              </div>
              <div className="content-experience-item content-item">
                <div className="content-item-date">SEP 2021 — JUN 2023</div>
                <div className="content-item-description">
                  <h4>Web Developer · Dev.Pro</h4>
                  <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                  <ul className="description-skill-list">
                    <li className="description-skill-list-item">JavaScript</li>
                    <li className="description-skill-list-item">TypeScript</li>
                    <li className="description-skill-list-item">Vue</li>
                    <li className="description-skill-list-item">Angular2+</li>
                    <li className="description-skill-list-item">SCSS</li>
                    <li className="description-skill-list-item">SQL</li>
                    <li className="description-skill-list-item">Electron</li>
                    <li className="description-skill-list-item">Cordova</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="full-resume">
              <a href="/" className="resume-link">View Full Resume</a>
            </div>
            <div className="content-projects">
              <div className="content-project content-item">
                <div className="content-item-image"><img src="" alt="project-image" /></div>
                <div className="content-item-description">
                  <h4>Web Developer · Dev.Pro</h4>
                  <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                  <ul className="description-skill-list">
                    <li className="description-skill-list-item">React</li>
                    <li className="description-skill-list-item">TypeScript</li>
                    <li className="description-skill-list-item">Firebase</li>
                    <li className="description-skill-list-item">WordsAPI</li>
                    <li className="description-skill-list-item">Vite</li>
                    <li className="description-skill-list-item">Netlify</li>
                  </ul>
                </div>
              </div>
              <div className="content-project content-item">
                <div className="content-item-image"><img src="" alt="project-image" /></div>
                <div className="content-item-description">
                  <h4>Web Developer · Dev.Pro</h4>
                  <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                  <ul className="description-skill-list">
                    <li className="description-skill-list-item">React</li>
                    <li className="description-skill-list-item">TypeScript</li>
                    <li className="description-skill-list-item">Firebase</li>
                    <li className="description-skill-list-item">WordsAPI</li>
                    <li className="description-skill-list-item">Vite</li>
                    <li className="description-skill-list-item">Netlify</li>
                  </ul>
                </div>
              </div>
              <div className="content-project content-item">
                <div className="content-item-image"><img src="" alt="project-image" /></div>
                <div className="content-item-description">
                  <h4>Web Developer · Dev.Pro</h4>
                  <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                  <ul className="description-skill-list">
                    <li className="description-skill-list-item">React</li>
                    <li className="description-skill-list-item">TypeScript</li>
                    <li className="description-skill-list-item">Firebase</li>
                    <li className="description-skill-list-item">WordsAPI</li>
                    <li className="description-skill-list-item">Vite</li>
                    <li className="description-skill-list-item">Netlify</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
