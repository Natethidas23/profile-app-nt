import { Container,Row,Col } from "react-bootstrap";

export default function Video(){
    return(
        <section>
            <Container className="bg-secondary">
                <Row>
                    <Col>
                    <h2>video</h2>
                    <p></p>
                    <iframe src="" frameborder="0"></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}