import { FC } from 'react';
import './ContentItem.css';

export interface ContentItemType {
    imageName?: string;
    dateStart?: string;
    dateEnd?: string;
    header: string;
    description: string;
    skills: string[];
    link?: string;
    designerLink?: string;
    designerName?: string;
}

export interface ContentItemProps {
    contentItem: ContentItemType;
}

const ContentItem: FC<ContentItemProps> = ({ contentItem }) => {
    const {dateStart, dateEnd, header, description, skills, imageName, link, designerLink, designerName} = contentItem;
    
    return (
        <a href={ link || '/' } target="_blank">
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
                        {designerLink && designerName ? <p>{'Design author: '}<a href={designerLink} target='_blank'>{designerName}</a></p> : null}
                        <ul className="description-skill-list">
                            {skills.map((skill: string, index: number) => {
                                return <li className="description-skill-list-item" key={ index }>{ skill }</li>
                            })}
                        </ul>
                    </div>
            </div>
        </a>
    );
};

export default ContentItem;