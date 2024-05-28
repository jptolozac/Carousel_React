import { useEffect, useRef, useState } from "react"
import CircleIcon from '@mui/icons-material/Circle';

/* eslint-disable react/prop-types */
export function Carousel({ imagesData, width=600 }) {
    const [currentImage, setCurrentImage] = useState(0)
    const imageSlider = useRef()

    const handleButtonSlider = (idx) => {
        if (idx >= imagesData.length){
            setCurrentImage(0)
            idx = 0
        } else if (idx < 0){
            setCurrentImage(imagesData.length - 1)
            idx = imagesData.length - 1
        } else {
            setCurrentImage(idx)
        }
        imageSlider.current.scroll({ left: width*idx, behavior: "smooth" })
    }

    useEffect(() => {
        console.log(currentImage);
    },[currentImage])

    return (
        <>
            <div ref={imageSlider} className="image-slider" style={{ maxWidth: width, height: width }}>
                {imagesData.map((images, idx) => (
                    <div key={idx} className='image-container'>
                        <img className='image' src={images.src} alt={images.alt} />
                    </div>
                ))}
            </div>
            <div className="btn-group">
                <button type="button" onClick={() => handleButtonSlider(currentImage - 1)}>{"<"}</button>
                {imagesData.map((_, idx) => (
                    <button className={idx === currentImage ? "active": ""} key={idx} onClick={() => handleButtonSlider(idx)}>{<CircleIcon />}</button>
                ))}
                <button type="button" onClick={() => handleButtonSlider(currentImage + 1)}>{">"}</button> 
            </div>
        </>
    )
}