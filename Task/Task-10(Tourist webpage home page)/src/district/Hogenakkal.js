import React from 'react';
import Hoke from "../images/Hogenakkal.jpeg"
import Hoke1 from "../images/hogenakkal1.jpeg"
import Hoke2 from "../images/hogenakkal2..jpeg"
import Hoke3 from "../images/hogenakkal3.jpeg"
import Hoke4 from "../images/hokenakkal4..jpeg"

const HogenakkalComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="hogenakkal">
                <h2><b>10.Hogenakkal</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Hoke} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"The one that will take your breath away"</b></h4>
                        <p>
                            Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.
                        </p>
                        <p>
                            Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Hogenakkal</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Hoke1} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Theerthamalai Temple</h5>
                                <p className="card-text">Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular ... </p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Hoke2} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Hogenakkal Falls  </h5>
                                <p className="card-text ">Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of the.... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Hoke3} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Pennagram Village </h5>
                                <p className="card-text "> The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Hoke4} alt="card_img.jpg"  style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Mettur Dam </h5>
                                <p className="card-text ">Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...   
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

export default HogenakkalComponent;