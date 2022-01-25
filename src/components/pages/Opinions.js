import React from 'react';
import l1 from '../images/l1.png';
import l2 from '../images/l2.jpg';
import l3 from '../images/l3.jpg';
import l4 from '../images/l4.jpg';
import l5 from '../images/l5.jpg';
import l6 from '../images/l6.jpg';
import l7 from '../images/l7.jpg';
import l8 from '../images/l8.jpg';


function Opinions() {
    return(
        <div>

 <section className="section">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>Zaufali nam</h3>
                <div className="underline bg-warning mx-auto mb-2"></div>
            </div>
                    
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card ">
                <img src={l1} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">Nowa era</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample1">
                            <div className="card card-body">
                            Firma Awesome™ Company to ludzie w pełni zaangażowani w to co robią. Profesjonalizm w tworzeniu stron internetowych oraz podejście do klienta to ich ogromne atuty.
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card ">
                <img src={l2} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">Exact Systems</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample2">
                            <div className="card card-body">
                            Strona zaprojektowana dla nas jest atrakcyjna wizualnie i przyjazna dla użytkownika. I co dla nas ważne - nie musimy już pamiętać o jej aktualizacji - firma Awesome™ Company na bieżąco aktualizuje treści i modernizuje stronę.</div>
                        </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card ">
                <img src={l3} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">Artmar-Stone</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample3">
                            <div className="card card-body">
                            Firma Awesome™ Company to rzetelny, kreatywny i profesjonalny wykonawca, którego szczerze Państwu polecam.</div>
                        </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card ">
                <img src={l4} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">Photobooth</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample4">
                            <div className="card card-body">
                            Firma stworzyła dla nas nowoczesną, funkcjonalną i ładną graficznie stronę internetową, dzięki czemu o wiele więcej osób odwiedza nas teraz on-line i pozyskuje aktualne informacje o naszych działaniach.</div>
                        </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card ">
                <img src={l5} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">Zebra</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample5">
                            <div className="card card-body">
                            Współpracę z Awesome™ Company definiuje wzorowy kontakt, bardzo duża elastyczność, praktyka i doświadczenie. Nasza długoletnia współpraca utwierdziła mnie w przekonaniu, że jest to firma godna zaufania.</div>
                        </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card ">
                <img src={l6} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">Daff-Gress</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample6" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample6">
                            <div className="card card-body">
                            Jeżeli planują Państwo modernizację swojej strony internetowej, zachęcam do powierzenia jej specjalistom. Takimi specjalistami są z pewnością pracownicy firmy Awesome™ Company.</div>
                        </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card ">
                <img src={l7} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">East India Co.</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample7" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample7">
                            <div className="card card-body">
                            Profesjonalne podejście do klienta, wiele ciekawych pomysłów i sugestii, szybki kontakt i realizacja, tak w kilku słowach określiłabym naszą współpracę. 
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card ">
                <img src={l8} className="d-block w-100 p-4" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">Pincroft</h5>
                    <a className="btn btn-warning" data-bs-toggle="collapse" href="#multiCollapseExample8" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Zobacz opinie</a>
                        <div className="collapse multi-collapse mt-3" id="multiCollapseExample8">
                            <div className="card card-body">
                            Polecam wszystkim przyszłym klientom. Kontakt przesympatyczny. Profesjonalne podejście do klienta. Strona bardzo ładnie się prezentuje. Pomoc w nawigacji. 
                            </div>
                        </div>
                </div>
                </div>
            </div>
            </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Opinions;