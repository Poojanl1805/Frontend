import React from 'react';
import Theni from "../images/Theni.jpeg"
import Theni1 from "../images/theni1.(1).jpeg"
import Theni2 from "../images/theni1 (2).jpeg"
import Theni3 from "../images/theni1.(3).jpeg"
import Theni4 from "../images/theni1.(4).jpeg"

const TheniComponent = () => {
    return (
        <div className="container">
            <div className="chennai" id="theni">
                <h2><b>05.Theni</b></h2>
                <div className="chennai_1">
                    <div className="image"><img src={Theni} alt="img.jpg" /> </div>
                    <div className="text">
                        <h4><b>"A little hamlet in Tamil Nadu"</b></h4>
                        <p>
                            Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.
                        </p>
                        <p>
                            There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.
                        </p>
                    </div>
                </div>
                <div className="chennai_2">
                    <h2>Must Visit Place In Theni</h2>
                    <div className="container cards row align-items-center gap-lg-5">
                        <div className="card" style={{ width: '250px' }}>
                            <img className="card-img-top" src={Theni1} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Chinna Suruli Falls</h5>
                                <p className="card-text">Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...</p>
                                <a href="#" className="btn btn-primary">Read More...</a>
                            </div>
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Theni2} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Kumbakkarai Falls </h5>
                                <p className="card-text ">Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Theni3} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Meghamalai</h5>
                                <p className="card-text "> Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise... </p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                        <div className="card " style={{ width: '250px' }}>
                            <img className="card-img-top" src={Theni4} alt="card_img.jpg" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Suruli Falls </h5>
                                <p className="card-text ">Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...</p>
                                <a href="#" className="btn btn-primary ">Read More...</a>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheniComponent;