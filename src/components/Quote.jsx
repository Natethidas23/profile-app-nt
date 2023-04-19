import { Container,Row,Col } from "react-bootstrap";
export default function Quote(){
    return(
        <section>
            <h2>Quote</h2>
            <Container className="quote-container bg-info">
                <Row className="text-center">
                    <Col>
                    <p>The quality of a person's life is in direct 
                        proportion to their commitment to excellence, 
                        regardless of their chosen field of endeavor</p> - Vince lombardi
                    </Col>
                </Row>
            </Container>
        </section>
    )
}