import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  paper: { color: "gray", marginBottom: "15px" },
  when: { fontSize: "17px", fontWeight: "normal", padding: "15px" },
  hr: { marginTop: "0"},
  orderbox: { padding: "0 15px 0 15px", display: "flex" }
}

export default class Check extends Component{
  constructor(props){
    super(props);
    // this.renderitems = this.renderitems.bind(this);
    this.renderorderhistory = this.renderorderhistory.bind(this);
  }
  renderorderhistory(){
    return this.props.orderhistory.map((item, index)=>{
      return (
        <Paper key={index} style={styles.paper}>
          <div style={styles.when}>{item.date.slice(0,4)}년 {item.date.slice(5,7)}월 {item.date.slice(8,10)}일 주문내역</div>
          <hr style={styles.hr}/>
          {item.items.map((order, i)=>{
            console.log("items", order)
            return (
              <div style={styles.orderbox}>
                <div style={{ width: "30px", margin: "15px"}}>{i+1}</div>
                <div style={{ width: "100px", margin: "15px"}}>{order.month}월 {order.day}일</div>
                <div style={{ width: "250px", margin: "15px"}}>{order._id.name}</div>
                <div style={{ width: "70px", margin: "15px"}}>{order.qty}개</div>
                <div style={{ width: "100px", margin: "15px"}}>배송준비중</div>
                <div style={{ width: "100px", margin: "15px", marginTop: "6px"}}>
                  <RaisedButton label="취소" secondary={true}  />
                </div>
              </div>
            )
          })}
        </Paper>
      )
    })
  }
  render(){
    console.log("check",this.props.orderhistory)
    return (
      <div>
        <MuiThemeProvider>
          {this.renderorderhistory()}
        </MuiThemeProvider>
      </div>
    )
  }
}
