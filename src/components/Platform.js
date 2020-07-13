import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default class Platform extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: 0
        }

        this.changeSelected = this.changeSelected.bind(this)
    }


    changeSelected(index) {
        this.setState({ selected: index })
    }

    render() {
        return (
            <div className='section platform-demo' id='platform-section'>
                <h3 className='section-title'>Our Platform</h3>
                <p className='section-subtitle'>Convenient storage in just a few taps.</p>
                <div className='img-div large'>
                    {this.userView === true ?
                        (
                            <React.Fragment>
                                <img className='platform-img' src={require("../images/screen_user1.png")} alt="User Screen 1" />
                                <img className='platform-img' src={require("../images/screen_user2.png")} alt="User Screen 2" />
                                <img className='platform-img' src={require("../images/screen_user3.png")} alt="User Screen 3" />
                                <img className='platform-img' src={require("../images/screen_user4.png")} alt="User Screen 4" />
                            </React.Fragment>) :
                        (
                            <React.Fragment>
                                <img className='platform-img' src={require("../images/screen_host1.png")} alt="Host Screen 1" />
                                <img className='platform-img' src={require("../images/screen_host2.png")} alt="Host Screen 2" />
                                <img className='platform-img' src={require("../images/screen_host3.png")} alt="Host Screen 3" />
                                <img className='platform-img' src={require("../images/screen_host4.png")} alt="Host Screen 4" />
                            </React.Fragment>
                        )
                    }
                </div>
                {this.userView === true ?
                    <Carousel className='carousel small' showThumbs={false} showIndicators={false} showStatus={false} onChange={this.changeSelected}>
                        <div>
                            <img src={require("../images/screen_user1.png")} alt='User Screen 1' />
                        </div>
                        <div>
                            <img src={require("../images/screen_user2.png")} alt='User Screen 2' />
                        </div>
                        <div>
                            <img src={require("../images/screen_user3.png")} alt='User Screen 3' />
                        </div>
                        <div>
                            <img src={require("../images/screen_user4.png")} alt='User Screen 4' />
                        </div>
                    </Carousel>
                    :
                    <Carousel className='carousel small' showThumbs={false} showIndicators={false} showStatus={false} onChange={this.changeSelected}>
                        <div>
                            <img src={require("../images/screen_host1.png")} alt='Host Screen 1' />
                        </div>
                        <div>
                            <img src={require("../images/screen_host2.png")} alt='Host Screen 2' />
                        </div>
                        <div>
                            <img src={require("../images/screen_host3.png")} alt='Host Screen 3' />
                        </div>
                        <div>
                            <img src={require("../images/screen_host4.png")} alt='Host Screen 4' />
                        </div>
                    </Carousel>
                }

            </div>
        )
    }
}
