import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Loginform({email,password,handleInputChange,handleSubmit,fromswitcher}) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form autoComplete="off" onSubmit={handleSubmit}>
            <h3 className="text-info text-center">Client Login</h3>
					<hr />
              <Form.Group >
              <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  required
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="my-1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
              login
              </Button>
            </Form>
            <hr/>
          </Col>
        </Row>
        	<Row>
				<Col>
					<a href="#!" onClick={()=>fromswitcher('rest')}>Forget Password?</a>
				</Col>
			</Row>
			<Row className="py-4">
				<Col>
					Are you new here? <a href="/registration">Register Now</a>
				</Col>
			</Row>
      </Container>
    </>
  );
}

export default Loginform;
