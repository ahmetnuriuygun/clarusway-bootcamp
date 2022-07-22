import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

const CourseCard = ({ data }) => {
  return (
    <Container className="text-center mt-4 p-4" >
      {/* grid cards, jsx içine yazılanlara illa return istiyor, forEach return etmez array i bitirir terminal  */}
      <Row className="d-flex justify-content-center" >
      {/* Row u döngünün içine alsam 3 satır şeklinde basar, ben 1 tane satır olsun istediğim için döngünün dışına aldım */}
        {data.map((item) => {

          const{id,name,img,text}=item;

          return (
            <Col
              className="d-flex justify-content-center mb-4"
              sm={12}
              md={6}
              lg={4}
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="info">Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
