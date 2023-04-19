import { Container,Row,Col,Carousel} from "react-bootstrap";

export default function carousel(){
    return(
        <section>
            <Container className=" bg-warning">
                <Row>
                    <Col sm={12}>
                    <Carousel.Item>
                    <img src="https://picsum.photos/id/237/200/300"
                    className="d-block w-100"
                    alt="slide 1"/>
                    <Carousel.Caption>
                    <h2>First Item</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur nostrum voluptates tenetur distinctio quisquam dolore unde consequuntur a commodi ea doloremque voluptatum 
                        officia asperiores doloribus fuga, n
                        isi dolorem deserunt.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <img src="https://picsum.photos/seed/picsum/200/300"
                    className="d-block w-100"
                    alt="slide 1"/>
                    <Carousel.Caption>
                    <h2>First Item</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur nostrum voluptates tenetur distinctio quisquam dolore unde consequuntur a commodi ea doloremque voluptatum 
                        officia asperiores doloribus fuga, n
                        isi dolorem deserunt.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                    <img src="https://picsum.photos/200/300?grayscale"
                    className="d-block w-100"
                    alt="slide 1"/>
                    <Carousel.Caption>
                    <h2>First Item</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur nostrum voluptates tenetur distinctio quisquam dolore unde consequuntur a commodi ea doloremque voluptatum 
                        officia asperiores doloribus fuga, n
                        isi dolorem deserunt.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Col>
                </Row>
            </Container>
            </section>
    )
}