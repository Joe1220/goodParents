import React from "react";
import { Container } from "reactstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const styles = {
  container: { width: "1110px", marginBottom: "100px" },
  content: { width: "1050px", margin: "0 auto", paddingTop: "15px" },
  title: { fontSize: "25px", fontWeight: "bold" },
  paymentcontainer: { marginTop: "15px", marginBottom: "15px" },
  innerpayment: { padding: "15px" },
  userinfo: { fontWeight: "bold", fontSize: "20px" },
  hr: { marginTop: "10px", marginBottom: "23px" },
  paymentinfo: { fontWeight: "bold", fontSize: "20px", marginTop: "20px" }
};

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value =
      target.type === "checkbox"
        ? target.checked
        : Number(target.value) ? Number(target.value) : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    const upperThis = this;
    return (
      <Container style={styles.container}>
        <div style={styles.content}>
          <div style={styles.title}>결제</div>
          <MuiThemeProvider>
            <div style={styles.paymentcontainer}>
              <div style={styles.innerpayment}>
                <div style={styles.userinfo}>주문자정보</div>
                <hr style={styles.hr} />
                <form
                  onSubmit={event => {
                    this.props.toPayment(this.state);
                    event.preventDefault();
                  }}
                >
                  <TextField
                    name="recipient"
                    hintText="수취인"
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="telephone"
                    hintText="핸드폰번호"
                    type="tel"
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="zipCode"
                    hintText="우편번호"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="address"
                    hintText="주소지"
                    floatingLabelText="서울시 서초구 방배동"
                    floatingLabelFixed={true}
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="addressDetail"
                    hintText="상세주소"
                    floatingLabelText="00아파트 00동 00호"
                    floatingLabelFixed={true}
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="deliveryMessage"
                    hintText="배송메세지"
                    floatingLabelText="예) 사람 없으면 문앞에 두고 가주세요"
                    floatingLabelFixed={true}
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <div style={styles.paymentinfo}>결제정보</div>
                  <hr style={styles.hr} />
                  <TextField
                    name="cardNumber"
                    hintText="Card Number"
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="expYear"
                    hintText="유효연도"
                    type="number"
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="expMonth"
                    hintText="유효월"
                    type="number"
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="CVC"
                    hintText="CVC"
                    // floatingLabelText="CVC"
                    type="number"
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <TextField
                    name="name"
                    hintText="성함"
                    required
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <RaisedButton
                    // onClick={() => console.log(upperThis.props)}
                    label="결제하기"
                    fullWidth={true}
                    primary={true}
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </MuiThemeProvider>
        </div>
      </Container>
    );
  }
}
