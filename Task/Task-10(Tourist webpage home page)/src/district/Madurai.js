import React from 'react';
import Madu from "../images/Madurai.jpeg"
import Madu1 from "../images/madurai1.jpeg"
import Madu2 from "../images/madurai2.jpeg"
import Madu3 from "../images/madurai3.jpeg"
import Madu4 from "../images/madurai4..jpeg"

const MaduraiComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="madurai">
                <h2><b>03.Madurai</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Madu} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"The Lotus City"</b></h4>
                        <p>
                            Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus city as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
                        </p>
                        <p>
                            There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Madurai</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Madu1} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Vaigai Dam</h5>
                                <p className="card-text"> Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai...</p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Madu2} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Meghamalai </h5>
                                <p className="card-text ">Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the Beautiful...</p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Madu3} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Samanar Hills</h5>
                                <p className="card-text "> Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Madu4} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Thirumalai Nayakar</h5>
                                <p className="card-text ">Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayakar mahal...  
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

export default MaduraiComponent;
