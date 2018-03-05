import React, { Component } from 'react';
import { CardBody, CardTitle, InputGroup, Input, Button } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }
  onSubmit() {
    const url = `/api/auth/login`;
    const data = { email: this.state.email, password: this.state.password }
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "logged in successfully") {
          window.sessionStorage.setItem("name", data.name)
          window.sessionStorage.setItem("auth", data.admin)
          return data;
        } else if (data.message === "login failed") {
          this.props.history.push("/signup")
        }
      })
      .then(data => {
        if (data) {
          this.props.history.push("/")
        }
      })

      // })
      .catch(error => console.error(error));
  }

  render() {
    console.log("Login page", this.props)
    return (
      <div className="mx-auto" style={{ width: 20 + 'em', textAlign: "center", marginBottom: "280px" }}>
        <CardBody>
          <CardTitle className="font-weight-bold">로그인</CardTitle>
          <br />
          <InputGroup className="mb-3">
            <Input placeholder="이메일 주소" type="email" onChange={this.onChangeEmail} />
          </InputGroup>
          <InputGroup>
            <Input placeholder="비밀번호" type="password" onChange={this.onChangePassword} />
          </InputGroup>
          <hr />
          <Button color="primary" size="md" block onClick={this.onSubmit}>로그인하기</Button>
          <br />
          <p><a href="/signup">아직 회원이 아니신가요?</a></p>
        </CardBody>
      </div>
    );
  }
}

export default Login;
