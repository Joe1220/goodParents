import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Container } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const Check = ({match}) => (
<MuiThemeProvider>
<Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
</MuiThemeProvider>
)
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

export default class MyPage extends Component {
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
            <Route path={`${url}/OrderCheck`} component={Check} />
            <Route path={`${url}/OrderCancle`} component={Cancle} />
            <Route path={`${url}/ExChangeCheck`} component={ExChangeCheck} />
            <Route path={`${url}/ExChangeCancle`} component={ExChangeCancle} />
            <Route path={`${url}/DelivaryCheck`} component={DelivaryCheck} />
            <Route path={`${url}/DelivaryUpdate`} component={DelivaryUpdate} />
            <Route path={`${url}/BabyCheck`} component={BabyCheck} />
            <Route path={`${url}/BabyUpdate`} component={BabyUpdate} />
            <Route path={`${url}/PamentsCheck`} component={PamentsCheck} />
            <Route path={`${url}/PamentsUpdate`} component={PamentsUpdate} />
            <Route path={`${url}/CouncellingCheck`} component={CouncellingCheck} />
            <Route path={`${url}/CouncellingRequest`} component={CouncellingRequest} />
            <Route path={`${url}/Acount`} component={Acount} />
          </div>
        </div>
      </Container>
    );
  }
};