import { FC } from 'react';
import './ContentItem.css';

export interface ContentItemType {
    imageName?: string;
    dateStart?: string;
    dateEnd?: string;
    header: string;
    description: string;
    skills: string[];
}

export interface ContentItemProps {
    contentItem: ContentItemType;
}

const ContentItem: FC<ContentItemProps> = ({ contentItem }) => {
    const {dateStart, dateEnd, header, description, skills, imageName} = contentItem;
    
    return (
        <div className="content-experience-item content-item">
            { dateEnd && dateStart 
                ? <div className="content-item-date">{ `${dateStart} — ${dateEnd}` }</div> 
                : null }
            { imageName 
                ? <div className="content-item-image"><img src={`/${imageName}`} alt="project-image" /></div>
                : null }
            <div className="content-item-description">
                <h4>{ header }</h4>
                <p>{ description }</p>
                <ul className="description-skill-list">
                    {skills.map((skill: string, index: number) => {
                        return <li className="description-skill-list-item" key={ index }>{ skill }</li>
                    })}
                    {/* <li className="description-skill-list-item">JavaScript</li>
                    <li className="description-skill-list-item">TypeScript</li>
                    <li className="description-skill-list-item">Vue</li>
                    <li className="description-skill-list-item">Angular2+</li>
                    <li className="description-skill-list-item">SCSS</li>
                    <li className="description-skill-list-item">SQL</li>
                    <li className="description-skill-list-item">Electron</li>
                    <li className="description-skill-list-item">Cordova</li> */}
                </ul>
            </div>
        </div>
    );
};

export default ContentItem;