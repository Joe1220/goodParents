import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Checkbox from "material-ui/Checkbox";

const styles = {
  container: { height: "550px" },
  title: {
    fontSize: "17px",
    fontWeight: "normal",
    color: "gray",
    padding: "15px"
  },
  hr: { marginTop: "0" },
  textfield: { padding: "15px" },
  button: { marginLeft: "370px", marginTop: "20px" },
  checkbox: { padding: "15px", marginTop: "40px" }
};
export default class BabyUpdate extends Component {
  state = {
    checked: false
  };

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked
      };
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>내 아이정보 추가</div>
          <hr style={styles.hr} />
          <TextField
            defaultValue="이름을 기재해주세요"
            floatingLabelText="이름"
            onChange={this.onhandleName}
            style={styles.textfield}
          />
          <br />
          <TextField
            defaultValue="생년월일 (예: 2007-09-11)"
            floatingLabelText="생년월일"
            onChange={this.onhandleName}
            style={styles.textfield}
          />
          <br />
          <TextField
            defaultValue="성별을 기재해주세요(예: 남)"
            floatingLabelText="성별"
            onChange={this.onhandleName}
            style={styles.textfield}
          />
          <br />
          <TextField
            defaultValue="몸무게를 기재해주세요(kg)"
            floatingLabelText="몸무개"
            onChange={this.onhandleName}
            style={styles.textfield}
          />
          <br />
          <TextField
            defaultValue="키를 기재해주세요(kg)"
            floatingLabelText="키"
            onChange={this.onhandleName}
            style={styles.textfield}
          />
          <br />
          <RaisedButton
            label="추가하기"
            primary={true}
            onClick={this.changeAccount}
            style={styles.button}
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
}
