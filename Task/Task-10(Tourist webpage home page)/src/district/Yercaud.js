import React from 'react';
import yarcaud from "../images/Yarcaud.jpeg"
import yarcaud1 from "../images/yercaud...(1).jpeg"
import yarcaud2 from "../images/yercaud1 (2).jpeg"
import yarcaud3 from "../images/yercaud1.(3).jpeg"
import yarcaud4 from "../images/yercaud1.(4).jpeg"

const YercaudComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="yercaud">
                <h2><b>09.Yercaud</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={yarcaud} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"The Land of Seven Forests."</b></h4>
                        <p>
                            Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.
                        </p>
                        <p>
                            Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
                        </p>
                    </div>
                </div>
                <div className="chen_card">
                    <h2>Must Visit Place In Yarcaud</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={yarcaud1} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Pagoda Point</h5>
                                <p className="card-text">Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated ... </p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={yarcaud2} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Botanical Garden </h5>
                                <p className="card-text ">Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...</p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card "  style={{ width: '250px' }}>
                            <img className="card-img-top" src={yarcaud3} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Emerald Lake </h5>
                                <p className="card-text ">  The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...</p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card "  style={{ width: '250px' }}>
                            <img className="card-img-top" src={yarcaud4} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Lady,s Seat </h5>
                                <p className="card-text ">Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...  
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

export default YercaudComponent;