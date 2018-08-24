import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const styles = {
  container: { height: "550px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
  button: { marginLeft: "370px", marginTop: "20px" }
}
export default class BillingUpdate extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>신용카드 업데이트</div>
          <hr style={styles.hr}/>
          <TextField
            defaultValue="카드번호를 기재해주세요"
            floatingLabelText="카드번호"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
          <TextField
            defaultValue="유효기간을 기재해주세요(월)"
            floatingLabelText="유효기간"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
          <TextField
            defaultValue="유효기간을 기재해주세요(년도)"
            floatingLabelText="유효기간"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
          <TextField
            defaultValue="성함을 기재해주세요"
            floatingLabelText="성함"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
          <TextField
            floatingLabelText="CVC"
            onChange={this.onhandleName}
            style={styles.textfield}
            type="password"
          /><br />
          <RaisedButton label="수정하기" primary={true} onClick={this.changeAccount}style={styles.button}/>
        </Paper>
      </MuiThemeProvider>
    )
  }
}