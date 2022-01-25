import React from 'react';
import { Link } from 'react-router-dom';
import site1 from '../images/site1.png';
import site2 from '../images/site2.png';
import site3 from '../images/site3.png';

function Home() {
    return(
        <div>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Awesome™ Company</h3>
                            <div className="underline bg-warning mx-auto mb-2"></div>
                            <h5>
                            <br/>Jesteśmy zorientowaną na efekt grupą designerów, developerów i strategów zjednoczonych we wspólnym celu tworzenia nowoczesnych doświadczeń cyfrowych.<br/><br/>
                            Codziennie mierzymy się z problemami klientów, wynikającymi z braku właściwej opieki informatycznej. Z tego względu ponad 95% oferowanego oprogramowania i systemów dostarczamy w modelu zarządzanym, innymi słowy wspieramy swoich klientów w poprawnym wykorzystywaniu dostarczanej technologii na każdym jej etapie.
                            </h5>
                            <Link to="about" className="btn btn-warning shadow mt-2">Czytaj więcej</Link>
                        </div>
                    </div>
                </div>
            </section>
        
            <div className="container">
                <div className="row  mt-5">
                    <div className="col-md-12 mb-4 text-center">
                    <h3 className="text-center">Zaufali nam</h3>
                    <div className="underline bg-warning mx-auto mb-4"></div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">

                <div className="card">
                <div className="row">
                    <div className="col-md-12">
                    <img src={site2} className="d-block w-100" alt="..." />
                    </div>
                    <div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Zdrofit - Więcej niż fitness</h5>
                        <p className="card-text"><small className="text-muted">Czerwiec 2020</small></p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="carousel-item">
                    <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-12">
                        <img src={site1} className="d-block w-100" alt="..." />
                        </div>
                        <div>
                        <div className="card-body">
                            <h5 className="card-title text-center">University of Westminster, London</h5>
                            <p className="card-text"><small className="text-muted">Czerwiec 2020</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-12">
                        <img src={site3} className="d-block w-100" alt="..." />
                        </div>
                        <div>
                        <div className="card-body">
                            <h5 className="card-title text-center">balta.pl</h5>
                            <p className="card-text"><small className="text-muted">Czerwiec 2020</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        </div>
        </div>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="text-center">Nasza oferta</h3>
                            <div className="underline bg-warning mx-auto mb-4"></div>
                            <h5>
                            Awesome™ Company świadczy usługi informatyczne oparte na zaufaniu i indywidualny podejściu do każdego klienta. <br/><br/>
                            Zapraszamy do zapoznania się z naszą ofertą.
                            </h5>
                            <Link to="pricelist" className="btn btn-warning shadow mt-4">Czytaj więcej</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;