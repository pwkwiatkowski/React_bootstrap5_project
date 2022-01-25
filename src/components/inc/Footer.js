import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        // footer

        <section className="section footer bg-warning text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Informacje o firmie</h6>
                        <hr />
                        <p>
                        Oprócz usług informatycznych Awesome™ Company poświęca również uwagę na zrozumienie potrzeb i zasad działania swoich partnerów. Zapewniamy szybką i skuteczną odpowiedź na wyzwania z zakresu IT.<br/><br/>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Na skróty</h6>
                        <hr />
                        <div><Link to="/" className="nav-link text-dark">Strona główna</Link></div>
                        <div><Link to="/about" className="nav-link text-dark">O nas</Link></div>
                        <div><Link to="/contact" className="nav-link text-dark">Kontakt</Link></div>
                        <div><Link to="/pricelist" className="nav-link text-dark">Cennik</Link></div>
                        <div><Link to="/opinions" className="nav-link text-dark">Opinie</Link></div>
                    </div>
                    <div className="col-md-4 mb-1">
                        <h6>Informacje kontaktowe</h6>
                        <hr />
                        <div><p>Adres: ul. Fundacyjna 1b, 80-746 Gdańsk</p></div>
                        <div><p>Numer telefonu: (+48) 727 855 464</p></div>
                        <div><p>Fax: +48-208-1234567</p></div>
                        <div><p>Adres e-mail: awesometm@company.com</p></div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Footer;