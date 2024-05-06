import { FC, useState } from "react";
import '../Slider/Slider.scss';

interface Image {
    src: string;
    caption: string;
    active: boolean;
}

interface SliderProps {
    images: Image[]
}

const Slider: FC<SliderProps> = ({ images }) => {

    // const [currentImage, setCurrentImage] = useState<Image>(images[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(1);

    function goNext() {
        console.log('works')
        images[currentImageIndex].active = false;
        if (currentImageIndex+1 < images.length) {
            setCurrentImageIndex(currentImageIndex+1);
            images[currentImageIndex+1].active = true;
        } else {
            setCurrentImageIndex(0);
            images[0].active = true;
        }
        
    }

    function goPrev() {
        images[currentImageIndex].active = false;
        if (currentImageIndex-1 >= 0) {
            setCurrentImageIndex(currentImageIndex-1);
            images[currentImageIndex-1].active = true;
        } else {
            setCurrentImageIndex(images.length-1);
            images[images.length-1].active = true;
        }
        
    }

    return (

        <main className="carousel-container">
            <h2>Portfolio</h2>
            <div className="carousel">
                {images.map((image: Image, index: number) => {
                    return (
                            <>
                                <div className={image.active ? "item active" : "item"}>
                                    <img src={image.src} alt={`Image ${index}`}/>
                                    <p className="caption">{image.caption}</p>
                                </div>
                            </>
                            
                            )
                })}
                {/* // <div className="item active">
                //     <img src="https://bit.ly/34xczKy" alt="Image 1" />
                //     <p className="caption">Caption for Image 1</p>
                // </div>
                // <div className="item">
                //     <img src="https://bit.ly/3lkp5DW" alt="Image 2" />
                //     <p className="caption">Caption for Image 2</p>
                // </div>
                // <div className="item">
                //     <img src="https://bit.ly/3iMHuI1" alt="Image 3" />
                //     <p className="caption">Caption for Image 3</p>
                // </div> */}
            </div>
            <button className="btn prev" onClick={goPrev}>Prev</button>
            <button className="btn next" onClick={goNext}>Next</button>
            <div className="dots"></div>
        </main>

    )
};

export default Slider;