import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class AboutUs extends React.Component {

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
        const NeelFounder = FounderBio({ name: 'Neel Choudhary', title: 'COO', desc: "Neel Choudhary is the chief operating officer of SpaceFaster. Neel is attending Northeastern University and is pursuing a bachelor’s degree in computer science with a concentration in Artificial intelligence. Neel has experience working in the industry as a software engineer.", email:'choudhary.ne@northeastern.edu', linkedin: 'https://www.linkedin.com/in/neelchoudhary'})
        const JovanFounder = FounderBio({ name: 'Jovan Jean', title: 'Product Lead', desc: "Jovan Jean is the chief executive officer of SpaceFaster. Jovan is attending Northeastern University and pursuing a bachelor's degree in computer science with a focus in Artificial Intelligence.", email:'jjean@bondetous.com', linkedin: 'https://www.linkedin.com/in/jean-j'})
        const LindaFounder = FounderBio({ name: 'Linda Zeng', title: 'Lead Designer', desc: "Linda Zeng is the lead designer of SpaceFaster. Linda is attending Northeastern University pursuing a bachelor’s degree in Civil Engineering with a concentration in Structural Engineering and a minor in Experience Design. Her main interests revolve around design, painting, and volunteering.", email:'zeng.lin@northeastern.edu', linkedin: 'https://www.linkedin.com/in/linda-zeng-3809b318b'})

        let Founder;
        if (this.state.selected === 0) {
            // Neel
            Founder = NeelFounder
        } else if (this.state.selected === 1) {
            // Jovan
            Founder = JovanFounder
        } else if (this.state.selected === 2) {
            // Linda
            Founder = LindaFounder
        } else {
            // Neel
            Founder = NeelFounder
        }

        return (
            <div className='section about-us' id='about-us-section'>
                <h3 className='section-title'>Meet the Team</h3>
                <div className="img-div">
                    <Carousel className='carousel' showThumbs={false} showIndicators={true} showStatus={false} onChange={this.changeSelected} infiniteLoop={true}>
                        <div>
                            <img src={require("../images/founder_neel.png")} alt='Profile' />
                        </div>
                        <div>
                        <img src={require("../images/founder_jovan.png")} alt='Profile' />
                        </div>
                        <div>
                            <img src={require("../images/founder_linda.png")} alt='Profile' />
                        </div>
                    </Carousel>
                </div>
                <Founder />
            </div>
        )
    }
}

function FounderBio({ name, title, desc, email, linkedin }) {
    return (
        () => (<React.Fragment>
            <h4 className='founder-name'>{name}</h4>
            <h4 className='founder-title'>{title}</h4>
            <div className='founder-links'>
                <a href={`mailto:${email}`}><i className="material-icons">email</i>Email</a>
                <a href={linkedin}><i className="material-icons">group</i>Linkedin</a>
            </div>
            <h4 className='founder-desc section-body'>{desc}</h4>
        </React.Fragment>)

    )
}
