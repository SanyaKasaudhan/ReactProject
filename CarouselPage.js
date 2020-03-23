import React, { Component } from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Col } from 'reactstrap';
export default class CarouselPage extends Component {
    render() {
        return (
            <div style={{marginLeft:"95px",marginTop:"95px", width:"999px"}}>
                <Carousel>
                    <div >
                        <Col-4>
                        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="Butterfly" />
                        <p className="legend">Butterfly</p>
                        </Col-4>
                    </div>
                    <div>
                        <img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" alt="Moon" />
                        <p className="legend">Moon</p>
                    </div>
                   
                </Carousel>
            </div>
        )
    }
}
