
import CarouselItem from '../CarouselItem/CarouselItem';
import './Carousel2.css';



import { FC, useEffect, useState } from 'react';

export interface Image {
    src: string;
    caption: string;
}

const activeCardTransform = 'rotate(0deg) translate(0rem, 0rem) scale(1.2)';
const rightCardTransform = 'rotate(0deg) translate(0rem, 0rem) scale(1)';

const Carousel: FC<{ images: Image[], aspect: "portrait" | "landscape" }> = ({ images, aspect }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    let photoIndex = 1;
    let photoSwitcher: number;
    function setPhotoSwitcher(currentIndex?: number) {
        if (photoSwitcher) {
            clearInterval(photoSwitcher);
        }
        photoSwitcher = setInterval(() => {
            photoIndex === images.length ? photoIndex = 0 : null;
            setActiveItem(photoIndex++);
            setSliderSpanActive(photoIndex);
            // console.log(photoIndex)
        }, 3000);
    }

    useEffect(() => {
        setPhotoSwitcher();


        return () => {
            if (photoSwitcher) {
                clearInterval(photoSwitcher);
            }
        };
    },[])
    // function slideLeft() {
    //     if (currentIndex === 0) {
    //         setCurrentIndex(images.length-1);
    //         return;
    //     }
    //     setCurrentIndex(currentIndex-1);
    // }

    // function slideRight() {
    //     if (currentIndex === images.length-1) {
    //         setCurrentIndex(0);
    //         return;
    //     }
    //     setCurrentIndex(currentIndex+1);
    // }

    // function openPreview() {
    //     console.log('preview opened');
    // }

    function setActiveItem(activeItemIndex: number) {
        // console.log(activeItemIndex)
        setPhotoSwitcher(activeItemIndex);

        const items = document.querySelectorAll('.carousel-item-card2');
        items.forEach((item, index) => {
            item.classList.remove('active-item');
            // const itemImage =  item.querySelector('img');
            // const imageHeight = itemImage?.naturalHeight;
            // const imageWidth = itemImage?.naturalWidth;
            // const aspectRatio = imageHeight! > imageWidth! ? 'portrait' : 'landscape';
            
        })
        // console.log(items)
        items[activeItemIndex].classList.add('active-item')

        const listContainer = document.querySelector<HTMLElement>('.content-carousel2 ul');
        // console.log(listContainer)
        if (aspect === "landscape") {
            listContainer!.style.left = `${(-600 * activeItemIndex)}px` 
            
        } else {
            listContainer!.style.left = `${(-350 * activeItemIndex)}px`
        }
        

        
        
    }

    function setActiveItemResetInterval(activeItemIndex: number) {
        setActiveItem(activeItemIndex);
        setSliderSpanActive(activeItemIndex+1);
        photoIndex = activeItemIndex+1;
        // if (photoSwitcher) {
        //     clearInterval(photoSwitcher);
        // }
        setPhotoSwitcher();
    }

    function setSliderSpanActive(activeItemIndex: number) {
        const items = document.querySelectorAll('.slider-span');
        console.log(activeItemIndex)
        console.log(images.length)
        
        items.forEach((item, index) => {
            // console.log('current index', photoIndex)
            // console.log(index)
            index < activeItemIndex ? item.classList.add('slider-span-active') : item.classList.remove('slider-span-active');
            // item.classList.remove('active-item');
        })

        // if (photoIndex === images.length) {
        //     items.forEach(item => item.classList.remove('slider-span-active'));
        // }
    }
    

    return (
        <>
            <div className="content-carousel2">
                <ul style={aspect === "landscape" ? {gap: '100px', transform: 'translate(36.5%, 0%)'} : {}}>
                    {/* {currentIndex === 0
                        ? <>
                            <CarouselItem 
                                image={images[images.length - 1]}
                                style={{ transform: leftCardTransform}} 
                                onClick={slideLeft}
                            />
                             <CarouselItem 
                                    image={images[currentIndex]} 
                                    onClick={openPreview}/>

                            <CarouselItem 
                                image={images[currentIndex + 1]} 
                                style={{ transform: rightCardTransform}} 
                                onClick={slideRight}/>
                        </>
                        : currentIndex === images.length-1
                            ? <>
                                <CarouselItem 
                                    image={images[currentIndex - 1]} 
                                    style={{ transform: leftCardTransform}} 
                                    onClick={slideLeft}/>
                                <CarouselItem 
                                        image={images[currentIndex]} 
                                        onClick={openPreview}/>

                                <CarouselItem 
                                    image={images[0]} 
                                    style={{ transform: rightCardTransform}} 
                                    onClick={slideRight}/>

                            </>
                            : <>
                                <CarouselItem 
                                    image={images[currentIndex - 1]} 
                                    style={{ transform: leftCardTransform}} 
                                    onClick={slideLeft}/>
                                <CarouselItem 
                                        image={images[currentIndex]} 
                                        onClick={openPreview}/>
                                <CarouselItem 
                                    image={images[currentIndex + 1]} 
                                    style={{ transform: rightCardTransform}} 
                                    onClick={slideRight}/>
                            </>
                    } */}
                    {images.map((image, index) => {
                        if (index === 0) {
                            return <CarouselItem image={image} onClick={() => setActiveItemResetInterval(index)} className={'2 active-item'} aspect={aspect}/>
                        }
                        return <CarouselItem image={image} onClick={() => setActiveItemResetInterval(index)} style={{}} className={'2'} aspect={aspect}/>
                    })}
                </ul>
                <div className='slider-span-container'>
                    {images.map((image, index) => {
                        return <>
                            <div className={`slider-span` + (index <= currentIndex ? ` slider-span-active` : '')}></div>
                        </>
                    })}
                </div>

            </div>
            {/* <button onClick={slideLeft}>Prev</button>
            <button onClick={slideRight}>Next</button> */}
        </>

    );
};

export default Carousel;