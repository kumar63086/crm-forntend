import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Registrationform() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form className="">
              <h3 className="text-info">User Registration</h3>
              <hr />
            
              <Form.Group className="mr-5 "style={{width:'100%'}}>
              <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group >
              <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group>
              <Form.Label>Company name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                placeholder="Company name"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Full address"
                required
              />
            </Form.Group>

              <Form.Group controlId="formBasicPassword" className="my-1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="my-1">
                <Form.Label>confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=" confirm Password"
                  name="confirm"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registrationform;
