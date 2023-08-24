import React from 'react';
import Ooty from "../images/Ooty.jpeg"
import Ooty1 from "../images/ooty1 (1).jpeg"
import Ooty2 from "../images/ooty1 (2).jpeg"
import Ooty3 from "../images/ooty1 (3).jpeg"
import Ooty4 from "../images/ooty1 (4).jpeg"

const OotyComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="ooty">
                <h2><b>07.Ooty</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Ooty} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4> <b>"Queen of the Niligris"</b>  </h4>
                        <p>
                            Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.
                        </p>
                        <p>
                            The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Ooty</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Ooty1}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Nilgiri Mountain Railway</h5>
                                <p className="card-text"> Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular </p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Ooty2}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Ooty Botanical Garden</h5>
                                <p className="card-text "> Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...</p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card "style={{ width: '250px' }}>
                            <img className="card-img-top" src={Ooty3}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Emerald Lake </h5>
                                <p className="card-text ">Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and ... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Ooty4}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Dolphin's Nose</h5>
                                <p className="card-text "> Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea ...</p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OotyComponent;