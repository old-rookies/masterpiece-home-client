import React from 'react';
import { Map, GoogleApiWrapper , Marker } from 'google-maps-react';

import './Contact.scss';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isInfoVisible : true
        }

        this.changeMapState = this.changeMapState.bind(this);
    }
    componentDidMount(){
        // 컴포넌트 로드 시 지도 불러오기

    }

    changeMapState(){
        this.setState({
            "isInfoVisible" : !this.state.isInfoVisible
        });
    }
    
    render(){
        return <div className="contact">
            <Map
            google={this.props.google}
            zoom={17}
            style={mapStyles}
            initialCenter={{ lat: 37.644106, lng: 127.106096}}
            >
                <Marker position={{ lat: 37.644106, lng: 127.106096}} />
            </Map>

            <div className={ "contact-container " + (this.state.isInfoVisible ? "" : "hide") }>
                <div className='cover'></div>
                <div className='contact-wrapper row'>
                    <div className="container col align-self-center">
                        <div className="contact-header text-center">
                            <h2>
                                Contact to us !
                            </h2>
                            <button type='button' className='btn btn-lg btn-danger mt-3' onClick={this.changeMapState}>
                                지도보기
                            </button>
                        </div>
                        <div className="contact-content mt-5">
                            <div className="contact-content-wrapper container">
                                <div className='container row p-5'>
                                    <div className='col-md-4 mb-3'>
                                        <h3 className="mb-5">
                                            대표연락처
                                        </h3>
                                        <p>
                                            이메일 : a@b.com
                                        </p>
                                        <p>
                                            전화번호 : 010-1234-1234
                                        </p>
                                    </div>
                                    <div className="col-md-8">
                                        <h3 className="mb-5">
                                            주소
                                        </h3>
                                        <p>
                                            서울특별시 노원구 공릉2동 26-21 삼육대학교 대강당 지하1층 학생창업보육센터 B3호
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAvfCqc2Pv7wLhzE88rAmy14z0DMb08MOI'
  })(Contact);
// export default Contact