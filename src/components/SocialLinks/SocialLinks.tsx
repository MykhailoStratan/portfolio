import {FC} from 'react';
import './SocialLinks.css';

interface SocialLinksProps {
    socialLinks: SocialLink[];
}

interface SocialLink {
    imageName: string;
    name: string;
    link: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ socialLinks }) => {
    return (
        <ul className="social-link-menu">
            {socialLinks.map((socialLink: SocialLink, index: number) => {
                return <li className="social-link-menu-item" key={ index }>
                    <a href={ socialLink.link }  target="_blank"><img src={`./${socialLink.imageName}`} alt={ socialLink.name } className="social-menu-link-icon" /></a>
                </li>
            })}
        </ul>
    );
};

export default SocialLinks;