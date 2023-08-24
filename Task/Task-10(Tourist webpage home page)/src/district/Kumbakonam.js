import React from 'react';

import Kumba from "../images/Kumbakonam.jpeg"
import Kumba1 from "../images/kumbakonam1 (1).jpeg"
import Kumba2 from "../images/kumbakonam1 (2).jpeg"
import Kumba3 from "../images/Kumbakonam3...jpeg"
import Kumba4 from "../images/kumbakonam1 (4).jpeg"

const KumbakonamComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="kumbakonam">
                <h2><b>04.Kumbakonam</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Kumba} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"The Cambridge of India"</b></h4>
                        <p>
                            Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu.The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.
                        </p>
                        <p>
                            The town is also known for its grand festival called Mahamaham festival which is celebrated eveny twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Kumbakonam</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kumba1} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Sarangapani Temple</h5>
                                <p className="card-text">Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam...</p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kumba2} alt="card_img.jpg"style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Nageswaran Temple</h5>
                                <p className="card-text "> Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kumba3} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Adi Kumbeshwara Temple</h5>
                                <p className="card-text ">Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card "style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kumba4} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Airavatesvara Temple</h5>
                                <p className="card-text "> Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...   
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

export default KumbakonamComponent;