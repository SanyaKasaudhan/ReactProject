import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImgOverlay, Row, UncontrolledCarousel } from 'reactstrap'
import airtel from '../assets/airtel.jpg'
const items=[{src:'./airtel.jpg',
altText:'slide 1',
caption:'slide 1',
header:'Slide  Header',
key:'1'},
]
export default class Cardapage extends Component {
    render() {
        return (
            <div>
                <Row className="md-4">
                <Card style={{ margin:"115px", width:"355px"}}>
                    <CardImg style={{paddingLeft:"35px", paddingTop:"35px", height:"135px", width:"135px"}} src={airtel} alt="airtel" />
                    <CardImgOverlay><h1>airtel</h1></CardImgOverlay>
                    <CardBody>
                        <CardTitle>CARD DESIGN</CardTitle>
                        <CardSubtitle>Here is the subtitle</CardSubtitle>
                        <CardText>hey add some qualities to this card</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                </Row>
                <UncontrolledCarousel items={items} />
            </div>
        )
    }
}
