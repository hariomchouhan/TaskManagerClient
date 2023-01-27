import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import { completeTask, deleteTask, getTasksByUrl } from "../services/TaskService";

export function TaskList() {
    const [tasks, setTasks] = useState([]);
    const getTasks = async (url) => {
        const response = await getTasksByUrl(url);
        setTasks(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        getTasks('all');
    },[]);
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert>List of tasks</Alert>
            </Container>
            <Container className="mt-4 mb-4">
                <Dropdown onSelect={(k, e)=>{
                    getTasks(e.target.innerHTML);
                }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Task
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {/* All, Pending and Completed ye naam hai woh sab ek tarah se url ka kaam kar rahe hai */}
                        <Dropdown.Item>All</Dropdown.Item>
                        <Dropdown.Item>Pending</Dropdown.Item>
                        <Dropdown.Item>Completed</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <Container className="mt-4 text-center">
                <Row>
                    {
                        tasks.map((t) => {
                            return (
                                <Col lg='4'>
                                    <Card className="mt-4">
                                        <Card.Body>
                                            <Alert variant={t.isCompleted ? 'success' : 'danger'}>
                                                {t.isCompleted ? 'Completed' : 'Pending'}
                                            </Alert>
                                            <Card.Title>{t.name}</Card.Title>
                                            <Card.Text>{t.description}</Card.Text>
                                            {t.isCompleted ? "" : <Button variant="primary" className="btn-sm" onClick={async () => {
                                                await completeTask(t._id);
                                                await getTasks('all');
                                            }}>Complete</Button>}
                                            <Button variant="danger" className="btn-sm mx-4" onClick={async () => {
                                                await deleteTask(t._id);
                                                await getTasks('all');
                                            }}>Remove</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    );
}