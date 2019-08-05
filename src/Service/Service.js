import React from 'react';
import './Service.scss';
import Title from './title/title';
import About from './about/about';
import Prototype from './prototype/prototype';
import Explain from './explain/explain';

class Service extends React.Component{
    render(){
        return (
            <div>
                <Title />
                <About />
                <Prototype />
                <Explain />
            </div>
        );
        // <div className='service page'>
        //     <div className="jumbo">
        //         <div className="container pt-nav-height">
        //             Service 
        //         </div>
        //     </div>
        // </div>;
    }
}

export default Service;