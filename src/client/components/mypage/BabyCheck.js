import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
  container: { height: "500px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
}
export default class BabyCheck extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>내 아이정보 확인</div>
          <hr style={styles.hr}/>
          <TextField
            value="조영아"
            floatingLabelText="이름"
            style={styles.textfield}
          /><br />
          <TextField
            value="1 살 9 개월"
            floatingLabelText="나이"
            style={styles.textfield}
          /><br />
          <TextField
            value="여"
            floatingLabelText="성별"
            style={styles.textfield}
          /><br />
          <TextField
            value="3kg"
            floatingLabelText="몸무개"
            style={styles.textfield}
          /><br />
          <TextField
            value="65cm"
            floatingLabelText="키"
            style={styles.textfield}
          /><br />
        </Paper>
      </MuiThemeProvider>
    )
  }
}