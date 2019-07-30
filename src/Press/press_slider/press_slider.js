import React from 'react';
import Carousel from './Carousel';
import './press_slider.scss';
import { Button } from 'reactstrap';
class Press extends React.Component{
  constructor(props) {
    super(props);
    this.state = { ref : '' };
  }
  setCarousel = (ref) => {
    this.setState({ ref : ref});
  }

  goToIndex = (page) =>{
    this.state.ref.goToIndex(page);
  }

  render(){
      
      return (
          <div className="press_sec press_slide">
              <div className="press_slide_category">
                <a className="press_slide_category_button"><Button onClick={ ()=>{ this.goToIndex(0) } }>회사 소개</Button></a>
                <a className="press_slide_category_button"><Button onClick={ ()=>{ this.goToIndex(1)} }>브랜딩</Button></a>
                <a className="press_slide_category_button"><Button onClick={ ()=>{ this.goToIndex(2)} }>사진/영상</Button></a>
              </div>
              <div><Carousel onRef={  ref => { this.setCarousel(ref);  } }/></div>
          
        </div>
        

      );

  }
}

export default Press;
 