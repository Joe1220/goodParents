import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const styles = {
  container: { height: "350px" },
  title: {
    fontSize: "17px",
    fontWeight: "normal",
    color: "gray",
    padding: "15px"
  },
  hr: { marginTop: "0" },
  textfield: { padding: "15px" }
};

export default class BabyCheck extends Component {
  state = {
    selected: [1]
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <Paper style={styles.container}>
          <div style={styles.title}>내 아이정보</div>
          <hr style={styles.hr} />
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>이름</TableHeaderColumn>
                <TableHeaderColumn>생년월일</TableHeaderColumn>
                <TableHeaderColumn>성별</TableHeaderColumn>
                <TableHeaderColumn>키 (cm)</TableHeaderColumn>
                <TableHeaderColumn>몸무게 (kg)</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>김개똥</TableRowColumn>
                <TableRowColumn>2018년 9월 12일</TableRowColumn>
                <TableRowColumn>남자</TableRowColumn>
                <TableRowColumn>120</TableRowColumn>
                <TableRowColumn>12</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </MuiThemeProvider>
    );
  }
}
