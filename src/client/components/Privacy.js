import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../public/style/Privacy.css'

const Privacy = () => {
  return(
    <Container className="Privacy">
      <h1>Privacy of Service</h1>
      <div className="PrivacyWarnig">
        <p>Please read these Terms of Service carefully as they contain important information about your legal rights, remedies and obligations. By accessing or using the Airbnb Platform, you agree to comply with and be bound by these Terms of Service.</p>
        <p>Please note: <Link to="">Section 19</Link> of these Terms of Service contains an arbitration clause and class action waiver that applies to all Airbnb Members. If you reside in the United States, this provision applies to all disputes with Airbnb. If you reside outside of the United States, this provision applies to any action you bring against Airbnb in the United States. It affects how disputes with Airbnb are resolved. By accepting these Terms of Service, you agree to be bound by this arbitration clause and class action waiver. Please read it carefully.</p>
      </div>
      <p className="PrivacyUpdateDate">Last Updated: June 19, 2017</p>
      <p className="PrivacyThanks">Thank you for using goodParents!</p>
    </Container>
  )
};

export default Privacy;