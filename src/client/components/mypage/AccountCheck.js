import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
  container: { height: "400px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
}
export default class AccountCheck extends Component{
  render(){
    const {name, telephone, email} = this.props.account;
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>계정정보 확인</div>
          <hr style={styles.hr}/>
          <TextField
            value={name}
            floatingLabelText="성함"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
        <TextField
          value={telephone}
          floatingLabelText="전화번호"
          onChange={this.onhandleTelephone}
          style={styles.textfield}
        /><br />
        <TextField
          value={email}
          floatingLabelText="이메일"
          onChange={this.onhandleEmail}
          style={styles.textfield}
        /><br />
        </Paper>
      </MuiThemeProvider>
    )
  }
}