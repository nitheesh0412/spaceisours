import React from "react"
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
function Home(){
    return(
        <div className=""><Carousel>
            <Carousel.Item>
            <div className="row ms-5  me-5 mt-3 mb-3">
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACYh5QCEYF5woWgr7RGMyUUChQ1-QKw0A5g&usqp=CAU"
          alt="First slide"
        />
              </div>
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://d2pn8kiwq2w21t.cloudfront.net/images/imagesearthearthquake20191017ridgecrest201910.width-1024.jpg"
          alt="First slide"
        />
              </div>
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd7GY_6D04D38wVbPVtnrs616tosFpOEfJg&usqp=CAU"
          alt="First slide"
        />
              </div>
          </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="row ms-5  me-5 mt-3 mb-3">
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDOXgMlE3_mSRe_e9vlbeWYvHqwmafO6tYw&usqp=CAU"
          alt="First slide"
        />
              </div>
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://apod.nasa.gov/apod/image/1309/fires_mccolgan_960.jpg"
          alt="First slide"
        />
              </div>
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://media.istockphoto.com/photos/eruption-in-iceland-picture-id1310008238?b=1&k=20&m=1310008238&s=170667a&w=0&h=EuRK5dtQ9wY5z4KBi-5aMi6znsIBTD6njzvn-78WYwY="
          alt="First slide"
        />
              </div>
          </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="row ms-5  me-5 mt-3 mb-3">
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://media.istockphoto.com/photos/aerial-view-of-flooded-houses-with-dirty-water-of-dnister-river-in-picture-id1327617934?b=1&k=20&m=1327617934&s=170667a&w=0&h=aZi48tcwAUl8WkkmbVJY_kod0cnTHQUybRPn6JaZmro="
          alt="First slide"
        />
              </div>
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://images.unsplash.com/photo-1604275689235-fdc521556c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb2R8ZW58MHx8MHx8&w=1000&q=80"
          alt="First slide"
        />
              </div>
              <div className="col-md-4">
              <img class='st'
          className=" w-100 h-100 image-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmYI2UL0w-eLbkMt2CK7bTXqRdo-0pilFSw&usqp=CAU"
          alt="First slide"
        />
              </div>
          </div>
            </Carousel.Item>

    </Carousel>
    
    <div><h5 className="ms-5 mt-3 text-light txt text-center">disaster todo list </h5></div>
    
    <div className="d-grid gap-2 mx-auto ms-5">
      <div className="row mb-5 ms-5">
      <div className="col-md-4 ">
      <Link to="/App1">
      <button type="button" className="btn  text-dark btn-info   " data-bs-toggle="button" autocomplete="off">Earthquake</button>
        </Link>
      </div>
      <div className="col-md-4">
      <Link to="/App1">
      <button type="button" class="btn   text-dark btn-info" data-bs-toggle="button" autocomplete="off">Tsunami</button>
        </Link>
      </div>
      <div className="col-md-4">
      <Link to="/App1">
      <button type="button" class="btn   text-dark btn-info" data-bs-toggle="button" autocomplete="off">Cyclone</button>
        </Link>
      </div>
      </div>
      

    </div>
    <div className="d-grid gap-2 mx-auto pb-5 ms-5">
      <div className="row ms-5 ">
      <div className="col-md-4">
      <Link to="/App1">
      <button type="button" class="btn btn-secondary  text-dark btn-info" data-bs-toggle="button" autocomplete="off">Floods</button>
        </Link>
      </div>
      <div className="col-md-4">
      <Link to="/App1">
      <button type="button" class="btn btn-secondary  text-dark btn-info" data-bs-toggle="button" autocomplete="off">Volcanic eruption</button>
        </Link>
      </div>
      <div className="col-md-4">
      <Link to="/App1">
      <button type="button" class="btn btn-secondary  text-dark btn-info" data-bs-toggle="button" autocomplete="off">Extreme winters</button>
        </Link>
      </div>
      </div>
      

    
    </div>
    
        </div>
    )

    
}
export default Home