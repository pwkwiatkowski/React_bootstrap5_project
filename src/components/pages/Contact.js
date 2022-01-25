import React from 'react';

function Contactus() {
    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Kontakt</h3>
                            <div className="underline mx-auto bg-warning"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className='container'>
                    <div className='card shadow'>
                        <div className='card-body'>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Formularz kontaktowy</h4>
                                    <hr />
                                    <div className="form-group">
                                        <label className="mb-1">Imię i nazwisko</label>
                                        <input type="text" className="form-control" placeholder="Wpisz imię i nazwisko" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Numer telefonu</label>
                                        <input type="text" className="form-control" placeholder="Wpisz numer telefonu" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Adres e-mail</label>
                                        <input type="text" className="form-control" placeholder="Wpisz adres e-mail" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Wiadomość</label>
                                        <textarea rows="3" className="form-control" placeholder="Wpisz swoją wiadomość..." />
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-warning shadow w-100">Wyślij</button>
                                    </div>

                                </div>

                                <div className="col-md-6 border-start">
                                    <h4>Informacje adresowe</h4>
                                    <div className="underline bg-warning"></div>
                                    <p>
                                        Adres: ul. Fundacyjna 1b, 80-746 Gdańsk
                                    </p>
                                    <p>
                                        Numer telefonu: (+48) 727 855 464
                                    </p>
                                    <p>
                                        Fax: +48-208-1234567
                                    </p>
                                    <p>
                                        Adres e-mail: awesometm@company.com
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contactus;