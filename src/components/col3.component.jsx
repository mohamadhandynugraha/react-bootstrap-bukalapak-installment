import React from "react";

import {
  Card,
  Button,
  Col
} from "react-bootstrap";

const Col3 = props => {
  return (
    <>  
      {props.payments.map(payment => {
        return (
          <Col md={3}> 
            <Card key={payment.bank_issuer} > 
              <Card.Img variant="top" src={payment.url_logo} />
              <Card.Body>
                <Card.Title>{payment.bank_name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">{payment.bank_issuer}</Button>
              </Card.Body>
            </Card>
          </Col> //Col end
        );
      })}
    </>
  );
};

export default Col3;
