import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider/slider1.jpg'
import slider2 from '../../../images/slider/slider2.jpg'
import slider3 from '../../../images/slider/slider3.jpg'

const Sliders = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sofa Salamander-244</h3>
                        <p>The Salamander is a sofa, bed, and discreet storage space in one. Whether you’re lounging with family during the weekends or accommodating guests overnight, the Salamander provides you with great convenience by virtue of its versatility.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Sofa Morris-287</h3>
                        <p>Made from Kiln-dried imported Beech veneered engineered wood High quality environment friendly Italian Ultra Violet (UV) and Polyurethane(PU)  Imported fabric upholstery with soft and durable cushioning. Fabric can be selected from available options</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sofa Angelina-179</h3>
                        <p>Made from Kiln-dried imported Beech wood and veneered engineered wood and veneered MDF High quality environment friendly Italian Ultra Violet (UV) and Polyurethane (PU) Lacquer in antique finish Please refer to images for dimension details Imported fabric upholstery with soft and durable cushioning</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Sliders;