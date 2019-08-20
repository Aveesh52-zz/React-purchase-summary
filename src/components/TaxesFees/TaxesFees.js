import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & fees (Based on 94085)</Col>
        <Col md={6}>
          <strong>{`$${this.props.taxes}`}</strong>
        </Col>
      </Row>
    );
  }
}
