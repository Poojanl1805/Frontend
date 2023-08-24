import React from 'react';
import kanya from "../images/Kanyakumari.jpeg"
import kanya1 from "../images/kanyakumari1 (1).jpeg"
import kanya2 from "../images/kanyakumari1.(2).jpeg"
import kanya3 from "../images/kanyakumari1 (3).jpeg"
import kanya4 from "../images/kanyakumari1 (4).jpeg"

const KanyakumariComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="kanyakumari">
                <h2><b>08.kanyakumari</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={kanya} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"Cape Comorin or The Land's End"</b></h4>
                        <p>
                            Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
                        </p>
                        <p>
                            Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower.The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In kanyakumari</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={kanya1} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Kanyakumari Beach</h5>
                                <p className="card-text">Located in the southernmost part of India, Kanyakumari beach with its beautiful hue-changing beaches... </p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card "  style={{ width: '250px' }}>
                            <img className="card-img-top" src={kanya2} alt="card_img.jpg"  style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Vivekananda Memorial </h5>
                                <p className="card-text ">The magnificent Vivekananda Rock Memorial is located on a small island off... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card "  style={{ width: '250px' }}>
                            <img className="card-img-top" src={kanya3} alt="card_img.jpg"  style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Thiruvalluvar Status</h5>
                                <p className="card-text ">  Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds...  </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card "  style={{ width: '250px' }}>
                            <img className="card-img-top" src={kanya4} alt="card_img.jpg"  style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Thirparappu Falls </h5>
                                <p className="card-text ">Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...  
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

export default KanyakumariComponent;