import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const styles = {
  container: { display: "flex", marginBottom: "50px" },
  imagecontainer: { width: "457.5px", height: "703px", marginRight: "15px", marginTop: "15px"},
  image: { width: "457.5px", height: "703px" },
  detailcontainer: { width: "621px", height: "703px", marginLeft: "15px", marginTop: "15px" },
  date: { marginBottom: "5px", fontWeight: "bold" },
  when: { color: "rgb(25,25,221)" },
  title: { fontSize: "28px", fontWeight: "bold" },
  hr: { maxWidth: "40px", marginLeft: "0px", border: "1px solid black" },
  fooddetail: { fontSize: "15px" },
  price: { marginTop: "32px", fontSize: "17px", fontWeight: "bold" },
  delivery: { fontSize: "10px", fontWeight: "normal" },
  cart: { marginTop: "16px", marginBottom: "55px", padding: "4px, 10px, 2px, 10px", width: "200px" },
  tablist: { listStyleType: "none", padding: "0 0 0 0"},
  tab: { display: "inline-block", marginRight: "20px", fontSize: "15px"},
  a: { textDecoration: "none", color: "black"}
}

class FoodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    }
    this.toCart = this.toCart.bind(this);
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  toCart = () => {
    const url = '/api/cart';
    let year = parseInt(this.props.fullDate.slice(0, 4), 10);
    let month = parseInt(this.props.fullDate.slice(5, 7), 10);
    let date = parseInt(this.props.fullDate.slice(8), 10);
    const data = { item: this.props.id, checked: true, year: year, month: month, date: date };
    if( !window.sessionStorage.getItem("name") ){
      this.props.history.push("/login");
    } else {
      return fetch(url,{
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res => {
        return res.status;
      })
      .catch(err => console.error(err));
    }
  }
  render() {
    let fullDate = new Date(this.props.fullDate).toString();
    let month = fullDate.slice(4, 7);
    let date = this.props.fullDate.slice(8)
    console.log("fooddetail", this.props)
    return (
      <Container style={styles.container} >
        <div style={styles.imagecontainer} className="FoodDetail"><img style={styles.image} src={this.props.image} alt="food"/></div>
        <div style={styles.detailcontainer} className="FoodDetail">
          <div style={styles.date}>{date} {month}  <span style={styles.when}>Lunch</span></div>
          <div style={styles.title}>{this.props.name}</div>
          <hr style={styles.hr} />
          <div style={styles.fooddetail}>{this.props.subname}</div>
          <div style={styles.price}>{this.props.price} 원 <span style={styles.delivery}>free delivery</span></div>
          <MuiThemeProvider>
            <RaisedButton onClick={this.toCart}label="장바구니" primary={true} style={styles.cart}/>
          </MuiThemeProvider>
          <Tabs style={styles.tabs}>
            <TabList style={styles.tablist}>
              <Tab style={styles.tab}><a style={styles.a} href="#1">재료</a><hr/></Tab>
              <Tab style={styles.tab}><a style={styles.a} href="#2">영양소</a><hr/></Tab>
            </TabList>

            <TabPanel >
              <p style={{height: "100px"}}>
              Barley, Carrot, Mushroom, Olive Oil, Onions, Salt and Black Pepper, Spinach, Thyme
              </p>
            </TabPanel>
            <TabPanel >
              <p style={{height: "100px"}}>
              Our culinary wizards carefully craft our dishes in our halal-friendly kitchen. Please note that this dish may contain
              </p>
            </TabPanel>
            <hr style={styles.hr}/>
          </Tabs>
          <div>Calories</div>
          <div>{this.props.calorie} kcal</div> 
        </div>
      </Container>
    )
  }
}

export default FoodDetail;
