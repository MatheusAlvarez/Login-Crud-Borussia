import carrossel1 from '../../assets/carrossel1.jpg'
import carrossel2 from '../../assets/carrossel2.jpg'
import carrossel3 from '../../assets/carrossel3.jpg'
import React from 'react'
import { Carousel} from 'react-bootstrap';
import './style.css'

const CarouselCom = () =>{
    return(
        <>
            <div className='container justify-content-center d-flex mt-3'>
                <Carousel className="mt w-home carousel">
                    <Carousel.Item interval={1500}>
                            <img className="d-block w-100 img-carousel" src={carrossel1} alt="First slide"/>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                            <img className="d-block w-100 img-carousel" src={carrossel2} alt="First slide"/>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                            <img className="d-block w-100 img-carousel" src={carrossel3} alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default CarouselCom;