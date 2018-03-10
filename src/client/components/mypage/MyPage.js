import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Container } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

import Check from './Check';
import Cancle from './Cancle';
import ExchangeCheck from './ExchangeCheck';
import ExchangeCancle from './ExchangeCancle';
import DeliveryCheck from './DeliveryCheck';
import DeliveryUpdate from './DeliveryUpdate';
import BabyCheck from './BabyCheck';
import BabyUpdate from './BabyUpdate';
import BillingCheck from './BillingCheck';
import BillingUpdate from './BillingUpdate';
import CouncellingCheck from './CouncellingCheck';
import CouncellingRequest from './CouncellingRequest';
import AccountCheck from './AccountCheck';
import AccountUpdate from './AccountUpdate';

const styles = {
  ul: { listStyleType: "none" },
  li: { marginBottom: "15px" },
  a: { textDecoration: "none", color: "gray" }
}

export default class MyPage extends Component {
  constructor(props){
    super(props);
    this.changeAccount = this.changeAccount.bind(this);
  }
  changeAccount(userinfo){
    this.props.changeAccount(userinfo);
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
            <ul style={styles.ul}>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/OrderCheck`}>주문확인</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/OrderCancle`}>주문취소</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/ExchangeCheck`}>교환신청</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/ExchangeCancle`}>교환신청</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/DeliveryCheck`}>배송지확인</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/DeliveryUpdate`}>배송지추가</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/BabyCheck`}>아이정보</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/BabyUpdate`}>아이등록</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/BillingCheck`}>결제정보확인</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/BillingUpdate`}>결제정보업데이트</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/CouncellingCheck`}>1:1질문확인</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/CouncellingRequest`}>1:1질문신청</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/AccountCheck`} onClick={this.getAccount}>계정확인</Link>
              </li>
              <li style={styles.li}>
                <Link style={styles.a} to={`${url}/AccountUpdate`} onClick={this.getAccount}>계정수정</Link>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, padding: "30px" }}>
            <Route exact path={url} render={() => (<h3>Please select any post</h3>)} />
            <Route path={`${url}/OrderCheck`} render={(props)=>{return <Check {...props}/>}} />
            <Route path={`${url}/OrderCancle`} render={(props)=>{return <Cancle {...props}/>}} />
            <Route path={`${url}/ExchangeCheck`} render={(props)=>{return <ExchangeCheck {...props}/>}} />
            <Route path={`${url}/ExchangeCancle`} render={(props)=>{return <ExchangeCancle {...props}/>}} />
            <Route path={`${url}/DeliveryCheck`} render={(props)=>{return <DeliveryCheck {...props}/>}} />
            <Route path={`${url}/DeliveryUpdate`} render={(props)=>{return <DeliveryUpdate {...props}/>}} />
            <Route path={`${url}/BabyCheck`} render={(props)=>{return <BabyCheck {...props}/>}} />
            <Route path={`${url}/BabyUpdate`} render={(props)=>{return <BabyUpdate {...props}/>}} />
            <Route path={`${url}/BillingCheck`} render={(props)=>{return <BillingCheck {...props}/>}}/>
            <Route path={`${url}/BillingUpdate`} render={(props)=>{return <BillingUpdate {...props}/>}} />
            <Route path={`${url}/CouncellingCheck`} render={(props)=>{return <CouncellingCheck {...props}/>}} />
            <Route path={`${url}/CouncellingRequest`} render={(props)=>{return <CouncellingRequest {...props}/>}} />
            <Route path={`${url}/AccountCheck`} render={(props)=>{return <AccountCheck {...props} account={this.props.account}/>}} />
            <Route path={`${url}/AccountUpdate`} render={(props)=>{return <AccountUpdate {...props}  changeAccount={this.props.changeAccount}/>}} />
          </div>
        </div>
      </Container>
    );
  }
};