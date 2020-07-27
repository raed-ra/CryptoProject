import React, {useState} from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker"
function ModalEditSellCoin(props) {

  const [startDate, setStartDate] = useState(new Date())

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header style={{ backgroundColor: "orange" }} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new coin to portfolio
          </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCoin">
                <Form.Label>Coin</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Quantity" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Buy Price</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Bought on</Form.Label>
                <Form.Control>

                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              ADD TO PORTFOLIO
            </Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "orange" }}>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalEditSellCoin




