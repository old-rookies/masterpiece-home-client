import React from 'react';
import './swiper.scss'
import 'swiper/dist/css/swiper.css'
import Swiper from '../../../node_modules/react-dynamic-swiper/lib/Swiper';
import Slide from '../../../node_modules/react-dynamic-swiper/lib/Slide';
import img1 from '../image/prototype/1.png';
import img2 from '../image/prototype/2.png';
import img3 from '../image/prototype/3.png';


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
			loop: false,
			// slidesPerView: 'auto',
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
          { image_url: img1, image_alt: "MASTER_VR", image_text: "보고 싶은 작품을 집으로 불러오세요"},
          { image_url: img2, image_alt: "MASTER_VR2", image_text: "보고 싶은 작품을 집으로 불러오세요2"},
          { image_url: img3, image_alt: "MASTER_VR3", image_text: "보고 싶은 작품을 집으로 불러오세요3"},
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
                      <img src={value.image_url} alt={value.image_alt}/>
					  <h3>{value.image_alt}</h3>
					  <h2>{value.image_text}</h2>
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