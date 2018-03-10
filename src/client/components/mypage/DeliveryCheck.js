import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const styles = {
  container: { height: "350px" },
  title: { fontSize: "17px", fontWeight: "normal", color: "gray", padding: "15px" },
  hr: { marginTop: "0"},
  textfield: { padding: "15px" },
}
export default class DeliveryCheck extends Component{
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>배송지 정보확인</div>
          <hr style={styles.hr}/>
          <Table onRowSelection={this.handleRowSelection}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>우편번호</TableHeaderColumn>
                <TableHeaderColumn>주소지</TableHeaderColumn>
                <TableHeaderColumn>상세주소</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow selected={this.isSelected(0)}>
                <TableRowColumn>00000</TableRowColumn>
                <TableRowColumn>서울시 서초구 방배동</TableRowColumn>
                <TableRowColumn>00아파트00동000호</TableRowColumn>
              </TableRow>
              <TableRow selected={this.isSelected(1)}>
                <TableRowColumn>11111</TableRowColumn>
                <TableRowColumn>서울시 서초구 방배동</TableRowColumn>
                <TableRowColumn>00아파트00동000호</TableRowColumn>
              </TableRow>
              <TableRow selected={this.isSelected(2)}>
                <TableRowColumn>22222</TableRowColumn>
                <TableRowColumn>서울시 서초구 방배동</TableRowColumn>
                <TableRowColumn>00아파트00동000호</TableRowColumn>
              </TableRow>
              <TableRow selected={this.isSelected(3)}>
                <TableRowColumn>33333</TableRowColumn>
                <TableRowColumn>서울시 서초구 방배동</TableRowColumn>
                <TableRowColumn>00아파트00동000호</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </MuiThemeProvider>
    )
  }
}