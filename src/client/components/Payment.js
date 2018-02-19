import React from 'react';
import { Container, Row, Col,
         Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../public/style/Payment.css";
import PaymentInfo from './PaymentInfo';
import PaymentInfoResult from './PaymentInfoResult';

class Payment extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="payment_head_text"><h3 className="text-center font-weight-bold">결제</h3></Col>
          </Row>

          <Row>

            <Col sm="1"></Col>

            <Col sm="7">
              <p className="font-weight-bold">주문자 정보</p>
              <hr />
              {/* 결제 정보 입력폼 */}
              <Form>
                <FormGroup row>
                  <Label sm="2"><p className="form_label">수취인</p></Label>
                  <Col sm="5">
                    <Input type="text" name="name" className="payment_placeholder" placeholder="수취인을 입력해주세요"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm="2"><p className="form_label">핸드폰 번호</p></Label>
                  <Col sm="5">
                    <Input type="text" name="phone" className="payment_placeholder" placeholder="핸드폰 번호를 입력해주세요"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm="2"><p className="form_label">우편번호</p></Label>
                  <Col sm="5">
                    <Input type="text" name="zipcode" className="payment_placeholder" placeholder="우편번호를 입력해주세요"/>
                  </Col>
                  <Button sm="4" size="sm">우편번호검색</Button>
                </FormGroup>
                <FormGroup row>
                  <Label sm="2"><p className="form_label">주소지</p></Label>
                  <Col sm="10">
                    <Input type="text" name="address" className="payment_placeholder" placeholder="주소를 입력해주세요"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm="2"><p className="form_label">상세 주소</p></Label>
                  <Col sm="10">
                    <Input type="text" name="address_detail" className="payment_placeholder" placeholder="상세주소를 입력해주세요"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm="2"><p className="form_label">배송 메세지</p></Label>
                  <Col sm="10">
                    <Input type="text" name="message" className="payment_placeholder" placeholder="배송 메세지를 입력해주세요"/>
                  </Col>
                </FormGroup>
                {/* 쿠폰 관련 */}
                <br />
                <p className="font-weight-bold">쿠폰 정보</p>
                <hr />
                <FormGroup row>
                  <Label sm="2"><p className="form_label">수취인</p></Label>
                  <Col sm="5">
                    <Input type="text" name="coupon" className="payment_placeholder" placeholder="우편번호를 입력해주세요"/>
                  </Col>
                  <Button sm="4" size="sm">쿠폰 적용</Button>
                </FormGroup>
                {/* 결제 방법 버튼 */}
                <br />
                <p className="font-weight-bold">결제 방법</p>
                <hr />
                <Row>
                  <Col sm="2"></Col>
                  <Button className="payment">
                    <Row className="payment_obtion">
                      <i className="material-icons md-2">touch_app</i>
                    </Row>
                    <p>간편 결제</p>
                  </Button>
                  <Button className="payment">
                    <Row className="payment_obtion">
                      <i class="material-icons md-2">credit_card</i>
                    </Row>
                    <p>카드 결제</p>
                  </Button>
                  <Button className="payment">
                    <Row className="payment_obtion">
                      <i class="material-icons md-2">call_to_action</i>
                    </Row>
                    <p>무통장 입금</p>
                  </Button>
                </Row>
              </Form>
            </Col>

            <Col sm="3">
              <Container id="payment_info_box">
                <p className="font-weight-bold">결제 상품 정보</p>
                <hr />
                <PaymentInfo />
                <PaymentInfo />
                <br />
                <p className="font-weight-bold">결제 정보</p>
                <hr />
                <PaymentInfoResult />
              </Container>
            </Col>

            <Col sm="1"></Col>

          </Row>
        </Container>
      </div>
    )
  }
};

export default Payment;
