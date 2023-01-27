import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function Dashboard() {
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert>Welcome to Task Manager App</Alert>
            </Container>
            <Container>
                <Row>
                    <Col lg='4'>
                        <Card>
                            <Card.Body>
                                <Card.Title>Total Tasks</Card.Title>
                                <Card.Text>
                                    <Alert variant="primary">Tasks: 10</Alert>
                                </Card.Text>
                                <LinkContainer to='/tasks'>
                                    <Button variant="primary">View All Tasks</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4'>
                        <Card>
                            <Card.Body>
                                <Card.Title>Completed Tasks</Card.Title>
                                <Card.Text>
                                    <Alert variant="success">Tasks: 7</Alert>
                                </Card.Text>
                                <Button variant="success">View Completed Tasks</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4'>
                        <Card>
                            <Card.Body>
                                <Card.Title>Pending Tasks</Card.Title>
                                <Card.Text>
                                    <Alert variant="danger">Tasks: 3</Alert>
                                </Card.Text>
                                <Button variant="danger">View Pending Tasks</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}