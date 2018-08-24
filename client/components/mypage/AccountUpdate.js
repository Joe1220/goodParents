import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const styles = {
  container: { height: "400px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0" },
  textfield: { padding: "15px" },
  button: { marginLeft: "370px", marginTop: "20px" }
}

export default class AccountUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.account.name,
      telephone: props.account.telephone,
      email: props.account.email
    }
    this.changeAccount = this.changeAccount.bind(this);
    this.onhandleState = this.onhandleState.bind(this);
  }

  onhandleState(name, value) {
    const obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  changeAccount() {
    this.props.changeAccount({
      name: this.state.name,
      telephone: this.state.telephone,
      email: this.state.email
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>계정정보 업데이트</div>
          <hr style={styles.hr} />
          <TextField
            value={this.state.name}
            floatingLabelText="성함"
            onChange={e => this.onhandleState("name", e.target.value)}
            style={styles.textfield}
          /><br />
          <TextField
            value={this.state.telephone}
            floatingLabelText="전화번호"
            onChange={e => this.onhandleState("telephone", e.target.value)}
            style={styles.textfield}
            type="tel"
          /><br />
          <TextField
            value={this.state.email}
            floatingLabelText="이메일"
            onChange={e => this.onhandleState("email", e.target.value)}
            style={styles.textfield}
          /><br />
          <RaisedButton label="수정하기" primary={true} onClick={this.changeAccount} style={styles.button} />
        </Paper>
      </MuiThemeProvider>
    )
  }
}