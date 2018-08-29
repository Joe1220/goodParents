import React, { Component } from "react";
import { Container } from "reactstrap";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Snackbar from 'material-ui/Snackbar';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const styles = {
  container: { display: "flex", marginBottom: "50px" },
  imagecontainer: {
    width: "600px",
    height: "700px",
    marginRight: "15px",
    marginTop: "15px"
  },
  image: { width: "600px", height: "700px", objectFit: "cover" },
  detailcontainer: {
    width: "621px",
    height: "700px",
    marginLeft: "15px",
    marginTop: "15px"
  },
  date: { marginBottom: "5px", fontWeight: "bold" },
  when: { color: "rgb(25,25,221)" },
  title: { fontSize: "28px", fontWeight: "bold" },
  hr: { maxWidth: "40px", marginLeft: "0px", border: "1px solid black" },
  fooddetail: { fontSize: "15px" },
  price: { marginTop: "32px", fontSize: "17px", fontWeight: "bold" },
  delivery: { fontSize: "10px", fontWeight: "normal" },
  cart: {
    marginTop: "16px",
    marginBottom: "55px",
    padding: "4px, 10px, 2px, 10px",
    width: "200px"
  },
  tablist: { listStyleType: "none", padding: "0 0 0 0" },
  tab: { display: "inline-block", marginRight: "20px", fontSize: "15px" },
  a: { textDecoration: "none", color: "black" }
};

class FoodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.toCart = this.toCart.bind(this);
    this.snackbarClose = this.snackbarClose.bind(this);
  }
  handleChange = value => {
    this.setState({
      value: value
    });
  };
  snackbarClose() {
    this.props.snackbarClose('fooddetail');
  }
  toCart = () => {
    const url = "/api/cart";
    let year = parseInt(this.props.fullDate.slice(0, 4), 10);
    let month = parseInt(this.props.fullDate.slice(5, 7), 10);
    let day = parseInt(this.props.fullDate.slice(8), 10);
    const data = {
      item: this.props.id,
      checked: true,
      year: year,
      month: month,
      day: day
    };

    if (!window.sessionStorage.getItem("name")) {
      this.props.history.push("/login");
    } else {
      return fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          this.props.snackbarOpen('fooddetail');
          return res.status;
        })
        .catch(err => console.error(err));
    }
  };
  render() {
    let fullDate = new Date(this.props.fullDate).toString();
    let month = fullDate.slice(4, 7);
    let date = this.props.fullDate.slice(8);
    return (
      <Container style={styles.container}>
        <div style={styles.imagecontainer} className="FoodDetail">
          <img style={styles.image} src={this.props.image} alt="food" />
        </div>
        <div style={styles.detailcontainer} className="FoodDetail">
          <div style={styles.date}>
            {date} {month} <span style={styles.when}>Lunch</span>
          </div>
          <div style={styles.title}>{this.props.name}</div>
          <hr style={styles.hr} />
          <div style={styles.fooddetail}>{this.props.subname}</div>
          <div style={styles.price}>
            {this.props.price} 원{" "}
            <span style={styles.delivery}>free delivery</span>
          </div>
          <MuiThemeProvider>
            <RaisedButton
              onClick={this.toCart}
              label="장바구니"
              primary={true}
              style={styles.cart}
            />
          </MuiThemeProvider>
          <Tabs style={styles.tabs}>
            <TabList style={styles.tablist}>
              <Tab style={styles.tab}>
                <a style={styles.a} href="#1">
                  재료
                </a>
                <hr />
              </Tab>
              <Tab style={styles.tab}>
                <a style={styles.a} href="#2">
                  영양소
                </a>
                <hr />
              </Tab>
            </TabList>

            <TabPanel>
              <span>
                {this.props.ingredients.map((ingredient, index) => {
                  return <p key={index}>{ingredient.name} </p>
                })}
              </span>
            </TabPanel>
            <TabPanel>
              <span>
                {this.props.nutrients.map((nutrient, index) => {
                  return <p key={index}>{nutrient.name} </p>
                })}
              </span>
            </TabPanel>
            <hr style={styles.hr} />
          </Tabs>
          <div>Calories</div>
          <div>{this.props.calorie} kcal</div>
        </div>
        <MuiThemeProvider>
          <Snackbar
            open={this.props.snackbar}
            message="장바구니에 추가되었습니다"
            autoHideDuration={4000}
            onRequestClose={this.snackbarClose}
          />
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default FoodDetail;
