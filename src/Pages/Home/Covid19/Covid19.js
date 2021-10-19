import React from 'react';
import './Covid19.css';

const Covid19 = () => {
    return (
        <div id="covid-19" className="container">
            <h2 className="text-danger my-5 fw-bolder py-3">---Covid-19 Corner---</h2>
            <div className="card px-2 mb-4">
                <div className="row my-3">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-3" src="https://i.ibb.co/f0kbDSH/covid-test.png" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div style={{ textAlign: 'left' }} className="card-body">
                            <h3 className="card-title">Covid-19 Test</h3>
                            <p className="card-text">Having any symptoms of covid-19 or feeling something serious? Visit our diagnosis corner and test your covid-19.</p>
                            <button className="btn btn-dark"> Test Covid-19</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card px-2 mb-4">
                <div className="row my-3">
                    <div className="col-md-8">
                        <div style={{ textAlign: 'left' }} className="card-body">
                            <h3 className="card-title">Get vaccine of Covid-19</h3>
                            <p className="card-text">If you have covid-19 positive get vaccine from our diagnosis center and fight against corona virus.</p>
                            <button className="btn btn-dark">Register now</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded-3" src="https://i.ibb.co/ncNbMXb/vaccine.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-success fw-bolder pt-4 my-4">"Prevention is better than cure"</h2>
                <img className="img-fluid" src="https://i.ibb.co/F8kn9qT/covid-prevention.png" alt="" />
            </div>
        </div>
    );
};

export default Covid19;