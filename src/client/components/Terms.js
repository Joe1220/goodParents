import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import '../public/style/Terms.css';

const Terms = () => {
  return(
    <Container className="Terms">
      <h1>Terms of Service</h1>
      <div className="TermsWarnig">
        <p>Please read these Terms of Service carefully as they contain important information about your legal rights, remedies and obligations. By accessing or using the Airbnb Platform, you agree to comply with and be bound by these Terms of Service.</p>
        <p>Please note: <Link to="">Section 19</Link> of these Terms of Service contains an arbitration clause and class action waiver that applies to all Airbnb Members. If you reside in the United States, this provision applies to all disputes with Airbnb. If you reside outside of the United States, this provision applies to any action you bring against Airbnb in the United States. It affects how disputes with Airbnb are resolved. By accepting these Terms of Service, you agree to be bound by this arbitration clause and class action waiver. Please read it carefully.</p>
      </div>
      <p className="TermsUpdateDate">Last Updated: June 19, 2017</p>
      <p className="TermsThanks">Thank you for using goodParents!</p>
    </Container>
  )
};

export default Terms;