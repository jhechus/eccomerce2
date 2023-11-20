import { useState } from 'react';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import image1 from '../../../public/img/1.png'
import image2 from '../../../public/img/2.jpeg'
import image3 from '../../../public/img/3.png'

import './Slider.scss'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        image1,
        image2,
        image3,
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider