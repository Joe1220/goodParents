import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  container: { height: "550px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
  button: { marginLeft: "370px", marginTop: "20px" },
  checkbox: { padding: "15px", marginTop: "40px"}
}
export default class DeliveryUpdate extends Component{
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>배송지 추가</div>
          <hr style={styles.hr}/>
          <TextField
            defaultValue="우편번호를 기재해주세요"
            floatingLabelText="우편번호"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
          <TextField
            defaultValue="주소지를 기재해주세요"
            floatingLabelText="주소"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
          <TextField
            defaultValue="상세 주소지를 기재해주세요"
            floatingLabelText="상세주소"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
          <Checkbox
          label="기본주소지로 설정"
          style={styles.checkbox}
          />
          <RaisedButton label="추가하기" primary={true} onClick={this.changeAccount}style={styles.button}/>
        </Paper>
      </MuiThemeProvider>
    )
  }
}