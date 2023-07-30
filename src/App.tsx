import './App.css';
import ContentItem, { ContentItemType } from './components/ContentItem/ContentItem';
import Menu from './components/Menu/Menu';
import SocialLinks from './components/SocialLinks/SocialLinks';
import experience from './data/experience.json';
import projects from './data/projects.json';
import social from './data/social.json';

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
            <Menu menuItems={['about', 'experience', 'projects']} />
          </div>
          <div className="column-static-bottom">
            <SocialLinks socialLinks={social}/>
          </div>
        </div>
        <div className="column column-dynamic">
          <div className="column-dynamic-content">
            <div id="about" className="content-about">
              <p className="content-about-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad doloribus recusandae consequuntur. Perferendis dolor impedit quia molestias dolorum magni quidem aliquid magnam rerum nobis sit quisquam, tempore fuga delectus reprehenderit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="content-about-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad doloribus recusandae consequuntur. Perferendis dolor impedit quia molestias dolorum magni quidem aliquid magnam rerum nobis sit quisquam, tempore fuga delectus reprehenderit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className="content-about-item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad doloribus recusandae consequuntur.</p>
            </div>
            <div id="experience" className="content-experience">
              {experience.map((contentItem: ContentItemType, index: number) => {
                return <ContentItem contentItem={contentItem} key={index}></ContentItem>
              })}
            </div>
            <div className="full-resume">
              <a href="/" className="resume-link">View Full Resume</a>
            </div>
            <div id="projects" className="content-projects">
              {projects.map((contentItem: ContentItemType, index: number) => {
                return <ContentItem contentItem={contentItem} key={index}></ContentItem>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
