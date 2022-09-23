import React from "react"
import Carousel from 'react-bootstrap/Carousel';
function Home(){
    return(
        <div>
            <Carousel className="container mb-5 mt-3 ">
      <Carousel.Item>
        <img class='st'
          className=" w-100 h-100 image-center"
          src="http://appliedsciences.nasa.gov/sites/default/files/styles/social_media_share/public/2016_Amatrice_earthquake.jpg?h=125a58ae&itok=gdVVOAoi"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Earthquake</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 h-100"
          src="https://aihms.in/blog/wp-content/uploads/2022/01/dis1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tsunami</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-100 w-100"
          src="http://www.nasa.gov/sites/default/files/thumbnails/image/carlos-terra-11317.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>cyclone</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class='st'
          className="h-100 w-100 image center"
          src="http://appliedsciences.nasa.gov/sites/default/files/styles/social_media_share/public/flood-screen.jpg?h=827069f2&itok=U9fecRE5"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>floods</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-100 w-100"
          src="https://cdn.vanderbilt.edu/vu-news/vanderbiltmagazine/20190515092213/Research-Volcano_crop.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>volcanoes</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )

    
}
export default Home