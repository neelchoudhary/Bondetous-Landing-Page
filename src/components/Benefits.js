import React from 'react'

export default class Benefits extends React.Component {

    render() {
        let images = {
            user1: require('../images/benefit_user1.png'),
            user2: require('../images/benefit_user2.png'),
            user3: require('../images/benefit_user3.png'),
            host1: require('../images/benefit_host1.png'),
            host2: require('../images/benefit_host2.png'),
            host3: require('../images/benefit_host3.png'),
        }
        return (
            <div className='section benefits' id='benefits-section'>
                {this.props.userView === true ? (
                    <React.Fragment>
                        <BenefitsTile img={images.user1} title="Don't break the bank for storage" desc='Pay for what you need. Traditional storage facilities charge inflexible and steep prices for fixed spaces. With Bondetous, you can get just as much space as you need without any excess. No need to visit beforehand or figure out how to make the most of your purchase. You’ll always have the right fit for your stuff at the right price.' />
                        <BenefitsTileReverse img={images.user2} title="Work on your own timeline" desc='If you need storage now, you can get it — guaranteed. Moving out tomorrow? No worries, you can book storage any time with us. Storage unit too far from your new place? We’ll give you options as close as possible to your desired location.' />
                        <BenefitsTile img={images.user3} title="Know your stuff is safe" desc='We value your stuff because we value ours. Trust and safety are our first priorities. We conduct background checks on every host and assess security and risk potential for each Bondetous host unit. Our platform is incredibly secure, so as long as you communicate and book through our website or app, your payments and account information are safe with us.' />
                    </React.Fragment>
                ) :
                    (
                        <React.Fragment>
                            <BenefitsTile img={images.host1} title="Nothing is worth something" desc='Have an empty room in your house and nothing to do with it? Or some extra space in your basement? Why not share it with a neighbor? Share a space and set your own price for free with us, no hidden charges or fees.' />
                            <BenefitsTileReverse img={images.host2} title="Work on your own timeline" desc='Just want to share a space for the summer? Have a free room year-round? With Bondetous, you can list your space on your time and set your own hours. If you want to stop, you can easily remove your listing, no strings attached.' />
                            <BenefitsTile img={images.host3} title="Meet your neighbor" desc='Bondetous set out to build stronger bonds between residents of a neighborhood. These relationships are lost in today’s world, but we hope to connect neighbors, create friendships, and strengthen communities.' />
                        </React.Fragment>
                    )
                }
            </div>
        )
    }

}

function BenefitsTile({ img, title, desc }) {
    return (
        <div className='benefit-tile'>
            <div className='img-div'>
                <img src={img} alt="Benefit" />
            </div>
            <div className='text-div'>
                <h3 className='section-title'>{title}</h3>
                <p className='section-body'>{desc}</p>
            </div>
        </div>
    )
}

function BenefitsTileReverse({ img, title, desc }) {
    return (
        <div className='benefit-tile'>
            <div className='img-div'>
                <img src={img} alt="Benefit" />
            </div>
            <div className='text-div-reverse'>
                <h3 className='section-title'>{title}</h3>
                <p className='section-body'>{desc}</p>
            </div>
        </div>
    )
}
