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
                            <p>I'm a skilled web developer with 2 years of experience, dedicated to crafting user-friendly websites and delivering impactful digital solutions. Explore my projects and let's create something great together!</p>
                        </div>
                        <Menu menuItems={['about', 'experience', 'projects']} />
                    </div>
                    <div className="column-static-bottom">
                        <SocialLinks socialLinks={social} />
                    </div>
                </div>
                <div className="column column-dynamic">
                    <div className="column-dynamic-content">
                        <div id="about" className="content-about">
                            <h4>From Civil Engineer to Web Developer:</h4>
                            <p className="content-about-item">
                                Once a civil engineer, I discovered my passion for web development in 2018. What started as a hobby quickly evolved into an all-consuming pursuit, as I delved into the captivating world of coding and digital creation.
                            </p>
                            <h4>Venturing into the Software Realm:</h4>
                            <p className="content-about-item">
                                Transitioning from the world of civil engineering, I found my place at <span>Dev.Pro</span>, a software company. Here, I had the chance to contribute to the development of cutting-edge applications, such as a powerful <span>POS system</span> using <span>Angular2+</span> and innovative <span>Kitchen Video Screens</span> software with <span>NodeJS, Vue, and Typescript.</span>
                            </p>
                            <h4>Embracing New Horizons:</h4>
                            <p className="content-about-item">
                                As my web development journey continues, I'm filled with enthusiasm to explore fresh opportunities and challenges that await me. With an open mind and a relentless passion for learning, I'm determined to leave a meaningful mark in the digital landscape, one line of code at a time.
                            </p>
                        </div>
                        <div id="experience" className="content-experience">
                            {experience.map((contentItem: ContentItemType, index: number) => {
                                return <ContentItem contentItem={contentItem} key={index}></ContentItem>
                            })}
                        </div>
                        <div className="full-resume">
                            <a href="https://drive.google.com/file/d/1Xyj8yK9AnnUdAeNW89eHfvnBDNTJ6n9j/view?usp=sharing" className="resume-link">View Full Resume ⟶</a>
                        </div>
                        <div id="projects" className="content-projects">
                            {projects.map((contentItem: ContentItemType, index: number) => {
                                return <ContentItem contentItem={contentItem} key={index}></ContentItem>
                            })}
                        </div>
                    </div>
                    <div className="column-dynamic-content-footer">
                        <p>Created with <a href="https://react.dev/" target="_blank">ReactJS</a> and <a href="https://vitejs.dev/" target="_blank">Vite</a>, deployed at <a href="https://www.netlify.com/" target="_blank">Netlify</a>. All text is set in the <a href="https://fonts.google.com/specimen/Inter" target="_blank">Inter</a> typeface.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
