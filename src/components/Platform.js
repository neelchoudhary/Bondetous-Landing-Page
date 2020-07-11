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
        console.log(index)
        this.setState({ selected: index })
        console.log('selected', this.state.selected)
    }

    render() {
        let images = [
            { url: require("../images/userscreen1.png") },
            { url: require("../images/userscreen2.png") },
            { url: require("../images/userscreen3.png") },
            { url: require("../images/userscreen4.png") },
        ];


        return (
            <div className='section platform-demo' id='platform-section'>
                <h3 className='section-title'>Our Platform</h3>
                <p className='section-subtitle'>Convenient storage in just a few taps.</p>
                <div className='img-div'>
                    {this.userView === true ?
                        (
                            <React.Fragment>
                                <img className='platform-img' src={require("../images/userscreen1.png")} alt="User Screen 1" />
                                <img className='platform-img' src={require("../images/userscreen2.png")} alt="User Screen 2" />
                                <img className='platform-img' src={require("../images/userscreen3.png")} alt="User Screen 3" />
                                <img className='platform-img' src={require("../images/userscreen4.png")} alt="User Screen 4" />
                            </React.Fragment>) :
                        (
                            <React.Fragment>
                                <img className='platform-img' src={require("../images/userscreen1.png")} alt="User Screen 1" />
                                <img className='platform-img' src={require("../images/userscreen2.png")} alt="User Screen 2" />
                                <img className='platform-img' src={require("../images/userscreen3.png")} alt="User Screen 3" />
                                <img className='platform-img' src={require("../images/userscreen4.png")} alt="User Screen 4" />
                            </React.Fragment>
                        )
                    }
                </div>
                <Carousel className='carousel' showThumbs={false} showIndicators={false} showStatus={false} onChange={this.changeSelected}>
                    <div>
                        <img src={require("../images/userscreen1.png")} />
                    </div>
                    <div>
                        <img src={require("../images/userscreen2.png")} />
                    </div>
                    <div>
                        <img src={require("../images/userscreen3.png")} />
                    </div>
                    <div>
                        <img src={require("../images/userscreen4.png")} />
                    </div>
                </Carousel>
                <div>

                </div>

            </div>
        )
    }
}
