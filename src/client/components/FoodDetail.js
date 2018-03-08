import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const styles = {
  container: { display: "flex" },
  image: { width: "457.5px", height: "703px", marginRight: "15px", marginTop: "15px"},
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
}

class FoodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    }
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  render() {
    return (
      <Container style={styles.container}>
        <div style={styles.image} className="FoodDetail">image</div>
        <div style={styles.detailcontainer} className="FoodDetail">
          <div style={styles.date}>Today, 08 March <span style={styles.when}>Lunch</span></div>
          <div style={styles.title}>Roast Chicken Breast</div>
          <hr style={styles.hr} />
          <div style={styles.fooddetail}>with mushroom & spinach barley risotto, market vegetables</div>
          <div style={styles.price}>5,210 원 <span style={styles.delivery}>free delivery</span></div>
          <MuiThemeProvider>
            <RaisedButton label="장바구니" primary={true} style={styles.cart}/>
          </MuiThemeProvider>
          <Tabs>
            <TabList style={styles.tablist}>
              <Tab style={styles.tab}>재료<hr/></Tab>
              <Tab style={styles.tab}>영양소<hr/></Tab>
            </TabList>

            <TabPanel >
              <p>
              Barley, Carrot, Mushroom, Olive Oil, Onions, Salt and Black Pepper, Spinach, Thyme
              </p>
            </TabPanel>
            <TabPanel >
              <p>
              Our culinary wizards carefully craft our dishes in our halal-friendly kitchen. Please note that this dish may contain
              </p>
            </TabPanel>
            <hr style={styles.hr}/>
          </Tabs>
        </div>
      </Container>
    )
  }
}

export default FoodDetail;
