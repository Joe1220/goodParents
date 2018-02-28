import React, { Component } from 'react';
import { CardBody, CardTitle, InputGroup, Input, Button } from "reactstrap";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeEmail(e){
    this.setState({email: e.target.value})
  }
  onChangePassword(e){
    this.setState({password: e.target.value})
  }
  onSubmit(){
    let upperThis = this;
    const url = `/login`;
    const data = {email:this.state.email, password: this.state.password}
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(data => this.props.onAuth(data))
    .catch(error => console.error(error));
  }

  render(){
    return (
      <div className="mx-auto" style={{width: 20 + 'em', textAlign: "center"}}>
        <CardBody>
          <CardTitle className="font-weight-bold">로그인</CardTitle>
          <br />
          <InputGroup className="mb-3">
            <Input placeholder="이메일 주소" type="email" onChange={this.onChangeEmail}/>
          </InputGroup>
          <InputGroup>
            <Input placeholder="비밀번호" type="password" onChange={this.onChangePassword}/>
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
