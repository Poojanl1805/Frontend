import React from 'react';
import Chen from "../images/Chennai.jpeg"
import Chen1 from "../images/chennai1.jpeg"
import Chen2 from "../images/chennai2.jpeg"
import Chen3 from "../images/chennai3...jpeg"
import Chen4 from "../images/chennai4.jpeg"

const ChennaiComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="chennai">
                <h2> <b>01.Chennai</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Chen} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4> <b>"The Detroit Of India"</b> </h4>
                        <p>
                            Formerly known as Madras, Chennai is the capital city of the state of
                            Tamil Nadu, in the southern part of India. Located on the Coromandel coast
                            of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This
                            'capital of the south', is one among the four metropolitan siblings of India,
                            having a rich cultural history which it perfectly balances with its metropolis
                            lifestyle.
                        </p>
                        <p>
                            Amid its chaos of traffic and sweltering humid climate, Chennai is
                            worth visiting for its temples steeped in south-Indian culture, British-era
                            museums and monuments, culinary delights and Marina Beach (Second
                            largest urban beach in the world). Chennai's skyline is famous for its towering
                            skyscrapers, but the heart of Chennai has an old-world charm to it that
                            refuses to be overshadowed.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Chennai</h2>
                    <div className="container cards row align-items-center gap-xxl-5 ">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Chen1} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Marina Beach</h5>
                                <p className="card-text"> Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal... </p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card "style={{ width: '250px' }}>
                            <img className="card-img-top" src={Chen2} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">MGR Flim City </h5>
                                <p className="card-text ">Having been established in the year 1994, a considerably new structure, the MGR Film city is managed... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Chen3}alt="card_img.jpg"style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Marundeeswarar Temple </h5>
                                <p className="card-text "> The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple...</p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Chen4} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Breezy Beach</h5>
                                <p className="card-text ">Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted... 
                                </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ChennaiComponent;