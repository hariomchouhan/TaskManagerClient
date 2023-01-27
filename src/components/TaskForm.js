import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveTask } from "../services/TaskService.js";
// import { StatusCodes } from "http-status-codes";

export function TaskForm() {
    const [formData, setFormData] = useState({});
    const [isTaskCreated, setIsTaskCreated] = useState(false);
    const [isError, setIsError] = useState(false);
    const handlechange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await saveTask(formData);
        console.log(response);
        if(response.status===201){
            setIsTaskCreated(true);
        }
        else{
            setIsError(true);
        }
        setTimeout(() => {
            setIsTaskCreated(false);
        }, 2000);
    }
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert>Create a new task here.</Alert>
            </Container>
            <Container>
                <Row>
                    <Col lg='6'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Name" onChange={handlechange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" placeholder="Enter Description" onChange={handlechange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" name="deadline" onChange={handlechange} />
                            </Form.Group>
                            <Button type="submit" variant="success">Create</Button>
                        </Form>
                        {
                            isTaskCreated?<Alert variant="success">Task Created Successfully</Alert>:null
                        }
                        {
                            isError?<Alert variant="danger">Error in creating task.....please try again later</Alert>:null
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}