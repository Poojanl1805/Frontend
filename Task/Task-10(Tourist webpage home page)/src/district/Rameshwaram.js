import React from 'react';
import Rames from "../images/Rameshwaran.jpeg"
import Rames1 from "../images/rameshwarem1.jpeg"
import Rames2 from "../images/rameshwarem2.jpeg"
import Rames3 from "../images/Rameshwaram3..jpeg"
import Rames4 from "../images/rameshwarem1 (6).jpeg"

const RameshwaramComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="rameshwaram">
                <h2><b>06.Rameshwaram</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Rames} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"The Bridge on the Indian Ocean"</b></h4>
                        <p>
                            Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.
                        </p>
                        <p>
                            Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Rameshwaram</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Rames1}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Dhanushkodi Temple</h5>
                                <p className="card-text"> Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a... </p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Rames2}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Lakshmana Temple </h5>
                                <p className="card-text "> Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Rames3}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Rameshwaram Temple </h5>
                                <p className="card-text ">A perfect blend of mind-boggling architecture and spiritual significance, Rameshwaram Temple... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Rames4}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Villoondi Tirtham </h5>
                                <p className="card-text ">Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst...   
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

export default RameshwaramComponent;
