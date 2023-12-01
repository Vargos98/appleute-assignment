import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption' style={{ "zIndex": "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark text-white bg-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/600x400/?burger" className="d-block w-100 h-50" style={{ filter: "brightness(30%)" }} alt="burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/600x400/?pizza" className="d-block w-100 h-50" style={{ filter: "brightness(30%)" }} alt="pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/600x400/?pasta" className="d-block w-100 h-50" style={{ filter: "brightness(30%)" }} alt="pasta" />
                    </div>
                    <div className="carousel-item active" >
                        <img src="https://source.unsplash.com/random/600x400/?biryani" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item active" >
                        <img src="https://source.unsplash.com/random/600x400/?curry" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    



                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}


