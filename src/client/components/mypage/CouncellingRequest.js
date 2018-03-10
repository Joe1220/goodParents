import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';

const styles = {
  container: { height: "550px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
  button: { marginLeft: "370px", marginTop: "20px" }
}
export default class CouncellingRequest extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>1:1 질문 신청</div>
          <hr style={styles.hr}/>
          <RaisedButton label="신청하기" primary={true} onClick={this.changeAccount}style={styles.button}/>
        </Paper>
      </MuiThemeProvider>
    )
  }
}