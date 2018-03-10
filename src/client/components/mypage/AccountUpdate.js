import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  container: { height: "400px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
  button: { marginLeft: "370px", marginTop: "20px" }
}

export default class AccountUpdate extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      telephone: '',
      email: ''
    }
    this.changeAccount = this.changeAccount.bind(this);
    this.onhandleName = this.onhandleName.bind(this);
    this.onhandleTelephone = this.onhandleTelephone.bind(this);
    this.onhandleEmail = this.onhandleEmail.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this)
    console.log(this.props);
  }
  handleRequestClose(){
    this.props.handleRequestClose();
  }
  onhandleName(e) {
    this.setState({name: e.target.value})
  }
  onhandleTelephone(e) {
    this.setState({telephone: e.target.value})
  }
  onhandleEmail(e) {
    this.setState({email: e.target.value})
  }
  changeAccount(){
    this.props.changeAccount({
      name: this.state.name,
      telephone: this.state.telephone,
      email: this.state.email
    })
  }
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>계정정보 업데이트</div>
          <hr style={styles.hr}/>
          <TextField
            defaultValue="변경하실 성함을 기재해주세요"
            floatingLabelText="성함"
            onChange={this.onhandleName}
            style={styles.textfield}
          /><br />
        <TextField
          defaultValue="변경하실 전화번호를 기재해주세요"
          floatingLabelText="전화번호"
          onChange={this.onhandleTelephone}
          style={styles.textfield}
        /><br />
        <TextField
          defaultValue="변경하실 이메일을 기재해주세요"
          floatingLabelText="이메일"
          onChange={this.onhandleEmail}
          style={styles.textfield}
        /><br />
        <RaisedButton label="수정하기" primary={true} onClick={this.changeAccount}style={styles.button}/>
        </Paper>
        <Snackbar
          open={this.props.snackbaropen}
          message="회원정보가 수정되었습니다"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </MuiThemeProvider>
    )
  }
}