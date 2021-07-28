import React, { Component } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import VideoList from '../apps/VideoList';

export class Dashboard extends Component {

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card corona-gradient-card">
              <div className="card-body py-0 px-0">
                <div className="row align-items-center">
                  <div className="col-2">
                    <img src="https://onlinevagas.com/wp-content/uploads/2019/11/Grupo-ICTS.jpg" className="gradient-corona-img img-fluid rounded" alt="banner" />
                  </div>
                  <div className="col-7 p-0">
                    <h4 className="mb-1 mb-sm-0">Look for your favorite titles...</h4>
                  </div>
                  <div className="col-3 pl-0 text-center">
                    <Form>
                      <Form.Group as={Col} controlId="validationCustomUsername">
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder="Search by title..."
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Button>
                            Go!
                          </Button>
                        </InputGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <VideoList
            slider-settings={this.sliderSettings}
          />
        </div>
      </div> 
    );
  }
}

export default Dashboard;
