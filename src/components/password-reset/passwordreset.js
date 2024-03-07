import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Resetpassword({email,handleInputChange,handleRestpassword}) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form autoComplete="off" onSubmit={handleRestpassword}>
            <h3 className="text-info text-center">Reset Password</h3>
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

              

              <Button variant="primary" type="submit" className="mt-3">
                Reset Password
              </Button>
            </Form>
            <hr/>
          </Col>
        </Row>
        	
			<Row className="py-4">
				<Col>
					Are you login? <a href="/">login Now</a>
				</Col>
			</Row>
      </Container>
    </>
  );
}

export default Resetpassword;
