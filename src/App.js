import React from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Col3 from "./components/col3.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      payments: []
    };
  }

  async componentDidMount() {
    const responsePayments = await fetch(
      "https://api.bukalapak.com/v2/products/f3vi.json"
    );
    const paymentJson = await responsePayments.json();
    this.setState({ payments: paymentJson.product.installment });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col3 payments={this.state.payments}/>
          {console.log(this.state.payments)}
        </Row>
      </Container>
    );
  }
}

export default App;
