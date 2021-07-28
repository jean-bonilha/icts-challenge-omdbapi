import React, { Component } from 'react'
import Slider from "react-slick";

export class VideoList extends Component {

    constructor(props) {
        super(props);

        this.sliderSettings = props.sliderSettings;
        this.videos = [
          {
            id: 1,
            title: 'Portfolio Slide',
            plot: 'Lorem elit fuga labore vero blanditiis eius? Tempora eos debitis molestias explicabo esse. Pariatur sint laudantium aspernatur nihil numquam Numquam reiciendis doloribus sit deserunt doloribus! Quaerat quibusdam quod magnam similique'
          },
          {
            id: 2,
            title: 'Portfolio Slide',
            plot: 'Lorem elit fuga labore vero blanditiis eius? Tempora eos debitis molestias explicabo esse. Pariatur sint laudantium aspernatur nihil numquam Numquam reiciendis doloribus sit deserunt doloribus! Quaerat quibusdam quod magnam similique'
          },
          {
            id: 3,
            title: 'Portfolio Slide',
            plot: 'Lorem elit fuga labore vero blanditiis eius? Tempora eos debitis molestias explicabo esse. Pariatur sint laudantium aspernatur nihil numquam Numquam reiciendis doloribus sit deserunt doloribus! Quaerat quibusdam quod magnam similique'
          },
        ];

    }

    render() {
        return this.videos.map(video => (
            <div className="col-md-6 col-xl-4 grid-margin stretch-card" key={video.id}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{video.title}</h4>
                        <Slider className="portfolio-slider" {...video.sliderSettings}>
                            <div className="item">
                                <img src={require('../../assets/images/dashboard/img_6.jpg')} alt="carousel-item" />
                            </div>
                        </Slider>
                        <div className="d-flex py-4">
                            <div className="preview-list w-100">
                                <div className="preview-item p-0">
                                    <div className="preview-item-content d-flex flex-grow">
                                        <div className="flex-grow">
                                            <p className="text-muted">{video.plot}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
}

export default VideoList
