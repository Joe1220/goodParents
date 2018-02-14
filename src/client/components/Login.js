import React from 'react';
import { Card, CardBody, CardTitle, InputGroup, Input, Button } from "reactstrap";

const Login = () => {
  return (
    <div className="mx-auto" style={{width: 20 + 'em', textAlign: "center"}}>
      <CardBody>
        <CardTitle className="font-weight-bold">로그인</CardTitle>
        <br />
        <InputGroup className="mb-3">
          <Input placeholder="이메일 주소" type="email" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="비밀번호" type="password" />
        </InputGroup>
        <hr />
        <Button color="primary" size="lg" block>로그인하기</Button>
        <Button color="primary" size="lg" block>카카오 계정으로 로그인하기</Button>
        <br />
        <p><a href="/signup">아직 회원이 아니신가요?</a></p>
      </CardBody>
    </div>
  );
}

export default Login;
