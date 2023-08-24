import React from 'react';
import Kodai from "../images/Kodaikanal.jpeg"
import Kodai1 from "../images/kodaikanal1....jpeg"
import Kodai2 from "../images/kodaikanal2.jpeg"
import Kodai3 from "../images/kodaikanal3..jpeg"
import Kodai4 from "../images/kodaikanal4.jpeg"

const KodaikanalComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="kodaikanal">
                <h2><b>02.Kodaikanal</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Kodai} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"The Princess of Hill Stations"</b></h4>
                        <p>
                            Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means the gift of the forests'.
                        </p>
                        <p>
                            Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Kodaikanal</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kodai1}  alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Green Valley View</h5>
                                <p className="card-text">Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep... </p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card "  style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kodai2}  alt="card_img.jpg"style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Kodai Lake </h5>
                                <p className="card-text ">Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake... 
                                </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kodai3} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Bear Shola Falls </h5>
                                <p className="card-text ">Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Kodai4} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Pillar Rocks </h5>
                                <p className="card-text ">Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic... 
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

export default KodaikanalComponent;