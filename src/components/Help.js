import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
function Help(){
    return(
            <div> 
                <div className="row ms-3 me-3 mt-3">
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="help" src="https://www.nasa.gov/sites/default/files/thumbnails/image/15-157b.jpg" />
      <Card.Body>
        <Card.Title className="cen">Earthquake</Card.Title>
        <Card.Text>
        DISASTER HELPLINE  : 112, 100,1078 

 

NDRF HELPLINE : 9711077372 , 011-24363260   
 <p>click here to watch measures</p>
        </Card.Text>
        <a href="https://www.youtube.com/watch?v=hWSu4l1RxLg" target="_blank" rel="noreferrer">
          <Button className="cen1">Click</Button>
        </a>
      </Card.Body>
    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="help" src="https://images.cnbctv18.com/wp-content/uploads/2022/08/Pakistan-Floods-2-1019x573.jpg?impolicy=website&width=330&height=180" />
      <Card.Body>
        <Card.Title className="cen">Floods</Card.Title>
        <Card.Text>
        DISASTER HELPLINE  : 112, 100,1078 

 

NDRF HELPLINE : 9711077372 , 011-24363260
<p>click here to watch measures</p>
        </Card.Text>
        <a href="https://www.youtube.com/watch?v=43M5mZuzHF8" target="_blank" rel="noreferrer">
          <Button className="cen1">Click</Button>
        </a>
      </Card.Body>
    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="help" src="https://cdn-japantimes.com/wp-content/uploads/2021/03/np_file_74253-scaled.jpeg" />
      <Card.Body>
        <Card.Title className="cen">Tsunami</Card.Title>
        <Card.Text>
        DISASTER HELPLINE  : 112, 100,1078 

 

NDRF HELPLINE : 9711077372 , 011-24363260
          <p>click here to watch measures </p>
        </Card.Text>
        <a href="https://www.youtube.com/watch?v=fQAciMgl-kM" target="_blank" rel="noreferrer">
          <Button className="cen1">Click</Button>
        </a>
      </Card.Body>
    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="help" src="https://media2.spaceref.com/news/2020/ooELIDA-AQUA-81220-768x552.jpg" />
      <Card.Body>
        <Card.Title className="cen">cyclone</Card.Title>
        <Card.Text>
        DISASTER HELPLINE  : 112, 100,1078 

 

NDRF HELPLINE : 9711077372 , 011-24363260
          <p>click here to watch measures</p>
        </Card.Text>
        <a href="https://www.youtube.com/watch?v=_iv5mTnM7ww" target="_blank" rel="noreferrer">
            
            <Button className="cen1">Click</Button>
            
          
        </a>
      </Card.Body>
    </Card>
                    </div>
                </div>
                
            </div>
    )

    
}
export default Help