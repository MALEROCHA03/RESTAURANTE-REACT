import React from "react";

import {
  Row, Col, Button
} from 'reactstrap';
export const Contact = () => {

  return (
    <div>
      <h1>Desde carpeta Contactanos</h1>
      <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
      </Row>
    </div>
  );
};