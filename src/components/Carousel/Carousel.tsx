
import CarouselItem from '../CarouselItem/CarouselItem';
// import './Carousel.css';



import { FC, useState } from 'react';

export interface Image {
    src: string;
    caption: string;
}

const leftCardTransform = 'rotate(0deg) translate(0rem, 0rem) scale(1)';
const rightCardTransform = 'rotate(0deg) translate(0rem, 0rem) scale(1)';

const Carousel: FC<{ images: Image[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    function slideLeft() {
        if (currentIndex === 0) {
            setCurrentIndex(images.length-1);
            return;
        }
        setCurrentIndex(currentIndex-1);
    }

    function slideRight() {
        if (currentIndex === images.length-1) {
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(currentIndex+1);
    }

    function openPreview() {
        console.log('preview opened');
    }

    return (
        <>
            <div className="content-carousel">
                <ul>
                    {currentIndex === 0
                        ? <>
                            <CarouselItem 
                                image={images[images.length - 1]}
                                style={{ transform: leftCardTransform}} 
                                onClick={slideLeft}
                                aspect='portrait'
                            />
                             <CarouselItem 
                                    image={images[currentIndex]} 
                                    onClick={openPreview} aspect='portrait'/>

                            <CarouselItem 
                                image={images[currentIndex + 1]} 
                                style={{ transform: rightCardTransform}} 
                                onClick={slideRight} aspect='portrait'/>
                        </>
                        : currentIndex === images.length-1
                            ? <>
                                <CarouselItem 
                                    image={images[currentIndex - 1]} 
                                    style={{ transform: leftCardTransform}} 
                                    onClick={slideLeft} aspect='portrait'/>
                                <CarouselItem 
                                        image={images[currentIndex]} 
                                        onClick={openPreview} aspect='portrait'/>

                                <CarouselItem 
                                    image={images[0]} 
                                    style={{ transform: rightCardTransform}} 
                                    onClick={slideRight} aspect='portrait'/>

                            </>
                            : <>
                                <CarouselItem 
                                    image={images[currentIndex - 1]} 
                                    style={{ transform: leftCardTransform}} 
                                    onClick={slideLeft} aspect='portrait'/>
                                <CarouselItem 
                                        image={images[currentIndex]} 
                                        onClick={openPreview} aspect='portrait'/>
                                <CarouselItem 
                                    image={images[currentIndex + 1]} 
                                    style={{ transform: rightCardTransform}} 
                                    onClick={slideRight}
                                    aspect='portrait'/>
                            </>
                    }
                    {/* {plants.map((plant, index) => {
                    return <CarouselItem {...plant} key={index + Date()} />
                })} */}
                </ul>

            </div>
            {/* <button onClick={slideLeft}>Prev</button>
            <button onClick={slideRight}>Next</button> */}
        </>

    );
};

export default Carousel;