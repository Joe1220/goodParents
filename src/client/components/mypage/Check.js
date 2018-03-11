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
  render(){
    console.log("check",this.props.orderhistory)
    return (
      <MuiThemeProvider>
        <Paper style={styles.paper}>
          <div style={styles.when}>2018년 3월 18일</div>
          <hr style={styles.hr}/>
          <div style={styles.orderbox}>
            <div style={{ width: "30px", margin: "15px"}}>1</div>
            <div style={{ width: "100px", margin: "15px"}}>3월 15일</div>
            <div style={{ width: "250px", margin: "15px"}}>시금치무국</div>
            <div style={{ width: "70px", margin: "15px"}}>2개</div>
            <div style={{ width: "100px", margin: "15px"}}>배송중</div>
            <div style={{ width: "100px", margin: "15px", marginTop: "6px"}}>
              <RaisedButton label="취소" secondary={true}  />
            </div>
          </div>
          <div style={styles.orderbox}>
            <div style={{ width: "30px", margin: "15px"}}>1</div>
            <div style={{ width: "100px", margin: "15px"}}>3월 15일</div>
            <div style={{ width: "250px", margin: "15px"}}>시금치무국</div>
            <div style={{ width: "70px", margin: "15px"}}>2개</div>
            <div style={{ width: "100px", margin: "15px"}}>배송중</div>
            <div style={{ width: "100px", margin: "15px", marginTop: "6px"}}>
              <RaisedButton label="취소" secondary={true}  />
            </div>
          </div>
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.when}>2018년 3월 18일</div>
          <hr style={styles.hr}/>
          <div style={styles.orderbox}>
            <div style={{ width: "30px", margin: "15px"}}>1</div>
            <div style={{ width: "100px", margin: "15px"}}>3월 15일</div>
            <div style={{ width: "250px", margin: "15px"}}>시금치무국</div>
            <div style={{ width: "70px", margin: "15px"}}>2개</div>
            <div style={{ width: "100px", margin: "15px"}}>배송중</div>
            <div style={{ width: "100px", margin: "15px", marginTop: "6px"}}>
              <RaisedButton label="취소" secondary={true}  />
            </div>
          </div>
          <div style={styles.orderbox}>
            <div style={{ width: "30px", margin: "15px"}}>1</div>
            <div style={{ width: "100px", margin: "15px"}}>3월 15일</div>
            <div style={{ width: "250px", margin: "15px"}}>시금치무국</div>
            <div style={{ width: "70px", margin: "15px"}}>2개</div>
            <div style={{ width: "100px", margin: "15px"}}>배송중</div>
            <div style={{ width: "100px", margin: "15px", marginTop: "6px"}}>
              <RaisedButton label="취소" secondary={true}  />
            </div>
          </div>
        </Paper>
      </MuiThemeProvider>
    )
  }
}