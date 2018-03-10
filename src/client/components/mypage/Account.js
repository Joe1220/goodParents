import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: { backgroundColor: "#efefef", height: "400px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
  button: { marginLeft: "370px", marginTop: "20px" }
}
export default class Account extends Component{
  render(){
    const {name, telephone, email} = this.props.account;
    console.log(name)
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <div style={styles.title}>계정관리</div>
          <hr style={styles.hr}/>
          <TextField
            value={name}
            floatingLabelText="성함"
            style={styles.textfield}
          /><br />
        <TextField
          value={telephone}
          floatingLabelText="전화번호"
          style={styles.textfield}
        /><br />
        <TextField
          value={email}
          floatingLabelText="이메일"
          style={styles.textfield}
        /><br />
        <RaisedButton label="수정하기" primary={true} style={styles.button}/>
        </div>
      </MuiThemeProvider>
    )
  }
}