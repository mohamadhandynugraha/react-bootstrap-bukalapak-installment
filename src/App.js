import React from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Col3 from "./components/col3.component";
import SearchBox from './components/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      payments: [],
      searchField: ''
    };
  }

  async componentDidMount() {
    const responsePayments = await fetch(
      "https://api.bukalapak.com/v2/products/f3vi.json"
    );
    const paymentJson = await responsePayments.json();
    this.setState({ payments: paymentJson.product.installment });
  }

  handleChange = (e) =>  {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {payments, searchField} = this.state;
    const filteredPayments = payments.filter(payment => 
      payment.bank_name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <Container>
        <SearchBox placeholder="Search your installment" handleChange={this.handleChange}/>
        <Row>
          <Col3 payments={filteredPayments}/>
        </Row>
      </Container>
    );
  }
}

export default App;
