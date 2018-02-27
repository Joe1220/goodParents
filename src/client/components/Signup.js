import React, { Component } from 'react';
import { CardBody, CardTitle, InputGroup, Input, Button } from "reactstrap";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      else: false
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
    if(this.state.password === this.state.passwordConfirm){
    fetch(`/login?email=${this.state.email}?password=${this.state.password}`)
    .then(response => response.json())
    .then(data => this.setState({ authrize: data }))
    .catch(error => console.error(error));
    } else {
      this.setState({else: false, email: '', password: '', passwordConfirm: ''})
    }

  }
  render(){
    return (
      <div className="mx-auto" style={{width: 20 + 'em', textAlign: "center"}}>
        <CardBody>
          <CardTitle className="font-weight-bold">회원가입</CardTitle>
          <br />
          <InputGroup className="mb-3">
            <Input placeholder="이메일 주소" type="email" onChange={this.onChangeEmail}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <Input placeholder="비밀번호" type="password" onChange={this.onChangePassword}/>
          </InputGroup>
          <InputGroup>
            <Input placeholder="비밀번호 확인" type="password" onChange={this.onChangePassword}/>
          </InputGroup>
          {this.state.else ? '위의 비밀번호가 일치하지 않습니다' : ''}
          <hr />
          <Button color="primary" size="md" block onClick={this.onSubmit}>회원가입</Button>
          <br />
          <p><a href="/login">이미 회원이신가요?</a></p>
        </CardBody>
      </div>
    );
  }
}

export default Signup;
