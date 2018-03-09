import React from 'react';
import { Container } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  container: { width: "1110px", marginBottom: "100px" },
  content: { width: "1050px", margin: "0 auto", paddingTop: "15px" },
  title: { fontSize: "25px", fontWeight: "bold" },
  paymentcontainer: {  marginTop: "15px", marginBottom: "15px" },
  innerpayment: { padding: "15px" },
  userinfo: { fontWeight: "bold", fontSize: "20px" },
  hr: { marginTop: "10px", marginBottom: "23px" },
  paymentinfo: { fontWeight: "bold", fontSize: "20px", marginTop: "20px" },
}

export default class Payment extends React.Component {
  render(){
    console.log(this.props)
    return (
      <Container style={styles.container}>
        <div style={styles.content}>
          <div style={styles.title}>결제</div>
          <MuiThemeProvider>
            <div style={styles.paymentcontainer} >
              <div style={styles.innerpayment}>
              <div style={styles.userinfo}>주문자정보</div>
              <hr style={styles.hr} />
              <TextField
                hintText="수취인"
              /><br />
              <TextField
                hintText="핸드폰번호"
              /><br />
              <TextField
                hintText="우편번호"
              /><br />
              <TextField
                hintText="주소지"
                floatingLabelText="서울시 서초구 방배동"
                floatingLabelFixed={true}
              /><br />
              <TextField
                hintText="상세주소"
                floatingLabelText="00아파트 00동 00호"
                floatingLabelFixed={true}
              /><br />
              <TextField
                hintText="배송메세지"
                floatingLabelText="예) 사람 없으면 문앞에 두고 가주세요"
                floatingLabelFixed={true}
              /><br />
              <div style={styles.paymentinfo}>결제정보</div>
              <hr style={styles.hr} />
              <TextField
                hintText="Card Number"
              /><br />
              <TextField
                hintText="유효연도"
              /><br />
              <TextField
                hintText="유효월"
              /><br />
              <TextField
                hintText="CVC"
                floatingLabelText="CVC"
                type="password"
              /><br />
              <TextField
                hintText="성함"
              /><br />
              <RaisedButton onClick={this.toPayment}  label="결제하기" fullWidth={true} primary={true} />
              </div>
            </div>
          </MuiThemeProvider>
        </div>
      </Container>
    )
  }
}


