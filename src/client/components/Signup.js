import React from 'react';
import { CardBody, CardTitle, InputGroup, Input, Button } from "reactstrap";

const Signup = () => {
  return (
    <div className="mx-auto" style={{width: 20 + 'em', textAlign: "center"}}>
      <CardBody>
        <CardTitle className="font-weight-bold">회원가입</CardTitle>
        <br />
        <InputGroup className="mb-3">
          <Input placeholder="이메일 주소" type="email" />
        </InputGroup>
        <InputGroup className="mb-3">
          <Input placeholder="비밀번호" type="password" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="비밀번호 확인" type="password" />
        </InputGroup>
        <hr />
        <Button color="primary" size="md" block>회원가입</Button>
        <Button color="primary" size="md" block>카카오 계정으로 로그인하기</Button>
        <br />
        <p><a href="/login">이미 회원이신가요?</a></p>
      </CardBody>
    </div>
  );
}

export default Signup;
