import { Container,Row,Col } from "react-bootstrap";
export default function Grid(){
    return(
        <section>
            <h2>Grid</h2>
            <Container className="bg-success">
                <Row>
                    <Col sm={12}>
                    <h2>Why BocaCode?</h2>
                    <p></p>
                    </Col>
                    <Col sm={12}>
                    <h2>Exciting Project?</h2>
                    <p></p>
                    </Col>
                    <Col sm={12}>
                    <h2>Ideal Work Place?</h2>
                    <p></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
