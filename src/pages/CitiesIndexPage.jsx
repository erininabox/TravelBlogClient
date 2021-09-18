import { Component } from "react";
import CityModel from "../models/CityModel";
import CityShowPage from "../pages/CityShowPage";
import { Link } from "react-router-dom";
import IndexCarousel from "../partials/IndexCarousel";



// Steps to render the list of cities
// - Create a component for each city
// - Need to access the database to get the  data
// - add state to maintain list of all data
class CitiesIndexPage extends Component {
  state = {
    cityData: []
  };

  fetchData = () => {
    CityModel.all().then((data) => {
      console.log(data);
      this.setState({ cityData: data });
    });
  };

  componentDidMount = () => {
    console.log("mounted");
    //make fetch called here, or at least reference the game model which has it
    this.fetchData();
  };

  render() {
    console.log(this.state);
    return (
      <div
        className="cities-index"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/BGcopy.jpg')`,
          backgroundPosition: "bottom",
        }}
      >
        <div className="head">{/* <Header /> */}</div>
        <br />
        <br />
        <br />
        <br />
        <div className="main">
          <div className="carousel-container">
            <IndexCarousel
              cityData={this.state.cityData}
              // deleteCity={this.deleteCity}
            />
          </div>
          <p />
         
           <Link  to="/create"> 
           <img className='plus-sign' src={`${process.env.PUBLIC_URL}/images/plussign.png`} />
           </Link>
          
        </div>
      </div>
    );
  }
}

export default CitiesIndexPage;
