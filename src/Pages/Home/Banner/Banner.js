import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className="img-fluid" src="https://i.ibb.co/NSz4pD1/banner.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h4 className="text-dark">Mankind Consultation Center is best in quality for treatment and diagnosis of diseases </h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img className="img-fluid" src="https://i.ibb.co/31jzQ0t/doctor-patient.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h4 className="text-dark">Get the best treatment from our expert consultants and get well</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img className="img-fluid" src="https://i.ibb.co/4T4wRSg/examining-sample-with-microscope.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h4>We have the best diagnosis and laboratory technician for analyzing diseases</h4>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;