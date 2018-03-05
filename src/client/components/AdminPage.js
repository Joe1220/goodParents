import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const AdminPageLink = ({ match }) => {
  return (
    <div>
      {match.params.id}
    </div>
  );
};

export default class AdminPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const url = this.props.match.url;
    return (
      <Container style={{ marginBottom: "150px" }}>
        <div style={{ display: "flex" }}>
          <div style={{
            paddingTop: "30px",
            width: "200px"
          }}>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/OrderCheck`}>유저주문확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/OrderCancle`}>유저주문취소</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/ExChangeCheck`}>유저교환신청</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/ExChangeCancle`}>유저교환신청</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/DelivaryCheck`}>유저배송지확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/DelivaryUpdate`}>유저배송지추가</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/BabyCheck`}>유저아이정보</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/BabyUpdate`}>유저아이등록</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/PamentsCheck`}>유저결제정보확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/PamentsUpdate`}>유저결제정보업데이트</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/CouncellingCheck`}>유저 1:1질문확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/CouncellingRequest`}>유저 1:1질문신청</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/Acount`}>유저 계정관리</Link>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, padding: "30px" }}>
            <Route exact path={url} render={() => (<h3>Please select any post</h3>)} />
            <Route path={`${url}/:id`} component={AdminPageLink} />
          </div>
        </div>
      </Container>
    );
  }
};