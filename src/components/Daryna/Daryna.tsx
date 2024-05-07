import { FC } from "react";
import '../Daryna/Daryna.css';

import ContentItem, { ContentItemType } from '../ContentItem/ContentItem';
import Menu from '../Menu/Menu';
import SocialLinks from '../SocialLinks/SocialLinks';
import experience from '../../data/experience.json';
import projects from '../../data/projects.json';
import images from '../../data/images.json'
import social from '../../data/social.json';
import Carousel from "../Carousel/Carousel";
import Carousel2 from "../Carousel2/Carousel2";

interface DarynaProps {
    // name: string;
    // profession: string;
    visibility: boolean;
}

const Daryna: FC<DarynaProps> = ({ visibility }) => {
    
    return (
            <div className="daryna-block">
                <div className={`wrapper daryna` + (visibility ? `` : ` inactive`)}>
                    <div className="column column-static">
                        <div className="column-static-top">
                            <div className="colum-static-introduction">
                                <h1>Daryna Stoikova</h1>
                                <h3>Photographer</h3>
                                <div className="column-static-bottom">
                                    <SocialLinks socialLinks={social} />
                                </div>
                                <p>I am a Photographer and Contect Creator based in Vancouver, BC. I have a background in Architecture and Arts, so you can be sure that your photos will be masterpieces. Let's capture you best moments of life together!</p>
                            </div>
                            <Menu menuItems={['about', 'portfolio', 'prices', 'contacts']} />
                        </div>
                        {/* <div className="column-static-bottom">
                            <SocialLinks socialLinks={social} />
                        </div> */}
                    </div>
                    <div className="column column-dynamic">
                        <div className="column-dynamic-content">
                            <div id="about daryna" className="content-about">
                                
                            </div>
                            {/* <div id="experience daryna" className="content-experience">
                                {experience.map((contentItem: ContentItemType, index: number) => {
                                    return <ContentItem contentItem={contentItem} key={index}></ContentItem>
                                })}
                            </div>
                            <div className="full-resume">
                                <a href="https://drive.google.com/file/d/1Xyj8yK9AnnUdAeNW89eHfvnBDNTJ6n9j/view?usp=sharing" className="resume-link" target="_blank">View Full Resume ⟶</a>
                            </div>
                            <div id="projects daryna" className="content-projects">
                                {projects.map((contentItem: ContentItemType, index: number) => {
                                    return <ContentItem contentItem={contentItem} key={index}></ContentItem>
                                })}
                            </div> */}
                        </div>
                        
                    </div>
                </div>
                {/* <div className="column-dynamic-content-footer">
                    <p>Created with <a href="https://react.dev/" target="_blank">ReactJS</a> and <a href="https://vitejs.dev/" target="_blank">Vite</a>, deployed at <a href="https://www.netlify.com/" target="_blank">Netlify</a>. All text is set in the <a href="https://fonts.google.com/specimen/Inter" target="_blank">Inter</a> typeface.</p>
                </div> */}
                <div className="daryna-about" id="portfolio">
                    
                    {/* <div className="carousel-container">
                        <div className="carousel">
                            <img src="https://drive.google.com/thumbnail?id=1Zf85pBb_ufwcqoT2696zUekdbbP_El4I&sz=w1000" alt="Image 1"/>
                            <img src="https://drive.google.com/thumbnail?id=1JK31vOenrUlZquDFofXlwU8JzVGQBCk4&sz=w1000" alt="Image 2"/>
                            <img src="https://drive.google.com/thumbnail?id=1GKoUqM8OeZYo6Pyje-EJcc7tJNstWA3M&sz=w1000" alt="Image 3"/>
                            <img src="https://drive.google.com/thumbnail?id=1hLhuWw98AzKML0R-ZuNv7SxLI_nIv2qP&sz=w1000" alt="Image 4"/>
                            <img src="https://drive.google.com/thumbnail?id=1VyfLCbcSuNd0e8PlvYrZS0hk-dR7ZYSM&sz=w1000" alt="Image 5"/>
                            <img src="https://drive.google.com/thumbnail?id=1bn9agoF_SITEg_GPlNZ8nNN_goRCstDX&sz=w1000" alt="Image 6"/>
                            <img src="https://drive.google.com/thumbnail?id=1uvHApS_Rsqgim5jSY6_6L7p_txUfh51z&sz=w1000" alt="Image 7"/>
                            <img src="https://drive.google.com/thumbnail?id=1rsIVmoBIdiaBgoaEyWoBfUDqfOQ9JiC8&sz=w1000" alt="Image 8"/>
                        </div>
                        <button className="prev" onClick={prevSlide}>&#10094;</button>
                        <button className="next" onClick={nextSlide}>&#10095;</button>
                    </div> */}
                    {/* <Carousel images={images}/> */}
                    <Carousel2 images={images} aspect="portrait"/>
                </div>
            </div>
            
    )
};

export default Daryna;