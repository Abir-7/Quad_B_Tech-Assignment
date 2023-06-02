import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()

    return (
        <div >

            <Row xs={1} md={3} lg={4} className="g-4">


                {
                    data.map((item, index) => <Col key={index}> 
                    <Card item={item.show}>
                        {/* {console.log(item.show)} */}
                      <div >
                      <Card.Img variant="top" style={{height:"450px"}} src={item.show.image.original} />
                      </div>
                        <Card.Body>
                            <Card.Title>{item.show.name}</Card.Title>
                            <Card.Text className='d-flex justify-content-between align-items-center'>
                              <p><b>Status:</b> {item.show.status}</p>
                              <button className='btn  btn-dark'><Link className='text-white text-decoration-none' to={`/details/${item.show.id}`}>View</Link></button>
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                    </Col>)
                }


            </Row>
        </div>
    );
};

export default Home;