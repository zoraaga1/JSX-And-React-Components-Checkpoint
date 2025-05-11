// src/App.js
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "New User";

function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Image />
            <Card.Body>
              <Card.Title className="fw-bold fs-3 text-primary"><Name /></Card.Title>
              <Card.Text className="text-muted mb-3"><Description /></Card.Text>
              <h5>
                <Badge bg="success"><Price /></Badge>
              </h5>
            </Card.Body>
          </Card>

          <div className="text-center mt-4">
            <h4>
              {firstName ? `👋 Hello, ${firstName}!` : "👋 Hello, there!"}
            </h4>
            {firstName && (
              <img
                src="https://placekitten.com/120/120"
                alt="Greeting"
                className="rounded-circle mt-2 border border-2"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
