import React, { Component } from 'react';
import { Container, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const MyPageLink = ({ match }) => {
  return (
    <div>
      {match.params.id}
    </div>
  );
};

export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/OrderCheck`}>주문확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/OrderCancle`}>주문취소</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/ExChangeCheck`}>교환신청</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/ExChangeCancle`}>교환신청</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/DelivaryCheck`}>배송지확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/DelivaryUpdate`}>배송지추가</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/BabyCheck`}>아이정보</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/BabyUpdate`}>아이등록</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/PamentsCheck`}>결제정보확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/PamentsUpdate`}>결제정보업데이트</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/CouncellingCheck`}>1:1질문확인</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/CouncellingRequest`}>1:1질문신청</Link>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/Acount`}>계정관리</Link>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, padding: "30px" }}>
            <Route exact path={url} render={() => (<h3>Please select any post</h3>)} />
            <Route path={`${url}/:id`} component={MyPageLink} />
          </div>
        </div>
      </Container>
    );
  }
};