import React from 'react';
import { Link } from 'react-router-dom';


function Pricelist() {
    return(
        <div>
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3>Pakiety usług</h3>
                        <div className="underline mx-auto bg-warning"></div>
                    </div>

                    <div className="card-group">
                        <div className="card border-warning mb-3" >
                        <div className="card-header text-center">Pakiet Wellstart</div>
                            <div className="card-body">
                            <h1 className="text-center">1390 zł</h1>
                            <p className="card-text text-center">Wellstart to marka, którą stworzyliśmy z myślą o firmach, które dopiero rozpoczynają swoją działalność w Internecie.</p>
                                <ul className="list-group list-group-flush text-left">
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-shield-fill-check"></i>   kompletna strona www</li>
                                    <li className="list-group-item "><i class="bi bi-check2"></i>   profesjonalna strona www na szablonie</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-gear-fill"></i>   system CMS</li>
                                    <li className="list-group-item "><i class="bi bi-cash-coin"></i>   darmowa domena i hosting strony www przez 1 rok</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-pc-display"></i>   responsywność</li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                            <Link to="/contact" className="btn btn-warning">Zamawiam <i class="bi bi-chevron-right"></i></Link>
                            </div>
                        </div>
                        <div className="card border-warning mb-3" >
                        <div className="card-header text-center">Pakiet Professional</div>
                            <div className="card-body">
                            <h1 className="text-center">4300 zł</h1>
                            <p className="card-text text-center">Podstawowy pakiet strony www, który najlepiej sprawdzi się gdy potrzebujesz prostej i eleganckiej wizytówki swojej firmy.</p>
                                <ul className="list-group list-group-flush text-left">
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-shield-fill-check"></i>   kompletna strona www</li>
                                    <li className="list-group-item "><i class="bi bi-check2"></i>   profesjonalna strona www dopasowana do Twojej branży</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-gear-fill"></i>   system CMS</li>
                                    <li className="list-group-item "><i class="bi bi-cash-coin"></i>   darmowa domena i hosting strony www przez 1 rok</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-pc-display"></i>   responsywność</li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                            <Link to="/contact" className="btn btn-warning">Zamawiam <i class="bi bi-chevron-right"></i></Link>
                            </div>
                        </div>
                        <div className="card border-warning mb-3" >
                        <div className="card-header text-center">Pakiet VIP</div>
                            <div className="card-body">
                            <h1 className="text-center">5200 zł</h1>
                            <p className="card-text text-center">Najpopularniejszy pakiet w naszej ofercie. Dla każdego, kto chce posiadać najlepszą stronę w swojej branży i wygrać z konkurencją.</p>
                                <ul className="list-group list-group-flush text-left">
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-shield-fill-check"></i>   kompletna strona www</li>
                                    <li className="list-group-item "><i class="bi bi-check2"></i>   tworzona przez naszego najlepszego grafika</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-gear-fill"></i>   system CMS</li>
                                    <li className="list-group-item "><i class="bi bi-cash-coin"></i>   darmowa domena i hosting strony www przez 1 rok</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-pc-display"></i>   responsywność</li>
                                    <li className="list-group-item "><i class="bi bi-diagram-3"></i>   efektywność</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-star-fill"></i>   bezkonkurencyjność</li>
                                    <li className="list-group-item "><i class="bi bi-emoji-smile"></i>   wsparcie zespołu</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-fullscreen"></i>   oraz inne elementy które wspólnie ustalimy</li>

                                </ul>
                            </div>
                            <div className="card-footer text-center">
                            <Link to="/contact" className="btn btn-warning">Zamawiam <i class="bi bi-chevron-right"></i></Link>
                            </div>
                        </div>
                        <div className="card border-warning mb-3" >
                        <div className="card-header text-center">Pakiet Master</div>
                            <div className="card-body">
                            <h1 className="text-center">9000 zł +</h1>
                            <p className="card-text text-center">Pakiet dla najbardziej wymagających. Jeżeli chcesz, by Twoja strona była maksymalnie dopracowana to ten pakiet jest dla Ciebie. </p>
                                <ul className="list-group list-group-flush text-left">
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-shield-fill-check"></i>   kompletna strona www</li>
                                    <li className="list-group-item "><i class="bi bi-check2"></i>   nad stroną www pracuje cały zespół naszych najlepszych specjalistów</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-gear-fill"></i>   system CMS</li>
                                    <li className="list-group-item "><i class="bi bi-cash-coin"></i>   darmowa domena i hosting strony www przez 1 rok</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-pc-display"></i>   responsywność</li>
                                    <li className="list-group-item "><i class="bi bi-diagram-3"></i>   efektywność</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-star-fill"></i>   bezkonkurencyjność</li>
                                    <li className="list-group-item "><i class="bi bi-emoji-smile"></i>   wsparcie zespołu</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-fullscreen"></i>   oraz inne elementy które wspólnie ustalimy</li>
                                    <li className="list-group-item "><i class="bi bi-journal-check"></i>   projekt wspomagany przez analityków UX i marketingu</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-pc-display-horizontal"></i>   testy A/B</li>
                                    <li className="list-group-item "><i class="bi bi-archive"></i>   projektowane zakładki</li>
                                    <li className="list-group-item list-group-item-warning"><i class="bi bi-box-arrow-in-up-right"></i>   dokładna optymalizacja pod Google</li>
                                    <li className="list-group-item "><i class="bi bi-image"></i>   kilka wersji zdjęcia głównego/slide'ów</li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                            <Link to="/contact" className="btn btn-warning">Zamawiam <i class="bi bi-chevron-right"></i></Link>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        
    );
}


export default Pricelist;