import { Image } from '../Carousel/Carousel';
import './CarouselItem.css';

import { CSSProperties, FC, MouseEventHandler } from 'react';

interface CarouselItemProps {
    image: Image;
    style?: CSSProperties;
    onClick: MouseEventHandler<HTMLLIElement>;
    className?: string;
}

const CarouselItem: FC<CarouselItemProps> = ({image, style, onClick, className}) => {
    // const [isCentered, setIsFavourite] = useState<boolean>(favourite);

    // function switchFavourite() {
    //     setIsFavourite(!isFavourite);
    //     plant.favourite = !plant.favourite;
    // }

    // function reviewDetails() {
        
    // }
 
    return (
            <li className={`carousel-item-card`+ (className ? `${className}` : '')} onClick={onClick}>
                    <img src={image.src} alt={image.caption} />
                <p className="carousel-item-caption">{`${image.caption}`}</p>
            </li>
    );
};

export default CarouselItem;