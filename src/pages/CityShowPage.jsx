import "../cityShowPage.css";
import React from "react";
import axios from "axios";
import CityModel from "../models/CityModel";
import { Link } from "react-router-dom";
// fetch data for the game in particular by it's id
/*
 */
class CityShowPage extends React.Component {
  state = {
    city: "",
    image: "",
    articles: [],
  };


  /////////NEED BOTH DELETE FUNCTIONS/////////////
  handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/cities/${id}`)
    .then(() => {
     this.props.deleteCity(id)
    })
  }

  deleteCity = (id) => {
    console.log("delete city activated");
    const cityDataArray = this.state.cityData.filter((cityObj) => {
      console.log(this.cityObj._id, id);
      if (this.cityObj._id == id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ cityData: cityDataArray });
  };
//////////////////////////////

  componentDidMount() {
    const cityId = this.props.match.params.id;
    console.log(cityId);
    CityModel.show(cityId).then((data) => {
      console.log(data);

      this.setState({
        city: data.city,
        image: data.image,
        articles: data.articles,
      });
    });
  }
  renderArticles = () => {
    let articlesJSX = this.state.articles.map((article) => {
      return (
        <div className="city-articles">
          <ul>
            <li>
              <a href={`/cities/${this.props.match.params.id}/${article._id}`}>
                {article.content}
              </a>
              {/* render as links to article */}
              {/* {article.content} */}
            </li>
          </ul>
        </div>
      );
    });
    return articlesJSX;
  };
  render() {
    return (
      <div className="main-city-show-page" style={{
        // backgroundColor: '#383838',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/BG.jpg')`,
        backgroundPosition: "bottom",
        backgroundSize: "fill"
      }}>
        {/* Need to create articles here */}
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <h1 className="city-name">{this.state.city}</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 className="city-undertitle">Find out more about {this.state.city}...</h2>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <img className="city-image" src={this.state.image} alt="" />
          <div className="city-show-body">
         
          <h2>
            <Link
              className="createarticles"
              to={`/cities/${this.props.match.params.id}/create`}
            >
              Create an article
            </Link>
            <p className="delete-button-wrapper">
          <button className='delete-button submit-button' 
          onClick={() => this.handleDelete(this.props.cityObj._id)}> Delete City
          </button> </p>
          </h2>
          <h2 className="articles">Articles:</h2>
            {this.renderArticles()}
          </div>
        </div>
      </div>
    );
  }
}
export default CityShowPage;
