import Slider from 'react-slick';
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class IndexCarousel extends React.Component {
  state = {redirect: null}

  carouselItems = () => {
    const citiesJSX = this.props.cityData.map((cityObj, idx) => {
      return (
        <div className='carousel-index' key={idx}>
          <Link to={`/cities/${cityObj._id}`}>
            <div className='imageandtext'>
            <img className='cityindeximage' src={cityObj.image} alt=""/>
            <p className='cityindexname'>{cityObj.city}</p>
            </div>
            {/* <CityShowPage cityObj={cityObj}/> */}
          </Link>
          
        </div>
      )
    })
    return citiesJSX
  }
  render() {
    // if (this.state.redirect===true){
    // return <Redirect to="/cities" />
    // } 
    if (this.state.redirect){
      return <Redirect to={this.state.redirect} />
    } 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    if (this.props.cityData.length < 3){
      settings.slidesToShow= this.props.cityData.length
    } else if  (this.props.cityData.length >= 3){
      settings.slidesToShow= 3
    }
    return (
      <div>
        <Slider {...settings}>
       {this.carouselItems()}
        </Slider>
      </div>
    );
    
  }
    
}


export default IndexCarousel