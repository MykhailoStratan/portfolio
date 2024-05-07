import { Image } from '../Carousel/Carousel';
import './CarouselItem.css';

import { CSSProperties, FC, MouseEventHandler } from 'react';

interface CarouselItemProps {
    image: Image;
    style?: CSSProperties;
    onClick: MouseEventHandler<HTMLLIElement>;
    className?: string;
    aspect: 'portrait' | 'landscape';
}

const CarouselItem: FC<CarouselItemProps> = ({image, style, onClick, className, aspect}) => {
    // const [isCentered, setIsFavourite] = useState<boolean>(favourite);

    // function switchFavourite() {
    //     setIsFavourite(!isFavourite);
    //     plant.favourite = !plant.favourite;
    // }

    // function reviewDetails() {
        
    // }

 
    return (
            <li className={`carousel-item-card`+ (className ? `${className}` : '')} onClick={onClick} style={{...style}}>
                    <img src={`../../../public/photos/slider/${image.src}.jpg`} alt={image.caption} className={aspect === 'landscape' ? 'item-landscape' : 'item-portrait'}/>
                <p className="carousel-item-caption">{`${image.caption}`}</p>
            </li>
    );
};

export default CarouselItem;