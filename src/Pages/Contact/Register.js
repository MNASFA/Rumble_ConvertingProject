import './Contact.css'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <>
        <Container>
            
            <Row className="mb-5 mt-5 d-flex justify-content-center align-items-center RegisterContainer">
            <Col md={8} lg={6} xs={12}>
                <Card className="px-4">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                    <h2 className="contactTitle fw-bold mb-3 text-center text-uppercase ">
                        Register
                    </h2>
                    <div className="mb-3">
                        <Form>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                            Email address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                            <Button variant="danger" type="submit">
                            Create Account
                            </Button>
                        </div>
                        </Form>
                        <div className="mt-3">
                        <p className="mb-0  text-center">
                            Already have an account??{' '}
                           <NavLink to='/Contact' className='registerlink'>Sign In</NavLink>
                        </p>
                        </div>
                    </div>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    </>
  )
}

export default Register