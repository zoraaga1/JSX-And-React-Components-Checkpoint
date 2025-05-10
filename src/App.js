// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Defaul name
const firstName = "New User";

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '24rem', margin: 'auto' }} className="shadow">
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h3>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>
        {firstName && (
          <img
            src="https://via.placeholder.com/100x100.png?text=Hi!"
            alt="Greeting"
            className="rounded mt-2"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
