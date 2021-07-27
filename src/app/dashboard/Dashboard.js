import React, { Component } from 'react';
import Slider from "react-slick";
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

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
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Portfolio Slide</h4>
                <Slider className="portfolio-slider" {...this.sliderSettings}>
                  <div className="item">
                    <img src={require('../../assets/images/dashboard/img_6.jpg')} alt="carousel-item" />
                  </div>
                </Slider>
                <div className="d-flex py-4">
                  <div className="preview-list w-100">
                    <div className="preview-item p-0">
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <p className="text-muted">Lorem elit fuga labore vero blanditiis eius? Tempora eos debitis molestias explicabo esse. Pariatur sint laudantium aspernatur nihil numquam Numquam reiciendis doloribus sit deserunt doloribus! Quaerat quibusdam quod magnam similique</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Portfolio Slide</h4>
                <Slider className="portfolio-slider" {...this.sliderSettings}>
                  <div className="item">
                    <img src={require('../../assets/images/dashboard/img_6.jpg')} alt="carousel-item" />
                  </div>
                </Slider>
                <div className="d-flex py-4">
                  <div className="preview-list w-100">
                    <div className="preview-item p-0">
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <p className="text-muted">Sit numquam quis autem pariatur eius consequatur veniam. Libero exercitationem aperiam iusto et delectus magnam? Ipsum quia vel est ea sapiente autem, fugit harum! Incidunt dicta distinctio necessitatibus corrupti non</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Portfolio Slide</h4>
                <Slider className="portfolio-slider" {...this.sliderSettings}>
                  <div className="item">
                    <img src={require('../../assets/images/dashboard/img_6.jpg')} alt="carousel-item" />
                  </div>
                </Slider>
                <div className="d-flex py-4">
                  <div className="preview-list w-100">
                    <div className="preview-item p-0">
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <p className="text-muted">Adipisicing nisi quam rem error excepturi Minima necessitatibus debitis quod maxime a? Dignissimos voluptas optio vitae praesentium tenetur? Delectus quidem veniam nobis atque culpa. Voluptate fugit facere eaque animi non</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default Dashboard;
