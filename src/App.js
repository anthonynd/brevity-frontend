import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Brevity</h1>
        <Form className="upload-form" method="POST" action="http://localhost:8080/upload" enctype="multipart/form-data">
          <Form.Group controlId="uploadFile">
            <Form.Label>Upload PDF</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>
          <Button variant="primary"type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
