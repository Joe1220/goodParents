import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
  container: { height: "200px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
}
export default class BillingCheck extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>신용카드 정보 확인</div>
          <hr style={styles.hr}/>
          <TextField
            value="110 256 690 995"
            floatingLabelText="카드번호"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
        </Paper>
      </MuiThemeProvider>
    )
  }
}