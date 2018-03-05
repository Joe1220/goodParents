import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const Check = ({match}) => <h1>Check</h1>;
const Cancle = ({match}) => <h1>Cancle</h1>;
const ExChangeCheck = ({match}) => <h1>ExChangeCheck</h1>;
const ExChangeCancle = ({match}) => <h1>ExChangeCancle</h1>;
const DelivaryCheck = ({match}) => <h1>DelivaryCheck</h1>;
const DelivaryUpdate = ({match}) => <h1>DelivaryUpdate</h1>;
const BabyCheck = ({match}) => <h1>BabyCheck</h1>;
const BabyUpdate = ({match}) => <h1>BabyUpdate</h1>;
const PamentsCheck = ({match}) => <h1>PamentsCheck</h1>;
const PamentsUpdate = ({match}) => <h1>PamentsUpdate</h1>;
const CouncellingCheck = ({match}) => <h1>CouncellingCheck</h1>;
const CouncellingRequest = ({match}) => <h1>CouncellingRequest</h1>;
const Acount = ({match}) => <h1>Acount</h1>;

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
            <Route path={`${url}/OrderCheck`} component={Check} />
            <Route path={`${url}/OrderCancle`} component={Cancle} />
            <Route path={`${url}/ExChangeCheck`} component={ExChangeCheck} />
            <Route path={`${url}/ExChangeCancle`} component={Cancle} />
            <Route path={`${url}/DelivaryCheck`} component={Cancle} />
            <Route path={`${url}/DelivaryUpdate`} component={Cancle} />
            <Route path={`${url}/BabyCheck`} component={Cancle} />
            <Route path={`${url}/BabyUpdate`} component={Cancle} />
            <Route path={`${url}/PamentsCheck`} component={Cancle} />
            <Route path={`${url}/PamentsUpdate`} component={Cancle} />
            <Route path={`${url}/CouncellingCheck`} component={Cancle} />
            <Route path={`${url}/CouncellingRequest`} component={Cancle} />
            <Route path={`${url}/Acount`} component={Cancle} />
            {/* <Route path={`${url}/:id`} component={AdminPageLink} /> */}
          </div>
        </div>
      </Container>
    );
  }
};