import React from 'react';
import './swiper.scss'
import 'swiper/dist/css/swiper.css'
import Swiper from '../../../node_modules/react-dynamic-swiper/lib/Swiper';
import Slide from '../../../node_modules/react-dynamic-swiper/lib/Slide';

const OPTION_KEYS = ['navigation', 'pagination', 'scrollBar', 'loop']

class MySwiper extends React.Component{

    constructor() {
        super()
    
        this.state = {
          // slideCount: 3,
          options: {
            navigation: true,
            pagination: true,
            paginationClickable: true,
            scrollBar: false,
            loop: false
          }
        }
      }
    
      toggleOption(prop) {
        this.setState({
          options: Object.assign({}, this.state.options, {
            [prop]: !this.state.options[prop],
          }),
        })
      }
    
      render() {
        let prototype_img = [
          { image_url: "./image.jpg", image_alt: "이미지1"},
          { image_url: "./image.jpg", image_alt: "이미지2"},
          { image_url: "./image.jpg", image_alt: "이미지3"},
        ];

        return (
          <div className="swiper-container">
            <div className="swiper">
              <Swiper
                swiperOptions={{scrollbarHide: false}}
                {...this.state.options}
              >
              {prototype_img.map((value, index) => {
                  return (
                    <Slide className="swiper_slide_img" key={index}>
                      (Slide {index + 1})
                      <img src={value.image_url} alt={value.image_alt}/>
                    </Slide>
                  );
              })}
              </Swiper>
            </div>
          </div>
        )
    }
}

export default MySwiper;