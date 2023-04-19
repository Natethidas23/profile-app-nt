import { Container,Row,Col} from "react-bootstrap";

export default function About(){
    return(
        <main>
            <Container className="bg-danger">
                <Row className="text-center">
                    <Col sm={12} md={12}>
                    <img src="https://picsum.photos/200/300" alt="Profile"/>
                    </Col>
                
                    <Col>
                    <h1>Nate Thidas</h1>
                    <p>People born in December share some characteristics that are associated with their birth month, according to astrology and other beliefs. Here are some of the common traits that are often attributed to people born in December:
                    Sagittarius or Capricorn: December babies fall under either the Sagittarius November 22 - December 21 or Capricorn December 22 - January 19 zodiac signs.
                    Optimistic and Adventurous: Sagittarians are known for being optimistic, adventurous, and always up for new experiences. They tend to have a love for travel and learning new things.
                    Ambitious and Practical: Capricorns are known for being ambitious and practical. They tend to be hardworking and focused on achieving their goals.
                    Social and Charismatic: December babies tend to have a lot of charm and charisma, making them great at socializing and making friends.
                    Creative and Imaginative: Many December babies are also creative and imaginative, often excelling in fields like art, music, or writing.
                    Of course, it's important to remember that these traits are not universal, and everyone is unique and different in their own</p>

                    </Col>
                </Row>
            </Container>
        </main>
    )
}